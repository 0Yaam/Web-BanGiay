import { useCart } from "../context/CartContext";

type CartCountBadgeProps = {
  variant?: "header" | "sidebar";
  className?: string;
};

export default function CartCountBadge({ variant = "header", className = "" }: CartCountBadgeProps) {
  const { itemCount } = useCart();

  if (itemCount <= 0) {
    return null;
  }

  const label = itemCount > 99 ? "99+" : String(itemCount);
  const isSidebar = variant === "sidebar";

  return (
    <span
      className={[
        "absolute flex items-center justify-center rounded-full font-['Jost',sans-serif] font-bold leading-none",
        isSidebar
          ? "right-[-3px] top-[-5px] min-w-[18px] h-[18px] px-[4px] bg-[#61ff00] text-[10px] text-black"
          : "right-1 top-1 min-w-[16px] h-4 px-[3px] bg-black text-[10px] text-white",
        itemCount > 9 && !isSidebar ? "min-w-[18px] h-[18px] text-[9px]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={`${itemCount} sản phẩm trong giỏ`}
    >
      {label}
    </span>
  );
}
