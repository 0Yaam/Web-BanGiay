import { Link as RouterLink } from "react-router";
import CartSidebarLineItem from "../../app/components/CartSidebarLineItem";
import { useCart } from "../../app/context/CartContext";
import { formatPrice } from "../../app/data/products";
import svgPaths from "./svg-vv1a9r3j30";

const FREE_SHIPPING_THRESHOLD = 200;

function Container() {
  return (
    <div className="h-[17.367px] relative shrink-0 w-[24px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 17.3672">
        <g id="Container">
          <path d={svgPaths.pd25b300} fill="var(--fill-0, #222222)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[10px] relative size-full">
        <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] text-center uppercase whitespace-nowrap">
          <p className="leading-[21px]">MY CART</p>
        </div>
      </div>
    </div>
  );
}

function CartItemCountBadge() {
  const { itemCount } = useCart();
  const count = itemCount > 99 ? "99+" : String(itemCount);
  const label = itemCount === 1 ? `${count} item` : `${count} items`;

  return (
    <span
      className="inline-flex items-center justify-center h-[25px] rounded-[4px] bg-[#0db22a] px-[10px] text-[11px] leading-[25px] text-white font-['Jost:Regular',sans-serif] whitespace-nowrap shrink-0"
      data-name="Background"
    >
      {label}
    </span>
  );
}

function Margin() {
  return (
    <div className="h-[25px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[20px] relative size-full">
        <CartItemCountBadge />
      </div>
    </div>
  );
}

function ButtonCloseModal() {
  return (
    <button className="absolute bg-white cursor-pointer drop-shadow-[0px_0px_5px_rgba(0,0,0,0.1)] right-[20px] rounded-[20px] size-[40px] top-[9px]" data-name="Button - close modal">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex items-center justify-center left-[13.99px] size-[12.021px] top-[calc(50%+0.5px)]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-45">
            <div className="bg-black h-px relative w-[16px]" data-name="Horizontal Divider" />
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex items-center justify-center left-[13.99px] size-[12.021px] top-[calc(50%+0.5px)]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="-rotate-45 flex-none">
            <div className="bg-black h-px relative w-[16px]" data-name="Horizontal Divider" />
          </div>
        </div>
      </div>
    </button>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="flex items-center flex-wrap gap-x-2 gap-y-1 pb-[12.8px] pt-[12px] pl-[20px] pr-[68px] relative w-full min-w-0">
          <Container />
          <Container1 />
          <Margin />
          <ButtonCloseModal />
        </div>
      </div>
    </div>
  );
}

function CartItemsScrollArea() {
  const { items, removeItem } = useCart();

  return (
    <div
      className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden w-full pr-[2px]"
      data-name="List"
    >
      <div className="flex flex-col items-stretch pb-[12px] pt-[10px] px-[20px]">
        {items.length === 0 ? (
          <p className="font-['Jost',sans-serif] text-[12px] text-[#505157] leading-[24px] py-[12px]">
            Chưa có sản phẩm trong giỏ.
          </p>
        ) : (
          items.map((line) => (
            <CartSidebarLineItem key={line.id} line={line} onRemove={removeItem} />
          ))
        )}
      </div>
    </div>
  );
}

function Strong() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Strong">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[12px] uppercase w-full">
          <p className="leading-[16px]">SUBTOTAL:</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  const { subtotal } = useCart();
  const subtotalLabel = formatPrice(subtotal) ?? "$0.00";

  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[16px] text-right uppercase whitespace-nowrap">
          <p className="leading-[16px]">{subtotalLabel}</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="flex items-center pb-[12px] pt-[16px] relative shrink-0 w-full px-[20px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-t-[0.8px] border-solid inset-0 pointer-events-none" />
      <Strong />
      <Container11 />
    </div>
  );
}

