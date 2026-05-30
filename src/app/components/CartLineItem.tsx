import { Link as RouterLink } from "react-router";
import svgPaths from "../../imports/TrangGiỏHang/svg-iyzs9d48al";
import type { CartLine } from "../context/CartContext";
import { formatPrice, getProductById } from "../data/products";

/** Cột: sản phẩm | giá | số lượng | subtotal | xóa */
export const CART_TABLE_GRID =
  "grid grid-cols-[minmax(0,1fr)_minmax(72px,100px)_minmax(120px,140px)_minmax(72px,100px)_40px] gap-x-2 sm:gap-x-4 items-center w-full";

const headerCellClass =
  "font-['Jost',sans-serif] font-bold text-[14px] text-[#222] uppercase leading-[24px] text-center";

type CartLineItemProps = {
  line: CartLine;
  onUpdateQuantity: (lineId: string, quantity: number) => void;
  onRemove: (lineId: string) => void;
  isLast?: boolean;
};

export function CartTableHeader() {
  return (
    <div
      className={`${CART_TABLE_GRID} px-[20px] sm:px-[28px] py-5`}
      data-name="Container"
    >
      <span className={`${headerCellClass} text-left sm:pl-2`}>Product</span>
      <span className={headerCellClass}>Price</span>
      <span className={headerCellClass}>Quantity</span>
      <span className={headerCellClass}>Subtotal</span>
      <span className="sr-only">Remove</span>
    </div>
  );
}

export default function CartLineItem({
  line,
  onUpdateQuantity,
  onRemove,
  isLast = false,
}: CartLineItemProps) {
  const product = getProductById(line.productId);
  const unitPrice = product.price ?? 0;
  const lineSubtotal = unitPrice * line.quantity;
  const priceLabel = formatPrice(unitPrice) ?? "$0.00";
  const subtotalLabel = formatPrice(lineSubtotal) ?? "$0.00";

  return (
    <div
      className={`${CART_TABLE_GRID} px-[20px] sm:px-[28px] py-[24px] sm:py-[30px] ${
        isLast ? "" : "border-b border-[#f2f2f2]"
      }`}
      data-name="Sản phẩm cart"
    >
      <div className="flex min-w-0 items-center gap-4 sm:gap-5">
        <RouterLink
          to={`/product/${product.id}`}
          className="max-w-[100px] shrink-0 overflow-hidden rounded-[6px] border border-[#ececec] p-px"
        >
          <img
            alt={product.name}
            className="aspect-[100/117] w-[88px] sm:w-[98px] object-cover"
            src={product.image}
          />
        </RouterLink>
        <RouterLink
          to={`/product/${product.id}`}
          className="font-['Jost',sans-serif] font-bold text-[14px] leading-[24px] text-[#222] hover:text-[#0db22a] transition-colors line-clamp-2 min-w-0"
          title={product.name}
        >
          {product.name}
          {line.size ? ` — ${line.size}` : ""}
        </RouterLink>
      </div>

      <p className="text-center font-['Jost',sans-serif] text-[14px] font-extrabold uppercase leading-[24px] text-[#505157]">
        {priceLabel}
      </p>

      <div className="flex justify-center">
        <div className="relative flex h-[50px] w-[129px] min-w-[100px] items-center rounded-[50px] bg-[#f2f2f2]">
          <button
            type="button"
            onClick={() => onUpdateQuantity(line.id, line.quantity - 1)}
            className="flex h-full w-10 cursor-pointer items-center justify-center font-['Oswald',sans-serif] text-[20px] font-medium text-[#505157]"
            aria-label="Giảm số lượng"
          >
            –
          </button>
          <span className="flex-1 text-center font-['Jost',sans-serif] text-[12px] font-medium text-[#505157]">
            {line.quantity}
          </span>
          <button
            type="button"
            onClick={() => onUpdateQuantity(line.id, line.quantity + 1)}
            className="flex h-full w-10 cursor-pointer items-center justify-center font-['Oswald',sans-serif] text-[20px] font-medium text-[#505157]"
            aria-label="Tăng số lượng"
          >
            +
          </button>
        </div>
      </div>

      <p className="text-center font-['Jost',sans-serif] text-[14px] font-extrabold uppercase leading-[24px] text-[#505157]">
        {subtotalLabel}
      </p>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => onRemove(line.id)}
          className="size-[25px] shrink-0 cursor-pointer"
          aria-label="Xóa sản phẩm"
        >
          <svg className="block size-full" fill="none" viewBox="0 0 25 25">
            <g>
              <rect fill="#E6E6E6" height="25" rx="12.5" width="25" />
              <path d={svgPaths.p15dfcb80} fill="black" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
