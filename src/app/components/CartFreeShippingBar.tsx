import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/products";
import svgPaths from "../../imports/TrangGiỏHang/svg-iyzs9d48al";

const FREE_SHIPPING_THRESHOLD = 200;

export default function CartFreeShippingBar() {
  const { subtotal } = useCart();
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const remainingLabel = formatPrice(remaining) ?? "$0.00";
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const markerLeft = Math.min(Math.max(progress, 4), 96);

  return (
    <div className="w-full pb-[40px] pt-[2px]" data-name="Container">
      {subtotal >= FREE_SHIPPING_THRESHOLD ? (
        <p className="font-['Jost',sans-serif] text-[13px] leading-[24px] text-[#0db22a] font-bold mb-[12px]">
          Bạn đã được miễn phí vận chuyển!
        </p>
      ) : (
        <p className="font-['Jost',sans-serif] text-[13px] leading-[24px] text-[#505157] mb-[12px]">
          Buy <span className="font-bold">{remainingLabel}</span> more to get{" "}
          <span className="font-bold">Free Shipping</span>
        </p>
      )}

      <div className="relative h-[6px] w-full rounded-[4px] bg-[#e5e7eb]">
        <div
          className="absolute left-0 top-0 h-full rounded-[4px] bg-[#fe8f00] transition-[width] duration-300"
          style={{ width: `${Math.max(progress, subtotal > 0 ? 6 : 0)}%` }}
        />
        <div
          className="absolute bottom-1/2 flex size-[26px] translate-y-1/2 items-center justify-center rounded-full border border-[#fe8f00] bg-white p-px"
          style={{ left: `calc(${markerLeft}% - 13px)` }}
        >
          <svg className="h-[11px] w-4" viewBox="0 0 35 20.4492" fill="none" aria-hidden>
            <path d={svgPaths.p283d0c00} fill="#EF4C2C" />
          </svg>
        </div>
      </div>
    </div>
  );
}