function Paragraph() {
  const { subtotal } = useCart();
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const remainingLabel = formatPrice(remaining) ?? "$0.00";

  if (subtotal >= FREE_SHIPPING_THRESHOLD) {
    return (
      <div
        className="flex items-start text-[#505157] text-[12px] w-full"
        data-name="Paragraph"
      >
        <p className="font-['Jost:Bold',sans-serif] font-bold leading-[20px] text-[#0db22a]">
          Bạn đã được miễn phí vận chuyển!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-start gap-x-1 text-[#505157] text-[12px] w-full leading-[20px]" data-name="Paragraph">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[24px]">{`Buy `}</p>
      </div>
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center relative shrink-0">
        <p className="leading-[24px]">{remainingLabel}</p>
      </div>
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p>
          <span className="leading-[24px]">{` more to get `}</span>
          <span className="font-['Jost:Bold',sans-serif] font-bold leading-[24px]">Free Shipping</span>
        </p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="pt-[4px] w-full" data-name="Margin">
      <Paragraph />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[10.906px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10.9062">
        <g id="Container">
          <path d={svgPaths.p45a00a0} fill="var(--fill-0, #FE8F00)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-white bottom-[-9px] content-stretch flex items-center justify-center p-px right-0 rounded-[26px] size-[26px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#fe8f00] border-solid inset-0 pointer-events-none rounded-[26px]" />
      <Container13 />
    </div>
  );
}

function ShippingProgressBar() {
  const { subtotal } = useCart();
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div className="w-full px-[20px] pb-[20px] shrink-0" data-name="Container">
      <Margin4 />
      <div className="bg-[#e5e7eb] h-[6px] relative rounded-[4px] w-full mt-[12px]" data-name="Background">
        <div
          className="bg-[#fe8f00] h-[6px] relative rounded-[4px] max-w-full transition-[width] duration-300"
          style={{ width: `${Math.max(progress, subtotal > 0 ? 8 : 0)}%` }}
          data-name="Background"
        >
          <BackgroundBorder />
        </div>
      </div>
    </div>
  );
}

function CartFooter() {
  return (
    <div className="flex flex-col shrink-0 w-full bg-white z-[3]" data-name="Container">
      <HorizontalBorder1 />
      <ShippingProgressBar />
      <Container14 />
    </div>
  );
}

function Link() {
  return (
    <RouterLink
      to="/cart"
      className="bg-white drop-shadow-[3px_3px_3px_rgba(0,0,0,0.08)] h-[50px] min-h-[50px] relative rounded-[50px] shrink-0 w-full"
      data-name="Link"
    >
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col items-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center min-h-[inherit] p-[15.8px] relative size-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[10.1px] text-center uppercase whitespace-nowrap">
            <p className="leading-[19px]">VIEW CART</p>
          </div>
        </div>
      </div>
    </RouterLink>
  );
}

function Link1() {
  return (
    <RouterLink
      to="/checkout"
      className="bg-[#60ff00] drop-shadow-[3px_3px_3px_rgba(0,0,0,0.08)] h-[50px] min-h-[50px] relative rounded-[50px] shrink-0 w-full"
      data-name="Link"
    >
      <div aria-hidden="true" className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col items-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center min-h-[inherit] p-[15.8px] relative size-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[10.1px] text-center uppercase whitespace-nowrap">
            <p className="leading-[19px]">CHECKOUT</p>
          </div>
        </div>
      </div>
    </RouterLink>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full pb-[24px]" data-name="Container">
      <div className="flex flex-col gap-[10px] items-stretch px-[20px] w-full">
        <Link />
        <Link1 />
      </div>
    </div>
  );
}

export default function GiHang() {
  return (
    <div
      className="bg-white drop-shadow-[-10px_0px_7.5px_rgba(0,0,0,0.1)] flex flex-col h-full w-full overflow-hidden"
      data-name="Giỏ Hàng"
    >
      <div className="shrink-0">
        <HorizontalBorder />
      </div>
      <CartItemsScrollArea />
      <div className="shrink-0 relative before:absolute before:left-0 before:right-0 before:top-[-24px] before:h-[24px] before:bg-gradient-to-b before:from-transparent before:to-white/90 before:pointer-events-none">
        <CartFooter />
      </div>
    </div>
  );
}