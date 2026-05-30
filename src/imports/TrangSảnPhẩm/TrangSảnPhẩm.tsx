import { Link as RouterLink, useParams } from "react-router";
import svgPaths from "../TrangGiỏHang/svg-iyzs9d48al";
import { useState } from "react";
import imgGuaranteeSafeCheckout from "./f4e9263be51e185c0881012eeca03686bf50dc75.png";
import imgImgProductDesc from "./72160a4bac94a4a8f305256cf32b45a454d6816d.png";
import imgImageContact1Png from "./c2000d94d8e5d7dd1fac8c081b9ad2c8a35297d1.png";
import imgFigure from "./f6a7586ab049f7e8f087fb60cf77c048db40a1e4.png";
import imgImageContact3Png from "./9090d63ed0f5181223c0085f89969a453671ce1d.png";
import { useCart } from "../../app/context/CartContext";
import { formatPrice, getProductById, products } from "../../app/data/products";

/* ───────────────── helpers ───────────────── */

const fallbackSizes = ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44"];

/* ──────── Star Rating SVG ──────── */
function StarRating({ filled = 5 }: { filled?: number }) {
  return (
    <div className="flex gap-[2px]">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 0.5L8.7 5.1H13.5L9.6 8.1L10.9 12.9L7 10L3.1 12.9L4.4 8.1L0.5 5.1H5.3L7 0.5Z"
            fill={i <= filled ? "#000" : "#c3c3c3"}
          />
        </svg>
      ))}
    </div>
  );
}

