import { Link as RouterLink } from "react-router";
import { useCart } from "../context/CartContext";
import CartFreeShippingBar from "./CartFreeShippingBar";
import CartLineItem, { CartTableHeader } from "./CartLineItem";

export default function CartItemsList() {
  const { items, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="w-full">
        <CartFreeShippingBar />
        <div className="overflow-hidden rounded-[16px] border border-[#f2f2f2] bg-white">
          <div className="px-[28px] py-[48px] text-center">
            <p className="font-['Jost',sans-serif] text-[14px] text-[#505157] leading-[24px] mb-[12px]">
              Giỏ hàng của bạn đang trống.
            </p>
            <RouterLink
              to="/products"
              className="font-['Oswald',sans-serif] font-bold text-[14px] text-[#0db22a] uppercase hover:underline"
            >
              Tiếp tục mua sắm
            </RouterLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-w-0" data-name="Background+Border">
      <CartFreeShippingBar />

      <div className="overflow-hidden rounded-[16px] border border-[#f2f2f2] bg-[#f2f2f2]">
        <div className="overflow-x-auto">
          <div className="min-w-[520px] w-full">
            <CartTableHeader />
            <div className="bg-white rounded-b-[15px]">
              {items.map((line, index) => (
                <CartLineItem
                  key={line.id}
                  line={line}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                  isLast={index === items.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
