import { Link as RouterLink } from "react-router";
import svgPaths from "../../imports/GiỏHang-1/svg-vv1a9r3j30";
import type { CartLine } from "../context/CartContext";
import { formatPrice, getProductById } from "../data/products";

type CartSidebarLineItemProps = {
  line: CartLine;
  onRemove: (lineId: string) => void;
};

export default function CartSidebarLineItem({ line, onRemove }: CartSidebarLineItemProps) {
  const product = getProductById(line.productId);
  const unitPriceLabel = formatPrice(product.price) ?? "$0.00";

  return (
    <div
      className="flex items-center gap-[12px] py-[12px] border-b border-[#f2f2f2] w-full min-h-0 shrink-0"
      data-name="Item"
    >
      <RouterLink
        to={`/product/${product.id}`}
        className="shrink-0 w-[72px] h-[84px] rounded-[4px] overflow-hidden border border-[#ececec]"
        data-name="Link → Product"
      >
        <img alt={product.name} className="w-full h-full object-cover" src={product.image} />
      </RouterLink>

      <div className="flex-1 min-w-0 pr-[8px]" data-name="Container">
        <RouterLink
          to={`/product/${product.id}`}
          className="block font-['Oswald:Bold',sans-serif] font-bold text-[#222] text-[12px] leading-[18px] hover:text-[#0db22a] transition-colors truncate"
          title={product.name}
        >
          {product.name}
          {line.size ? ` (${line.size})` : ""}
        </RouterLink>
        <p className="font-['Jost:Regular',sans-serif] text-[#505157] text-[12px] leading-[20px] mt-[4px]">
          {line.quantity}
          <span className="mx-[6px] text-[10px]">×</span>
          {unitPriceLabel}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onRemove(line.id)}
        className="shrink-0 size-[25px] cursor-pointer"
        data-name="Link - Remove this item"
        aria-label="Xóa sản phẩm"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
          <g id="Link - Remove this item">
            <rect fill="var(--fill-0, #E6E6E6)" height="25" rx="12.5" width="25" />
            <path d={svgPaths.p15dfcb80} fill="var(--fill-0, black)" id="Symbol" />
          </g>
        </svg>
      </button>
    </div>
  );
}
