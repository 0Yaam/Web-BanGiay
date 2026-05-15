import svgPaths from "./svg-vv1a9r3j30";
import imgLinkAirJordanDmp1Retro from "./37ba129bdf6a4d73f4390a901eaf9994cd1a6bcd.png";

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

function Background1() {
  return (
    <div className="absolute bg-[#0db22a] h-[14.4px] left-[6px] rounded-[9999px] top-[5.6px] w-[4.5px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[10px] text-center text-white top-[7.2px] whitespace-nowrap">
        <p className="leading-[18px]">1</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#0db22a] h-[25px] relative rounded-[4px] shrink-0 w-[44.99px]" data-name="Background">
      <div className="absolute border-5 border-[rgba(0,0,0,0)] border-solid left-[-12px] size-[11.2px] top-[8px]" data-name="Border" />
      <Background1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] left-[10.5px] text-[11px] text-white top-[12px] whitespace-nowrap">
        <p className="leading-[25px]">{` items`}</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[25px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[20px] relative size-full">
        <Background />
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
        <div className="content-stretch flex items-center pb-[12.8px] pt-[12px] px-[20px] relative size-full">
          <Container />
          <Container1 />
          <Margin />
          <ButtonCloseModal />
        </div>
      </div>
    </div>
  );
}

function LinkAirJordanDmp1Retro() {
  return (
    <div className="aspect-[100/117] relative shrink-0 w-full" data-name="Link → Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLinkAirJordanDmp1Retro} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[100px]" data-name="Container">
      <LinkAirJordanDmp1Retro />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[20px] relative shrink-0 w-[120px]" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">1</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px px-[8px] relative" data-name="Container">
      <div className="flex flex-col font-['Segoe_UI_Symbol:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#505157] text-[10px] whitespace-nowrap">
        <p className="leading-[24px]">✕</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[12px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">$84.00</p>
      </div>
    </div>
  );
}

function LinkRemoveThisItem() {
  return (
    <div className="-translate-y-1/2 absolute right-[-84.97px] size-[25px] top-[calc(50%-17px)]" data-name="Link - Remove this item">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Link - Remove this item">
          <rect fill="var(--fill-0, #E6E6E6)" height="25" rx="12.5" width="25" />
          <path d={svgPaths.p15dfcb80} fill="var(--fill-0, black)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-start pr-[38.95px] relative shrink-0" data-name="Container">
      <Container6 />
      <Margin2 />
      <Container8 />
      <LinkRemoveThisItem />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start pr-[40px] pt-[2px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">Air Jordan DMP 1 Retro</p>
      </div>
      <Container5 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-center min-h-[110px] relative shrink-0 w-full" data-name="Item">
      <Margin1 />
      <Container4 />
    </div>
  );
}

function List() {
  return (
    <div className="max-h-[750px] relative shrink-0 w-full" data-name="List">
      <div className="max-h-[inherit] overflow-auto size-full">
        <div className="content-stretch flex flex-col items-start max-h-[inherit] pb-[20px] pt-[10px] px-[20px] relative size-full">
          <Item />
        </div>
      </div>
    </div>
  );
}

function ListMargin() {
  return (
    <div className="max-h-[770px] relative shrink-0 w-full" data-name="List:margin">
      <div className="content-stretch flex flex-col items-start max-h-[inherit] pb-[20px] pr-[2px] relative size-full">
        <List />
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
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[16px] text-right uppercase whitespace-nowrap">
          <p className="leading-[16px]">$84.00</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex items-center pb-[12.8px] pt-[45px] relative shrink-0 w-[330px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Strong />
      <Container11 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-start leading-[0] relative shrink-0 text-[#505157] text-[12px] w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[24px]">{`Buy `}</p>
      </div>
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center relative shrink-0">
        <p className="leading-[24px]">$116.00</p>
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
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pb-[17px] pt-[12px] relative row-1 self-start shrink-0" data-name="Margin">
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

function Background3() {
  return (
    <div className="bg-[#fe8f00] h-[6px] relative rounded-[4px] shrink-0 w-[138.6px]" data-name="Background">
      <BackgroundBorder />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e5e7eb] col-1 content-stretch flex flex-col h-[6px] items-start justify-self-stretch relative rounded-[4px] row-2 shrink-0" data-name="Background">
      <Background3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="grid grid-cols-[_330px] grid-rows-[__53px_6px] pb-[30px] px-[20px] relative size-full">
        <Margin4 />
        <Background2 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full z-[3]" data-name="Container">
      <HorizontalBorder1 />
      <Container12 />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white drop-shadow-[3px_3px_3px_rgba(0,0,0,0.08)] h-[50px] min-h-[50px] relative rounded-[50px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#dfe1e6] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col items-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center min-h-[inherit] p-[15.8px] relative size-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[10.1px] text-center uppercase whitespace-nowrap">
            <p className="leading-[19px]">VIEW CART</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#60ff00] drop-shadow-[3px_3px_3px_rgba(0,0,0,0.08)] h-[50px] min-h-[50px] relative rounded-[50px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-col items-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center min-h-[inherit] p-[15.8px] relative size-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[10.1px] text-center uppercase whitespace-nowrap">
            <p className="leading-[19px]">CHECKOUT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[10px] items-start px-[20px] relative size-full">
        <Link />
        <Link1 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[32px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[30px] left-0 right-0 to-[rgba(0,0,0,0.05)] top-[-30px] z-[2]" data-name="Gradient" />
      <Container14 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="flex-[1_0_0] min-h-[316.79998779296875px] relative w-full" data-name="Margin">
      <div className="flex flex-col justify-end min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end min-h-[inherit] pt-[78.4px] relative size-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[562.2px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <ListMargin />
      <Margin3 />
    </div>
  );
}

export default function GiHang() {
  return (
    <div className="bg-white content-stretch drop-shadow-[-10px_0px_7.5px_rgba(0,0,0,0.1)] flex flex-col gap-[20px] items-start relative size-full" data-name="Giỏ Hàng">
      <HorizontalBorder />
      <Container2 />
    </div>
  );
}