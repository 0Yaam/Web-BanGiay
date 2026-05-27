import {
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router";

import { products } from "../data/shopData";
import { useCart } from "../context/CartContext";

type FigmaPageShellProps = {
  children: ReactNode;
  designWidth?: number;
  page: string;
};

type FigmaAction =
  | "home"
  | "shop"
  | "product"
  | "about"
  | "contact"
  | "cart"
  | "account"
  | "login"
  | "register"
  | "search"
  | "add-cart"
  | "checkout"
  | "place-order"
  | "coupon"
  | "load-more"
  | "wishlist";

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

function getElementText(element: HTMLElement) {
  return normalizeText(element.innerText || element.textContent || "");
}

function findActionFromText(text: string): FigmaAction | null {
  if (!text) return null;
  if (text.includes("PLACE ORDER")) return "place-order";
  if (text.includes("PROCEED TO CHECKOUT") || text === "CHECKOUT") return "checkout";
  if (text.includes("ADD TO CART")) return "add-cart";
  if (text.includes("APPLY COUPON") || text.includes("UPDATE CART")) return "coupon";
  if (text.includes("LOAD MORE")) return "load-more";
  if (text.includes("WISHLIST")) return "wishlist";
  if (text.includes("VIEW ALL PRODUCT") || text.includes("CONTINUE SHOPPING")) return "shop";
  if (text.includes("BUY IT NOW")) return "checkout";
  if (text.includes("SHOP NOW") || text.includes("BUY NOW") || text.includes("SHOP WOMEN") || text.includes("SHOP MEN")) return "product";
  if (text === "HOME") return "home";
  if (text === "SHOP") return "shop";
  if (text === "PRODUCT") return "product";
  if (text === "BLOG" || text.includes("ABOUT US")) return "about";
  if (text.includes("CONTACT US") || text === "CONTACT") return "contact";
  if (text.includes("MY ACCOUNT")) return "account";
  if (text === "LOGIN" || text === "SIGN IN") return "login";
  if (text === "REGISTER" || text === "CREATE ACCOUNT") return "register";
  if (text === "SEARCH") return "search";
  if (text === "CART") return "cart";

  return null;
}

function nearestInteractiveElement(start: HTMLElement, root: HTMLElement) {
  let element: HTMLElement | null = start;
  let depth = 0;

  while (element && element !== root && depth < 8) {
    const name = element.dataset.name ?? "";
    if (
      element.dataset.figmaAction ||
      name.includes("Link") ||
      name.includes("Button") ||
      name.includes("logo") ||
      name.includes("Search") ||
      name.includes("Input - Product quantity") ||
      name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes("San pham")
    ) {
      return element;
    }

    element = element.parentElement;
    depth += 1;
  }

  return start;
}

function actionFromHeaderIcon(event: ReactMouseEvent<HTMLDivElement>, root: HTMLElement): FigmaAction | null {
  const rootRect = root.getBoundingClientRect();
  const xFromRight = rootRect.right - event.clientX;
  const y = event.clientY - rootRect.top;

  if (y > 0 && y < 170) {
    if (xFromRight < 86) return "cart";
    if (xFromRight < 156) return "account";
    if (xFromRight < 238) return "search";
  }

  return null;
}

function markAction(element: HTMLElement, action: FigmaAction, productId?: number) {
  element.dataset.figmaAction = action;
  if (productId) element.dataset.productId = String(productId);
  element.setAttribute("role", action === "search" ? "button" : "link");
  element.tabIndex = 0;
}

function hydrateInteractiveTargets(root: HTMLElement) {
  const textNodes = root.querySelectorAll<HTMLElement>("p, span");

  textNodes.forEach(textNode => {
    const action = findActionFromText(getElementText(textNode));
    if (!action) return;

    const target = nearestInteractiveElement(textNode, root);
    markAction(target, action);
  });

  root.querySelectorAll<HTMLElement>('[data-name="logo"], [data-name="Logo"]').forEach(element => {
    const target = element.parentElement ?? element;
    markAction(target, "home");
  });

  root.querySelectorAll<HTMLElement>('[data-name="Search"]').forEach(element => {
    markAction(element, "search");
  });

  const productCards = Array.from(root.querySelectorAll<HTMLElement>("[data-name]")).filter(element => {
    const name = (element.dataset.name ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return name.includes("San pham");
  });

  productCards.forEach((card, index) => {
    const product = products[index % products.length] ?? products[0];
    markAction(card, "product", product.id);
  });
}

function isInputLike(element: HTMLElement) {
  const text = getElementText(element);
  const rect = element.getBoundingClientRect();
  if (rect.width < 30 && rect.height < 30) return false;
  if (text.includes("SUBMIT") || text.includes("LOGIN") || text.includes("REGISTER") || text.includes("PLACE ORDER")) return false;
  if (text.includes("APPLY COUPON") || text.includes("UPDATE CART")) return false;
  if (element.closest('[data-name="Button"]')) return false;

  return true;
}

function getInputType(label: string) {
  if (label.includes("PASSWORD")) return "password";
  if (label.includes("EMAIL")) return "email";
  if (label.includes("PHONE")) return "tel";
  if (label.includes("POSTCODE") || label.includes("ZIP")) return "text";
  return "text";
}

function hydrateNativeInputs(root: HTMLElement, onSearch: (query: string) => void) {
  const fieldTargets = root.querySelectorAll<HTMLElement>('[data-name="Input"], [data-name="Textarea"]');

  fieldTargets.forEach((target, index) => {
    if (!isInputLike(target)) return;
    if (target.querySelector("input, textarea")) return;

    const labelText = getElementText(target.parentElement ?? target);
    const placeholder = getElementText(target) || "";
    const nativeField =
      target.dataset.name === "Textarea"
        ? document.createElement("textarea")
        : document.createElement("input");

    nativeField.className = "figma-native-input";
    nativeField.setAttribute("aria-label", labelText || placeholder || `Field ${index + 1}`);
    nativeField.setAttribute("placeholder", placeholder);

    if (nativeField instanceof HTMLInputElement) {
      nativeField.type = getInputType(`${labelText} ${placeholder}`);
    }

    nativeField.addEventListener("click", event => event.stopPropagation());
    nativeField.addEventListener("keydown", event => {
      if (event.key === "Enter" && placeholder.includes("SEARCH")) {
        event.preventDefault();
        onSearch((event.currentTarget as HTMLInputElement).value);
      }
    });

    target.appendChild(nativeField);
  });
}

function updateCartBadge(root: HTMLElement, totalItems: number) {
  root.querySelectorAll<HTMLElement>("p").forEach(paragraph => {
    const currentValue = paragraph.textContent?.trim() ?? "";
    if (paragraph.dataset.figmaCartBadge !== "true" && !/^\d+$/.test(currentValue)) return;
    if (!paragraph.parentElement?.className.includes("text-[#60ff00]")) return;
    paragraph.dataset.figmaCartBadge = "true";
    paragraph.textContent = String(totalItems);
  });
}

function adjustQuantity(target: HTMLElement, delta: number) {
  let group = target.parentElement;
  let depth = 0;

  while (group && depth < 5) {
    const numericText = Array.from(group.querySelectorAll<HTMLElement>("p")).find(element => /^\d+$/.test(element.textContent?.trim() ?? ""));
    if (numericText) {
      const currentValue = Number(numericText.textContent);
      numericText.textContent = String(Math.max(1, currentValue + delta));
      return true;
    }

    group = group.parentElement;
    depth += 1;
  }

  return false;
}

export default function FigmaPageShell({ children, designWidth = 1421, page }: FigmaPageShellProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageHeight, setStageHeight] = useState<number | undefined>();
  const [notice, setNotice] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { addItem, clearCart, totalItems } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 2200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    if (!root || !stage) return;

    const updateScale = () => {
      const shouldScale = window.innerWidth < 900;
      const scale = shouldScale ? Math.min(1, root.clientWidth / designWidth) : 1;
      root.style.setProperty("--figma-scale", String(scale));
      root.style.setProperty("--figma-design-width", `${designWidth}px`);
      setStageHeight(shouldScale ? Math.ceil(stage.scrollHeight * scale) : undefined);
    };

    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(root);
    resizeObserver.observe(stage);
    window.addEventListener("resize", updateScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, [designWidth]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    hydrateInteractiveTargets(root);
    hydrateNativeInputs(root, search => {
      setQuery(search);
      navigate(`/products?search=${encodeURIComponent(search)}`);
    });
    updateCartBadge(root, totalItems);
  }, [location.pathname, totalItems, navigate]);

  const runAction = (action: FigmaAction, source?: HTMLElement | null) => {
    const productId = Number(source?.dataset.productId) || 1;

    if (action === "home") navigate("/");
    if (action === "shop") navigate("/products");
    if (action === "product") navigate(`/product/${productId}`);
    if (action === "about") navigate("/about-us");
    if (action === "contact") navigate("/contact");
    if (action === "cart") navigate("/cart");
    if (action === "account") navigate("/account");
    if (action === "login") navigate("/login");
    if (action === "register") navigate("/register");
    if (action === "search") setSearchOpen(true);
    if (action === "checkout") navigate("/checkout");

    if (action === "add-cart") {
      addItem(products[productId - 1] ?? products[0]);
      setNotice("Added to cart");
    }

    if (action === "place-order") {
      clearCart();
      setNotice("Order placed");
      navigate("/checkout/success");
    }

    if (action === "coupon") setNotice("Coupon updated");
    if (action === "load-more") setNotice("All Figma products are already shown");
    if (action === "wishlist") setNotice("Saved to wishlist");
  };

  const handleClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    const root = rootRef.current;
    if (!root) return;

    const target = event.target as HTMLElement;
    const text = getElementText(target);
    if (text === "+" && adjustQuantity(target, 1)) return;
    if ((text === "-" || text === "\u2013" || text === "\u2212") && adjustQuantity(target, -1)) return;

    const source = nearestInteractiveElement(target, root);
    const action =
      (source.dataset.figmaAction as FigmaAction | undefined) ??
      findActionFromText(getElementText(source)) ??
      actionFromHeaderIcon(event, root);

    if (!action) return;
    event.preventDefault();
    runAction(action, source);
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target as HTMLElement;
    const action = target.dataset.figmaAction as FigmaAction | undefined;
    if (!action) return;
    event.preventDefault();
    runAction(action, target);
  };

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchOpen(false);
    navigate(query.trim() ? `/products?search=${encodeURIComponent(query.trim())}` : "/products");
  };

  return (
    <div
      className="figma-page-shell"
      data-figma-page={page}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      ref={rootRef}
      style={stageHeight ? { minHeight: stageHeight } : undefined}
    >
      <div className="figma-stage" ref={stageRef}>
        {children}
      </div>

      {searchOpen ? (
        <form className="figma-search-overlay" onSubmit={submitSearch}>
          <input
            autoFocus
            aria-label="Search products"
            onChange={event => setQuery(event.target.value)}
            placeholder="Search"
            value={query}
          />
          <button type="submit">Search</button>
          <button aria-label="Close search" onClick={() => setSearchOpen(false)} type="button">
            x
          </button>
        </form>
      ) : null}

      {notice ? <div className="figma-toast">{notice}</div> : null}
    </div>
  );
}
