import { Link, useLocation } from "react-router";
import imgLogo from "../../imports/TrangChủ/89309c4327d643be9d6885f84d12f69b214a62e7.png";
import CartCountBadge from "./CartCountBadge";
import { useCart } from "../context/CartContext";
import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";

const navItems = [
  { label: "Home", to: "/", match: "/" },
  { label: "Shop", to: "/products", match: "/products" },
  { label: "Contact", to: "/contact", match: "/contact" },
  { label: "Blog", to: "/info", match: "/info" },
];

export default function Navigation() {
  const { toggleCart } = useCart();
  const location = useLocation();

  return (
    <header className="bg-white font-['Jost',sans-serif]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center py-6">
          <div />

          <Link to="/" className="inline-flex items-center justify-center" aria-label="MATE Home">
            <img src={imgLogo} alt="MATE" className="h-[24px] w-[124px] object-contain" />
          </Link>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              className="relative flex items-center justify-center size-11 rounded-full bg-[#f1f1f1] text-[#222] hover:bg-[#e7e7e7]"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <Link
              to="/account"
              className="relative flex items-center justify-center size-11 rounded-full bg-[#f1f1f1] text-[#222] hover:bg-[#e7e7e7]"
              aria-label="Account"
            >
              <User size={18} />
            </Link>
            <button
              type="button"
              onClick={toggleCart}
              className="relative flex items-center justify-center size-11 rounded-full bg-[#f1f1f1] text-[#222] hover:bg-[#e7e7e7]"
              aria-label="Cart"
            >
              <ShoppingCart size={18} />
              <CartCountBadge />
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-10 py-3 font-['Jost',sans-serif] text-[12px] font-semibold uppercase tracking-[0.2em] text-[#777]">
            {navItems.map(item => {
              const isActive = item.match === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.match);

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`group inline-flex items-center gap-1 hover:text-[#111] ${
                    isActive ? "text-[#111]" : ""
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={12}
                    className={`text-[#bdbdbd] group-hover:text-[#111] ${
                      isActive ? "text-[#111]" : ""
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