/* ──────── Breadcrumb ──────── */
function Breadcrumb({ category, productName }: { category: string; productName: string }) {
  const items = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/products" },
    { label: category, to: "/products" },
    { label: productName },
  ];
  return (
    <div className="border-t border-[#ededed] py-[30px] px-[115px]">
      <div className="flex items-center gap-2 font-['Jost',sans-serif] text-[12px] text-[#222]">
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center gap-2">
            {idx > 0 && (
              <svg width="4" height="7" viewBox="0 0 4 7" fill="none">
                <path d="M0.5 0.5L3.5 3.5L0.5 6.5" stroke="#222" strokeWidth="0.8" />
              </svg>
            )}
            {item.to ? (
              <RouterLink to={item.to} className="hover:text-[#0db22a] transition-colors">
                {item.label}
              </RouterLink>
            ) : (
              <span>{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ──────── Product Gallery ──────── */
function ProductGallery({ gallery, name }: { gallery: string[]; name: string }) {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const thumbnails = gallery.length > 0 ? gallery : [];
  const activeImage = thumbnails[selectedThumb] ?? thumbnails[0];
  return (
    <div className="flex gap-[20px]">
      {/* Thumbnails */}
      <div className="flex flex-col gap-[5px] w-[105px] shrink-0">
        {thumbnails.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSelectedThumb(i)}
            className={`rounded-[3px] overflow-hidden border ${
              selectedThumb === i ? "border-[#0db22a]" : "border-transparent"
            } cursor-pointer transition-colors`}
          >
            <img src={src} alt="" className="w-full aspect-[103/120] object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 rounded-[5px] overflow-hidden">
        <img
          src={activeImage}
          alt={name}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

/* ──────── Product Info ──────── */
function ProductInfo({ product }: { product: ReturnType<typeof getProductById> }) {
  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const sizes = product.sizes.length > 0 ? product.sizes : fallbackSizes;

  const handleAddToCart = () => {
    addItem(product.id, quantity, selectedSize ?? undefined);
    openCart();
  };
  const price = formatPrice(product.price);
  const oldPrice = formatPrice(product.oldPrice);

  return (
    <div className="flex flex-col gap-0 pl-[15px]">
      {/* Title */}
      <h1 className="font-['Oswald',sans-serif] font-bold text-[22px] text-[#222] leading-[33px] mb-[22px]">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-[24px]">
        <StarRating filled={5} />
        <span className="font-['Jost',sans-serif] text-[12px] text-[#909090] leading-[24px]">
          (2 customer reviews)
        </span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-[40px] mb-[26px]">
        {price && (
          <span className="font-['Jost',sans-serif] font-bold text-[24px] text-[#222] leading-[24px]">
            {price}
          </span>
        )}
        {oldPrice && (
          <span className="font-['Jost',sans-serif] font-bold text-[24px] text-[#d6d6d6] leading-[24px] line-through">
            {oldPrice}
          </span>
        )}
      </div>

      {/* Description */}
      <div className="font-['Jost',sans-serif] text-[14px] text-[#505157] leading-[24px] mb-[30px]">
        {product.description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      {/* Size selector */}
      <div className="mb-[25px]">
        <div className="font-['Jost',sans-serif] font-bold text-[12px] text-[#222] uppercase tracking-wider mb-[16px]">
          SIZE :
        </div>
        <div className="flex flex-wrap gap-[5px]">
          {sizes.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setSelectedSize(value)}
              className={`relative w-[56px] h-[56px] rounded-[3px] border font-['Jost',sans-serif] font-bold text-[10px] text-center transition-all cursor-pointer
                ${selectedSize === value ? "border-[#0db22a] text-[#0db22a]" : "border-[#e2e2e2] text-black"}
                hover:border-[#aaa]
              `}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity + Add to Cart + Wishlist */}
      <div className="flex items-center gap-0 mb-[10px]">
        {/* Quantity */}
        <div className="flex items-center border border-[#dbdbdb] rounded-[3px] h-[52px] min-w-[110px] shrink-0">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-[40px] h-full font-['Oswald',sans-serif] text-[16px] text-[#505157] cursor-pointer hover:bg-gray-50 transition-colors"
          >
            -
          </button>
          <div className="flex-1 text-center font-['Jost',sans-serif] font-medium text-[14px] text-[#505157]">
            {quantity}
          </div>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="w-[40px] h-full font-['Oswald',sans-serif] text-[16px] text-[#505157] cursor-pointer hover:bg-gray-50 transition-colors"
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex-1 h-[52px] mx-[10px] bg-[#e5e5e5] rounded-[3px] font-['Oswald',sans-serif] font-bold text-[14px] text-[#222] uppercase cursor-pointer hover:bg-[#d5d5d5] transition-colors"
        >
          ADD TO CART
        </button>

        {/* Wishlist */}
        <button
          type="button"
          className="w-[52px] h-[52px] bg-[#e5e5e5] rounded-[3px] flex items-center justify-center shrink-0 cursor-pointer hover:bg-[#d5d5d5] transition-colors"
          aria-label="Add to wishlist"
        >
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
            <path
              d="M8.5 14.5C8.5 14.5 1.5 10 1.5 5.5C1.5 3.5 3 1.5 5.5 1.5C7 1.5 8 2.5 8.5 3C9 2.5 10 1.5 11.5 1.5C14 1.5 15.5 3.5 15.5 5.5C15.5 10 8.5 14.5 8.5 14.5Z"
              stroke="#222"
              strokeWidth="1.2"
            />
          </svg>
        </button>
      </div>

      {/* Buy It Now */}
      <button
        type="button"
        className="w-full h-[52px] rounded-[3px] border border-[#e5e5e5] font-['Oswald',sans-serif] font-bold text-[14px] text-[#222] uppercase cursor-pointer hover:bg-gray-50 transition-colors shadow-[3px_3px_6px_0px_rgba(0,0,0,0.08)] flex items-center justify-center gap-2 mb-[25px]"
      >
        BUY IT NOW
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="-rotate-45">
          <path d="M1 5H9M5 1L9 5L5 9" stroke="#222" strokeWidth="1.2" />
        </svg>
      </button>

      {/* Compare / Ask / Share */}
      <div className="flex items-center gap-[30px] mb-[22px]">
        <button type="button" className="flex items-center gap-[8px] font-['Jost',sans-serif] text-[12px] text-[#505157] cursor-pointer hover:text-[#222] transition-colors">
          <svg width="17" height="14" viewBox="0 0 17 14" fill="none">
            <path d="M1 7H6M11 7H16M6 1L1 7L6 13M11 1L16 7L11 13" stroke="#505157" strokeWidth="1" />
          </svg>
          Compare
        </button>
        <button type="button" className="flex items-center gap-[6px] font-['Jost',sans-serif] font-medium text-[12px] text-[#505157] cursor-pointer hover:text-[#222] transition-colors">
          <svg width="30" height="16" viewBox="0 0 30 16" fill="none">
            <circle cx="15" cy="8" r="7" stroke="#505157" strokeWidth="1" />
            <text x="15" y="12" textAnchor="middle" fill="#505157" fontSize="10" fontFamily="Jost">?</text>
          </svg>
          Ask a Question
        </button>
        <button type="button" className="flex items-center gap-[6px] font-['Jost',sans-serif] font-medium text-[12px] text-[#505157] cursor-pointer hover:text-[#222] transition-colors">
          <svg width="29" height="16" viewBox="0 0 29 16" fill="none">
            <path d="M10 2L4 8L10 14M19 2L25 8L19 14" stroke="#505157" strokeWidth="1" />
          </svg>
          Social Share
        </button>
      </div>

      {/* Safe Checkout Badge */}
      <div className="border border-[#e5e5e5] rounded-[10px] pt-[22px] pb-[36px] px-[10px] relative mb-[22px]">
        <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 bg-white px-[10px]">
          <span className="font-['Jost',sans-serif] font-bold text-[14px] text-[#222] text-center whitespace-nowrap">
            THE BENEFITS OF CHOOSING US
          </span>
        </div>
        <div className="flex justify-center pt-[16px]">
          <img src={imgGuaranteeSafeCheckout} alt="Guarantee & Safe Checkout" className="max-w-full h-auto" />
        </div>
      </div>

      {/* Delivery Info */}
      <div className="flex flex-col gap-[10px] mb-[36px]">
        <div className="flex items-center gap-[16px]">
          <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
            <rect x="1" y="1" width="26" height="16" rx="2" stroke="#505157" strokeWidth="1.2" />
            <path d="M1 6H27" stroke="#505157" strokeWidth="1" />
            <rect x="3" y="9" width="8" height="2" rx="1" fill="#505157" />
          </svg>
          <p className="font-['Jost',sans-serif] text-[14px]">
            <span className="font-semibold text-[#222]">Estimated Delivery : </span>
            <span className="text-[#505157]">10 - 13 May, 2026</span>
          </p>
        </div>
        <div className="flex items-center gap-[16px]">
          <svg width="28" height="19" viewBox="0 0 28 19" fill="none">
            <path d="M2 9L14 2L26 9" stroke="#505157" strokeWidth="1.2" />
            <rect x="1" y="7" width="26" height="11" rx="2" stroke="#505157" strokeWidth="1.2" />
          </svg>
          <p className="font-['Jost',sans-serif] text-[14px]">
            <span className="font-semibold text-[#222]">Free Shipping &amp; Returns : </span>
            <span className="text-[#505157]">On all order over $200.00</span>
          </p>
        </div>
      </div>

      {/* SKU / Categories / Tags / Brand */}
      <div className="border-t border-[#e5e5e5] pt-[36px] flex flex-col gap-[6px]">
        <div className="flex font-['Jost',sans-serif] font-semibold text-[12px]">
          <span className="text-[#222] uppercase mr-[3px]">SKU :</span>
          <span className="text-[#222] uppercase">{product.id}</span>
        </div>
        <div className="flex font-['Jost',sans-serif] font-semibold text-[12px]">
          <span className="text-[#222] uppercase mr-[3px]">CATEGORIES :</span>
          <span className="text-[#505157] capitalize">{product.category}</span>
        </div>
        <div className="flex font-['Jost',sans-serif] font-semibold text-[12px]">
          <span className="text-[#222] uppercase mr-[3px]">TAGS :</span>
          <span className="text-[#505157] capitalize">{product.tags.join(", ")}</span>
        </div>
        <div className="font-['Jost',sans-serif] font-semibold text-[12px]">
          <span className="text-[#222] uppercase">BRAND: </span>
          <span className="text-[#505157] capitalize">{product.brand}</span>
        </div>
      </div>
    </div>
  );
}

/* ──────── Tab Section ──────── */
function TabSection({ details }: { details: string[] }) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional information" },
    { id: "reviews", label: "Reviews", count: 2 },
  ];

  return (
    <div className="pt-[120px]">
      {/* Tab headers */}
      <div className="flex gap-0 mb-[24px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`font-['Oswald',sans-serif] font-bold text-[24px] leading-[36px] px-[35px] first:pl-0 cursor-pointer transition-colors
              ${activeTab === tab.id ? "text-[#0db22a]" : "text-[#222] hover:text-[#0db22a]"}`}
          >
            {tab.label}
            {tab.count != null && (
              <span className="font-['Oswald',sans-serif] font-semibold text-[12px] ml-[4px]">
                ({tab.count})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === "description" && (
        <div className="flex flex-col gap-[12px]">
          <div className="font-['Jost',sans-serif] text-[14px] text-[#505157] leading-[24px]">
            <p className="mb-0">
              Donec dapibus tellus sem, quis aliquam libero pharetra non. Nam vitae fermentum leo. Pellentesque bibendum dui eu mi tempor sodales. Integer gravida odio in sem laoreet tempus. Nunc vehicula nibh mauris, id
            </p>
            <p className="mb-0">
              bibendum metus facilisis iaculis. Phasellus suscipit dictum lacus eu auctor. Duis commodo faucibus lectus, et accumsan quam egestas at. Praesent eros mi, condimentum sit amet felis quis, hendrerit ullamcorper turpis.
            </p>
            <p>
              Etiam vel cursus elit, ut semper velit. Aenean sagittis leo massa, fermentum sollicitudin sem facilisis vel. Suspendisse potenti. Fusce porta tincidunt interdum.
            </p>
          </div>

          <div className="font-['Jost',sans-serif] text-[14px] text-[#505157] leading-[24px]">
            <p className="mb-0">
              Praesent nec diam eleifend, vestibulum justo aliquet, aliquam ipsum. Curabitur egestas, augue a pellentesque ornare, tellus velit pulvinar nisl, sit amet placerat enim sem vel elit. Duis a mi metus. Suspendisse vulputate
            </p>
            <p>
              velit tempus efficitur lacus sit amet nunc ultricies ac gravida ante tempor
            </p>
          </div>

          <div className="pt-[25px] pb-[12px]">
            <img src={imgImgProductDesc} alt="Product description" className="h-[30px] max-w-[190px]" />
            <h3 className="font-['Oswald',sans-serif] font-bold text-[18px] text-[#222] mt-[40px]">
              Item specifics
            </h3>
            <ul className="mt-[30px] flex flex-col gap-[12px]">
              {details.map((item, i) => (
                <li key={i} className="flex items-center gap-[11px]">
                  <span className="w-[8px] h-[8px] rounded-full border border-[#bdbdbd] shrink-0" />
                  <span className="font-['Jost',sans-serif] text-[14px] text-[#505157] leading-[24px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {activeTab === "additional" && (
        <div className="font-['Jost',sans-serif] text-[14px] text-[#505157] leading-[24px]">
          <p>Additional product information will be displayed here.</p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="font-['Jost',sans-serif] text-[14px] text-[#505157] leading-[24px]">
          <p>Customer reviews will be displayed here.</p>
        </div>
      )}
    </div>
  );
}

/* ──────── Related Products ──────── */
function RelatedProducts({ items }: { items: Array<ReturnType<typeof getProductById>> }) {
  return (
    <div className="py-[60px] px-[100px]">
      <h2 className="font-['Oswald',sans-serif] font-bold text-[24px] text-[#222] uppercase mb-[40px] pl-[25px]">
        RELATED PRODUCTS
      </h2>
      <div className="grid grid-cols-4 gap-0">
        {items.map((product) => (
          <RouterLink
            key={product.id}
            to={`/product/${product.id}`}
            className="px-[15px] pb-[30px] group"
          >
            <div className="overflow-hidden rounded-[3px] mb-[24px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[302/354] object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              />
            </div>
            <div className="flex flex-col gap-[14px]">
              <h3 className="font-['Jost',sans-serif] font-bold text-[14px] text-[#222] leading-[21px]">
                {product.name}
              </h3>
              <div className="flex items-center gap-[4px]">
                <StarRating filled={product.rating} />
                <span className="font-['Jost',sans-serif] font-medium text-[12px] text-[#b5b5b5]">
                  ({product.reviews})
                </span>
              </div>
              <div className="font-['Jost',sans-serif] font-bold text-[14px]">
                {formatPrice(product.price) && (
                  <span className="text-[#232630]">{formatPrice(product.price)}</span>
                )}
                {formatPrice(product.oldPrice) && (
                  <span className="text-[#7c7c7c] line-through">{formatPrice(product.oldPrice)}</span>
                )}
              </div>
            </div>
          </RouterLink>
        ))}
      </div>
    </div>
  );
}

/* ──────── Footer ──────── */
function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-black pt-[80px] pb-[98px]">
        <div className="max-w-[1320px] mx-auto px-[100px]">
          <div className="grid grid-cols-[440px_220px_220px_440px] gap-0">
            {/* Contact Us */}
            <div className="p-[15px]">
              <h4 className="font-['Oswald',sans-serif] font-bold text-[18px] text-white uppercase mb-[20px]">
                CONTACT US
              </h4>
              <p className="font-['Jost',sans-serif] text-[16px] text-white leading-[24px] mb-[20px]">
                Morbi ullamcorper ligula sit amet efficitur pellentesque.
                <br />
                Aliquam ornare quam tellus ultricies molestie tortor.
              </p>
              <div className="flex items-center gap-[27px] mb-[20px]">
                <img src={imgImageContact1Png} alt="" className="w-[28px] h-[28px]" />
                <div className="font-['Jost',sans-serif] text-white uppercase">
                  <span className="font-bold text-[13px]">HOTLINE:</span>{" "}
                  <span className="font-bold text-[18px]">+0123 456 789</span>
                </div>
              </div>
              <div className="flex items-center gap-[27px] mb-[20px]">
                <div className="w-[28px] h-[24px]" />
                <span className="font-['Jost',sans-serif] text-[16px] text-white">
                  info@example.com
                </span>
              </div>
              <div className="flex items-center gap-[27px]">
                <div className="w-[28px] h-[24px] overflow-hidden relative">
                  <img src={imgFigure} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <img src={imgImageContact3Png} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <span className="font-['Jost',sans-serif] text-[16px] text-white">
                  Monday till Friday 10 to 6 EST
                </span>
              </div>
            </div>

            {/* Help */}
            <div className="p-[15px]">
              <h4 className="font-['Oswald',sans-serif] font-bold text-[18px] text-white uppercase mb-[20px]">
                HELP
              </h4>
              <ul className="flex flex-col gap-[6.5px]">
                {["Help Center", "Shipping Info", "Returns", "How To Order", "How To Track", "Size Guide"].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-['Jost',sans-serif] text-[14px] text-white hover:text-[#0db22a] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="p-[15px]">
              <h4 className="font-['Oswald',sans-serif] font-bold text-[18px] text-white uppercase mb-[20px]">
                COMPANY
              </h4>
              <ul className="flex flex-col gap-[6.5px]">
                {["About Us", "Our Blog", "Careers", "Store Locations", "Testimonial", "Sitemap"].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-['Jost',sans-serif] text-[14px] text-white hover:text-[#0db22a] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="p-[15px]">
              <h4 className="font-['Oswald',sans-serif] font-bold text-[18px] text-white uppercase mb-[20px]">
                NEWSLETTER
              </h4>
              <p className="font-['Jost',sans-serif] text-[14px] text-white leading-[21px] mb-[20px]">
                Get 15% off your first purchaxse! Plus, be the first to know about
                <br />
                sales new product launches and exclusive offers!
              </p>
              <div className="relative mb-[20px]">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full h-[54px] bg-white rounded-full pl-[20px] pr-[60px] font-['Jost',sans-serif] text-[13px] text-[#959595] capitalize outline-none"
                />
                <button
                  type="button"
                  className="absolute right-[2px] top-[2px] w-[50px] h-[50px] bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-[#333] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 9H16M10 3L16 9L10 15" stroke="white" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>
              <div className="flex gap-[15px]">
                {["f", "t", "in", "ig", "yt"].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-[28px] h-[28px] flex items-center justify-center text-white text-[12px] font-bold hover:text-[#0db22a] transition-colors"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black border-t border-[rgba(255,255,255,0.1)]">
        <div className="max-w-[1320px] mx-auto px-[100px] py-[15px] flex items-center justify-between">
          <span className="font-['Jost',sans-serif] text-[14px] text-white">
            Copyright © 2026 RisingBamboo. All Rights Reserved.
          </span>
          <div className="flex items-center gap-[16px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-[36px] h-[36px] bg-[#333] rounded-sm" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function ScrollTopRing() {
  return (
    <div className="absolute left-0 size-[46px] top-0" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g clipPath="url(#clip0_scroll_top)" id="SVG">
          <path d={svgPaths.p375dda80} id="Vector" stroke="var(--stroke-0, #0DB22A)" strokeDasharray="138.87 138.87" strokeWidth="1.80392" />
        </g>
        <defs>
          <clipPath id="clip0_scroll_top">
            <rect fill="white" height="46" width="46" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ScrollTopArrow() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <div className="absolute inset-[-2.62%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15.3924">
          <g id="Container">
            <path d={svgPaths.p2f3c8f80} fill="var(--fill-0, black)" id="Symbol" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ScrollToTopButton() {
  return (
    <div
      className="fixed bg-white content-stretch flex items-center justify-center p-[12px] pointer-events-auto rounded-[9999px] size-[46px] bottom-[40px] right-[20px]"
      data-name="Background"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div className="absolute bottom-0 pointer-events-none right-0 rounded-[9999px] size-[46px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_2px_rgba(34,34,34,0.2)]" />
      </div>
      <ScrollTopRing />
      <ScrollTopArrow />
    </div>
  );
}

/* ──────── Main Page Component ──────── */
export default function TrangSnPhm() {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4);
  const gallery = product.gallery.length > 0 ? product.gallery : [product.image].filter(Boolean);

  return (
    <div className="bg-white w-full" data-name="Trang sản phẩm">
      {/* Breadcrumb */}
      <Breadcrumb category={product.category} productName={product.name} />

      {/* Product Section */}
      <div className="max-w-[1320px] mx-auto px-[15px]">
        <div className="grid grid-cols-12 gap-0">
          {/* Gallery - 7 columns */}
          <div className="col-span-7 pr-[45px]">
            <ProductGallery gallery={gallery} name={product.name} />
          </div>

          {/* Product Info - 5 columns */}
          <div className="col-span-5">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Tabs */}
        <TabSection details={product.details} />
      </div>

      {/* Related Products */}
      <RelatedProducts items={relatedProducts} />

      {/* Footer */}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}