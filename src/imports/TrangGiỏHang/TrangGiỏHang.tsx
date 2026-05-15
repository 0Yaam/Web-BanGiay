import svgPaths from "./svg-iyzs9d48al";
import imgMasthead from "./7e50743c804ee3c01b7423cd7410540d607630a7.png";
import imgAirJordanDmp1Retro from "./ced45ff080640e6fa3c232833c112c2d0cd2200c.png";
import imgAirJordanDmp1Retro1 from "./7b6fd50aea7a6597226b1b2affab0f4642d7eefd.png";
import imgImageContact1Png from "./5c4ed1fb8eba4060c9be504390dcc8ba5484b36a.png";
import imgFigureImageContact2Png from "./990b90cfc935aa249507864198c743e2f157c972.png";
import imgImageContact3Png from "./9090d63ed0f5181223c0085f89969a453671ce1d.png";
import imgLogo from "./89309c4327d643be9d6885f84d12f69b214a62e7.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[30px] text-center uppercase whitespace-nowrap">
        <p className="leading-[45px]">CART</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute capitalize flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-22px)] text-[#222] text-[12px] text-center top-[8px] whitespace-nowrap">
        <p>
          <span className="leading-[16px]">Home</span>
          <span className="font-['Jost:Regular',sans-serif] font-normal leading-[16px]">{` `}</span>
        </p>
      </div>
      <div className="-translate-x-1/2 absolute h-[6.997px] left-[calc(50%+6.64px)] top-[5.85px] w-[3.5px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.5 6.99684">
          <path d={svgPaths.p2389b80} fill="var(--fill-0, #222222)" id="Symbol" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute capitalize flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+28.64px)] text-[#222] text-[12px] text-center top-[8px] whitespace-nowrap">
        <p className="leading-[16px]">Cart</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14px] items-start max-w-[inherit] px-[15px] relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Masthead() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[160px] pt-[160.8px] px-[100.4px] right-0 top-[169px]" data-name="masthead">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[99.8%] left-0 max-w-none top-0 w-[151.12%]" src={imgMasthead} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ededed] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-start leading-[0] pb-[12.4px] pt-[37.2px] relative shrink-0 text-[#505157] text-[13px] w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[24px]">{`Buy `}</p>
      </div>
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center relative shrink-0">
        <p className="leading-[24px]">$26.00</p>
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

function Container7() {
  return (
    <div className="h-[20.449px] relative shrink-0 w-[35px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 20.4492">
        <g id="Container">
          <path d={svgPaths.p283d0c00} fill="var(--fill-0, #EF4C2C)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bottom-px content-stretch flex h-[32px] items-center justify-center right-[-1.5px] w-[35px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#ef4c2c] h-[6px] relative rounded-[4px] shrink-0 w-[739.5px]" data-name="Background">
      <Container6 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex flex-col h-[6px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Background">
      <Background1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[40px] pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Background />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative self-stretch shrink-0 w-[345.38px]" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[20px] relative size-full">
          <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] text-center uppercase whitespace-nowrap">
            <p className="leading-[24px]">PRODUCT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative self-stretch shrink-0 w-[100.71px]" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[20px] relative size-full">
          <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] text-center uppercase whitespace-nowrap">
            <p className="leading-[24px]">PRICE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative self-stretch shrink-0 w-[169.8px]" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[20px] relative size-full">
          <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] text-center uppercase whitespace-nowrap">
            <p className="leading-[24px]">QUANTITY</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[24px] py-[20px] relative size-full">
          <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] text-center uppercase whitespace-nowrap">
            <p className="leading-[24px]">SUBTOTAL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0 w-[174.91px]" data-name="Margin">
      <Container12 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[28px] relative size-full">
        <Container9 />
        <Container10 />
        <Container11 />
        <Margin />
      </div>
    </div>
  );
}

function AirJordanDmp1Retro() {
  return (
    <div className="h-[115.13px] relative shrink-0 w-[98.4px]" data-name="Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAirJordanDmp1Retro} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <AirJordanDmp1Retro />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="max-w-[100px] mr-[-0.2px] relative rounded-[6px] shrink-0" data-name="Border">
      <div className="content-stretch flex flex-col items-center max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Link />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[20px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Air Jordan DMP 1 Retro</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-[348.81px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[30px] relative size-full">
        <Border />
        <Container14 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">$84.00</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[72px] relative shrink-0 w-[101.24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[24px] relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container21 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container20 />
    </div>
  );
}

function InputProductQuantity() {
  return (
    <div className="flex-[1_0_0] h-[50px] min-w-px relative" data-name="Input - Product quantity">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[16.2px] relative size-full">
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[50px] left-0 top-0 w-[40px]" data-name="Button">
      <div className="absolute bg-white left-[5px] opacity-0 rounded-[30px] size-[30px] top-[10px]" data-name="Background" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-0.01px)] text-[#505157] text-[20px] text-center top-[calc(50%-0.6px)] uppercase whitespace-nowrap">
        <p className="leading-[50px]">–</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[50px] right-0 top-0 w-[40px]" data-name="Button">
      <div className="absolute bg-white left-[5px] opacity-0 rounded-[30px] size-[30px] top-[10px]" data-name="Background" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-0.01px)] text-[#505157] text-[20px] text-center top-[calc(50%-0.6px)] uppercase whitespace-nowrap">
        <p className="leading-[50px]">+</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-start justify-center max-w-[130px] min-w-[129px] relative shrink-0 w-full" data-name="Container">
      <InputProductQuantity />
      <Button />
      <Button1 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex flex-col h-[50px] items-start min-w-[100px] overflow-clip relative rounded-[50px] shrink-0 w-[129px]" data-name="Background">
      <Container18 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-[171.01px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[24px] relative size-full">
        <Background3 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">$84.00</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[72px] relative shrink-0 w-[155.74px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[18px] py-[24px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.043px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.043 24">
        <g id="Container">
          <path d={svgPaths.p8d9da80} fill="var(--fill-0, #222222)" id="Link - Remove this item â î«" />
        </g>
      </svg>
    </div>
  );
}

function AirJordanDmp1Retro1() {
  return (
    <div className="h-[115.13px] relative shrink-0 w-[98.4px]" data-name="Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAirJordanDmp1Retro1} />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <AirJordanDmp1Retro1 />
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="max-w-[100px] mr-[-0.2px] relative rounded-[6px] shrink-0" data-name="Border">
      <div className="content-stretch flex flex-col items-center max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Link1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[20px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Nike Air Max 89 ES</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-[348.81px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center py-[30px] relative size-full">
        <Border1 />
        <Container26 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">$90.00</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[72px] relative shrink-0 w-[101.24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[24px] relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container33 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container32 />
    </div>
  );
}

function InputProductQuantity1() {
  return (
    <div className="flex-[1_0_0] h-[50px] min-w-px relative" data-name="Input - Product quantity">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[16.2px] relative size-full">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[50px] left-0 top-0 w-[40px]" data-name="Button">
      <div className="absolute bg-white left-[5px] opacity-0 rounded-[30px] size-[30px] top-[10px]" data-name="Background" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-0.01px)] text-[#505157] text-[20px] text-center top-[calc(50%-0.6px)] uppercase whitespace-nowrap">
        <p className="leading-[50px]">–</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[50px] right-0 top-0 w-[40px]" data-name="Button">
      <div className="absolute bg-white left-[5px] opacity-0 rounded-[30px] size-[30px] top-[10px]" data-name="Background" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-0.01px)] text-[#505157] text-[20px] text-center top-[calc(50%-0.6px)] uppercase whitespace-nowrap">
        <p className="leading-[50px]">+</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-start justify-center max-w-[130px] min-w-[129px] relative shrink-0 w-full" data-name="Container">
      <InputProductQuantity1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex flex-col h-[50px] items-start min-w-[100px] overflow-clip relative rounded-[50px] shrink-0 w-[129px]" data-name="Background">
      <Container30 />
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-[171.01px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[24px] relative size-full">
        <Background4 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">$90.00</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[72px] relative shrink-0 w-[155.74px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[18px] py-[24px] relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.043px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.043 24">
        <g id="Container">
          <path d={svgPaths.p8d9da80} fill="var(--fill-0, #222222)" id="Link - Remove this item â î«" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[28px] relative size-full">
        <div className="content-stretch flex items-center pb-[0.8px] relative shrink-0 w-full" data-name="Sản phẩm cart">
          <div aria-hidden="true" className="absolute border-[#f2f2f2] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
          <Container13 />
          <Container15 />
          <Container17 />
          <Container22 />
          <Container24 />
        </div>
        <div className="content-stretch flex items-center pb-[0.8px] relative shrink-0 w-full" data-name="Sản phẩm cart">
          <div aria-hidden="true" className="absolute border-[#f2f2f2] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
          <Container25 />
          <Container27 />
          <Container29 />
          <Container34 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[13.6px] pt-[1.6px] px-[1.6px] relative size-full">
          <Container8 />
          <Background2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pr-[45.52px] relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b7b7b7] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">Coupon code</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[60px] relative rounded-[5px] shrink-0" data-name="Input">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[32.8px] py-[21.2px] relative rounded-[inherit] size-full">
        <Container39 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#b7b7b7] border-dashed inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-black content-stretch flex flex-col h-[60px] items-center justify-center px-[32px] relative rounded-[5px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white uppercase whitespace-nowrap">
        <p className="leading-[24px]">APPLY COUPON</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start pl-[5px] relative shrink-0" data-name="Button:margin">
      <Button4 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Container">
      <Input />
      <ButtonMargin />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex h-[60px] items-center justify-center px-[64px] relative rounded-[5px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">UPDATE CART</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px relative" data-name="Container">
      <Button5 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[12px] relative size-full">
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex h-[90px] items-start justify-between pt-[30px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Margin1 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <Container5 />
      <BackgroundBorder />
      <Container37 />
    </div>
  );
}

function Container4() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col items-start justify-self-stretch pb-[12px] relative row-1 self-start shrink-0" data-name="Container">
      <Form />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[30px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[18px] text-center uppercase whitespace-nowrap">
            <p className="leading-[28px]">CART TOTALS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[24px]">Subtotal</p>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[24px]">$174.00</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[24.8px] pr-[120.51px] relative size-full">
          <Container42 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="leading-[24px]">Shipment</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-[#0db22a] content-stretch flex items-start left-[-1px] p-px pointer-events-none rounded-[17px] size-[19px] top-[4.08px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#0db22a] border-solid inset-0 rounded-[17px]" />
      <div className="relative rounded-[17px] self-stretch shrink-0 w-[17px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[17px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_4px_white]" />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="relative self-stretch shrink-0 w-[32px]" data-name="Label">
      <BackgroundBorder1 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Flat rate: $20.00</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Container49 />
    </div>
  );
}

function Label1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Label">
      <div className="content-stretch flex flex-col items-start pb-[1.92px] pr-[15px] pt-[5.08px] relative size-full">
        <div className="bg-white relative rounded-[17px] shrink-0 size-[17px]" data-name="Background+Border">
          <div aria-hidden="true" className="absolute border border-[#dfdfdf] border-solid inset-0 pointer-events-none rounded-[17px]" />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Local pickup: $30.00</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container51 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[16px] pl-[32px] relative size-full">
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] w-full">
          <p className="leading-[24px]">Shipping options will be updated during checkout.</p>
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[#cdcdcd] left-[130.05px] rounded-[14px] size-[14px] top-[4.97px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[7px] left-1/2 top-1/2 w-px" data-name="Vertical Divider" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-px left-1/2 top-1/2 w-[7px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[20.8px] relative shrink-0 w-[144.05px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#222] text-[14px] top-[10.4px] whitespace-nowrap">
        <p className="leading-[24px]">Calculate shipping</p>
      </div>
      <Background6 />
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[1.6px] relative size-full">
        <Link2 />
      </div>
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[48.8px] relative shrink-0 w-full" data-name="Form">
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container53 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container52 />
      <Form1 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Total</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0db22a] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[28px]">$194.00</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[16px] pr-[115.32px] pt-[8px] relative size-full">
          <Container55 />
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white uppercase whitespace-nowrap">
        <p className="leading-[32px]">PROCEED TO CHECKOUT</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-black content-stretch flex h-[56px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="Link">
      <Container57 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[42px] pt-[30px] px-[30px] relative size-full">
        <HorizontalBorder />
        <Container44 />
        <Container54 />
        <Link3 />
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Heading1 />
        <Background5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch pb-[62.45px] relative row-1 self-start shrink-0" data-name="Container">
      <Border2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="gap-x-[30px] gap-y-[30px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__681.85px_12px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container41 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <Container3 />
    </div>
  );
}

function ArticleSection() {
  return (
    <div className="content-stretch flex h-[723.85px] items-start justify-center relative shrink-0 w-full" data-name="Article → Section">
      <Container2 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip px-[115.4px] py-[120px] right-0 top-[564.8px]" data-name="Main">
      <ArticleSection />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">CONTACT US</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.7px_0_20px_0] items-start" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Margin">
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[389.99px]" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px] mb-0">Morbi ullamcorper ligula sit amet efficitur pellentesque.</p>
        <p className="leading-[24px]">Aliquam ornare quam tellus ultricies molestie tortor.</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container64 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[73px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container63 />
    </div>
  );
}

function ImageContact1Png() {
  return (
    <div className="max-w-[28px] relative shrink-0 size-[28px]" data-name="image-contact-1.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImageContact1Png} />
      </div>
    </div>
  );
}

function Figure() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[28px]" data-name="Figure">
      <ImageContact1Png />
    </div>
  );
}

function FigureMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[27px] relative shrink-0 w-[55px]" data-name="Figure:margin">
      <Figure />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="font-['Jost:Bold',sans-serif] font-bold h-[39px] leading-[0] relative shrink-0 text-white uppercase w-[201.57px] whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[13px] top-[15.35px]">
        <p className="leading-[19.5px]">HOTLINE:</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[64.17px] text-[18px] top-[13.5px]">
        <p className="leading-[27px]">+0123 456 789</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <FigureMargin />
      <Paragraph2 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container66 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col h-[59px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container65 />
    </div>
  );
}

function FigureImageContact2Png() {
  return (
    <div className="flex-[1_0_0] max-w-[28px] min-h-px relative w-[28px]" data-name="Figure → image-contact-2.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-7.14%] max-w-none top-0 w-[114.29%]" src={imgFigureImageContact2Png} />
      </div>
    </div>
  );
}

function FigureMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[27px] relative self-stretch shrink-0 w-[55px]" data-name="Figure:margin">
      <FigureImageContact2Png />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">info@example.com</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <FigureMargin1 />
      <Container69 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container68 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col h-[44px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container67 />
    </div>
  );
}

function ImageContact3Png() {
  return (
    <div className="max-w-[28px] relative shrink-0 size-[28px]" data-name="image-contact-3.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImageContact3Png} />
      </div>
    </div>
  );
}

function Figure1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-[28px]" data-name="Figure">
      <ImageContact3Png />
    </div>
  );
}

function FigureMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[27px] relative self-stretch shrink-0 w-[55px]" data-name="Figure:margin">
      <Figure1 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Monday till Friday 10 to 6 EST</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <FigureMargin2 />
      <Container72 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Container71 />
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[15px] relative size-full">
          <Margin2 />
          <Margin3 />
          <Margin4 />
          <Margin5 />
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[439.99px]" data-name="Container">
      <Container61 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">HELP</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.7px_0_20px_0] items-start" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Margin">
      <Container75 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Help Center</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Shipping Info</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Returns</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">How To Order</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">How To Track</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link8 />
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Size Guide</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Link9 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[6.5px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col h-[191px] items-start relative shrink-0 w-full" data-name="Container">
      <List />
    </div>
  );
}

function Container74() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[28px] pt-[15px] px-[15px] relative size-full">
          <Margin6 />
          <Container76 />
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[220px]" data-name="Container">
      <Container74 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">COMPANY</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.7px_0_20px_0] items-start" data-name="Container">
      <Heading4 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Margin">
      <Container79 />
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">About Us</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link10 />
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Our Blog</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link11 />
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Careers</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link12 />
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Store Locations</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link13 />
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Testimonial</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link14 />
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Link">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Sitemap</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Link15 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[6.5px] items-start relative shrink-0 w-full" data-name="List">
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col h-[191px] items-start relative shrink-0 w-full" data-name="Container">
      <List1 />
    </div>
  );
}

function Container78() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[28px] pt-[15px] px-[15px] relative size-full">
          <Margin7 />
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[220px]" data-name="Container">
      <Container78 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">NEWSLETTER</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.7px_0_20px_0] items-start" data-name="Container">
      <Heading5 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Margin">
      <Container83 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px] mb-0">Get 15% off your first purchaxse! Plus, be the first to know about</p>
        <p className="leading-[21px]">sales new product launches and exclusive offers!</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container85 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col h-[74px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container84 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="capitalize flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#959595] text-[13px] w-full">
        <p className="leading-[normal]">Your Email Address</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[54px] relative rounded-[54px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[20px] pr-[58px] py-[17.8px] relative size-full">
          <Container87 />
        </div>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute left-[357.97px] size-[50px] top-[2px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Container">
          <path d={svgPaths.p9d41f40} fill="var(--fill-0, black)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function FormContactForm() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0 w-full" data-name="Form - Contact form">
      <Input1 />
      <Container88 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <FormContactForm />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col h-[84px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container86 />
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 14">
        <g id="Container">
          <path d={svgPaths.p2fb51880} fill="var(--fill-0, white)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[2.62px] pr-[2.63px] relative shrink-0 size-[14px]" data-name="Container">
      <Container91 />
    </div>
  );
}

function ListitemLink() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container90 />
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[14px] relative shrink-0 w-[12.25px]" data-name="Container">
      <div className="absolute inset-[0_-0.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2773 14">
          <g id="Container">
            <path d={svgPaths.p26fc3400} fill="var(--fill-0, white)" id="Symbol" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[0.87px] pr-[0.88px] relative shrink-0 size-[14px]" data-name="Container">
      <Container93 />
    </div>
  );
}

function ListitemLink1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container92 />
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[14px] relative shrink-0 w-[15.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 14">
        <g id="Container">
          <path d={svgPaths.p373030} fill="var(--fill-0, white)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start relative shrink-0 w-[14.88px]" data-name="Container">
      <Container95 />
    </div>
  );
}

function ListitemLink2() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[6.12px] pr-[7px] relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container94 />
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[14px] relative shrink-0 w-[15.75px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 14">
        <g id="Container">
          <path d={svgPaths.p100feb40} fill="var(--fill-0, white)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start relative shrink-0 w-[14.88px]" data-name="Container">
      <Container97 />
    </div>
  );
}

function ListitemLink3() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[6.12px] pr-[7px] relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container96 />
    </div>
  );
}

function Container99() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p174b8b00} fill="var(--fill-0, white)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[14px]" data-name="Container">
      <Container99 />
    </div>
  );
}

function ListitemLink4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container98 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="List">
      <ListitemLink />
      <ListitemLink1 />
      <ListitemLink2 />
      <ListitemLink3 />
      <ListitemLink4 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <List2 />
    </div>
  );
}

function Container82() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[33px] pt-[15px] px-[15px] relative size-full">
          <Margin8 />
          <Margin9 />
          <Margin10 />
          <Container89 />
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[439.99px]" data-name="Container">
      <Container82 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[291px] items-start max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container73 />
      <Container77 />
      <Container81 />
    </div>
  );
}

function Section1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Section">
      <div className="content-stretch flex flex-col items-start px-[100.4px] relative size-full">
        <Container59 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex h-[291px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Section1 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start pb-[98px] pt-[80px] relative shrink-0 w-full" data-name="Section">
      <Container58 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p>
          <span className="leading-[21px]">{`Copyright © 2026 `}</span>
          <span className="font-['Jost:Regular',sans-serif] font-normal leading-[21px]">RisingBamboo.</span>
          <span className="leading-[21px]">{` All Rights Reserved.`}</span>
        </p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container105 />
    </div>
  );
}

function Container103() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
          <Container104 />
        </div>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container103 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g clipPath="url(#clip0_1_5525)" id="SVG">
          <path d={svgPaths.p21bd9700} fill="var(--fill-0, #21246E)" id="Vector" />
          <path d={svgPaths.p6584980} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_5525">
            <rect fill="white" height="36" width="36" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container110 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] pr-[16px] relative shrink-0" data-name="Container">
      <Container109 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="SVG">
          <path d={svgPaths.p16fcace0} fill="var(--fill-0, #1C1C1C)" id="Vector" />
          <path d={svgPaths.p4cecc00} fill="var(--fill-0, #931B1D)" id="Vector_2" />
          <path d={svgPaths.p2af2100} fill="var(--fill-0, #F16622)" id="Vector_3" />
          <path d={svgPaths.p9755c80} fill="var(--fill-0, #F7981D)" id="Vector_4" />
          <path d={svgPaths.p33745000} fill="var(--fill-0, #CB2026)" id="Vector_5" />
          <path d={svgPaths.p3073e300} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p3c363400} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p20219200} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p3e55a880} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p257959c0} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p3c6e1960} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p9437c40} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p23e0f600} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p16a85b00} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p78df980} fill="var(--fill-0, white)" id="Vector_15" />
        </g>
      </svg>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container113 />
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] pr-[16px] relative shrink-0" data-name="Container">
      <Container112 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="SVG">
          <path d={svgPaths.p2fb10c80} fill="var(--fill-0, #306FC5)" id="Vector" />
          <path d={svgPaths.p16bd8e80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p32dcdbe0} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2dca2980} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p39b45880} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p2471bd80} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p18f81180} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3a0a9300} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p35dd1f00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p16ffa180} fill="var(--fill-0, white)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container116 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] pr-[16px] relative shrink-0" data-name="Container">
      <Container115 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="SVG">
          <path d={svgPaths.p11507b80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p27479800} fill="var(--fill-0, #2196F3)" id="Vector_2" />
          <path d={svgPaths.p223cea60} fill="var(--fill-0, #1976D2)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container119 />
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] pr-[16px] relative shrink-0" data-name="Container">
      <Container118 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="SVG">
          <path d={svgPaths.p11507b80} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1c8c3800} fill="var(--fill-0, #227FBB)" fillRule="evenodd" id="Vector_2" opacity="0.938" />
          <path clipRule="evenodd" d={svgPaths.pea1f180} fill="var(--fill-0, #227FBB)" fillRule="evenodd" id="Vector_3" opacity="0.938" />
          <path clipRule="evenodd" d={svgPaths.p2ef07e9c} fill="var(--fill-0, #227FBB)" fillRule="evenodd" id="Vector_4" opacity="0.938" />
          <path clipRule="evenodd" d={svgPaths.pe26a700} fill="var(--fill-0, #227FBB)" fillRule="evenodd" id="Vector_5" opacity="0.938" />
          <path clipRule="evenodd" d={svgPaths.p3b852b80} fill="var(--fill-0, #227FBB)" fillRule="evenodd" id="Vector_6" opacity="0.938" />
          <path clipRule="evenodd" d={svgPaths.p306a3380} fill="var(--fill-0, #1AAF5D)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p2562c1c0} fill="var(--fill-0, #F59D00)" fillRule="evenodd" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container122 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] relative shrink-0" data-name="Container">
      <Container121 />
    </div>
  );
}

function Container107() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end p-[15px] relative size-full">
          <Container108 />
          <Container111 />
          <Container114 />
          <Container117 />
          <Container120 />
        </div>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container107 />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex h-[73.2px] items-start max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <Container102 />
      <Container106 />
    </div>
  );
}

function Section3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Section">
      <div className="content-stretch flex flex-col items-start py-[15px] relative size-full">
        <Container101 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[103.2px] max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center max-w-[inherit] relative size-full">
        <Section3 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[0.8px] px-[100.4px] relative size-full">
        <Container100 />
      </div>
    </div>
  );
}

function Container126() {
  return <div className="flex-[1_0_0] h-[44px] min-w-px relative" data-name="Container" />;
}

function Logo() {
  return (
    <div className="h-[24.19px] relative shrink-0 w-[124px]" data-name="logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.02%] left-0 max-w-none top-[-0.01%] w-full" src={imgLogo} />
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Logo />
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Link16 />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container128 />
    </div>
  );
}

function Container132() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path d={svgPaths.p1b02a800} fill="var(--fill-0, black)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#ededed] content-stretch flex items-center justify-center p-[13px] relative rounded-[50px] shrink-0" data-name="Background">
      <Container132 />
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Background7 />
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Container131 />
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16.81px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.81 18">
        <g id="Container">
          <path d={svgPaths.p3a9eb600} fill="var(--fill-0, black)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#ededed] content-stretch flex items-center justify-center pl-[16.59px] pr-[16.6px] py-[16px] relative rounded-[50px] shrink-0" data-name="Background">
      <Container134 />
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Background8 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Container133 />
    </div>
  );
}

function Container138() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p7e4ac80} fill="var(--fill-0, black)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[50px] p-[15px] relative shrink-0" data-name="Container">
      <Container138 />
    </div>
  );
}

function Background10() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-center right-[-6px] rounded-[9999px] size-[18px] top-[-6px]" data-name="Background">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#60ff00] text-[10px] text-center uppercase whitespace-nowrap">
        <p className="leading-[18px]">2</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container137 />
      <Background10 />
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#ededed] content-stretch flex items-center justify-center min-h-[50px] min-w-[50px] relative rounded-[50px] shrink-0" data-name="Background">
      <Button6 />
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Background9 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container136 />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Container">
      <Margin11 />
      <Margin12 />
      <Container135 />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container130 />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container126 />
      <Container127 />
      <Container129 />
    </div>
  );
}

function Container124() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[30px] pt-[33px] px-[30px] relative size-full">
        <Container125 />
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container124 />
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pr-[14px] relative" data-name="Link">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#909090] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">HOME</p>
      </div>
      <div className="absolute h-[2.997px] left-[40.86px] top-[10.63px] w-[6px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2.9973">
          <path d={svgPaths.p3d2f8a40} fill="var(--fill-0, #909090)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0" data-name="Item">
      <Link17 />
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pr-[14px] relative" data-name="Link">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#909090] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">SHOP</p>
      </div>
      <div className="absolute h-[2.997px] left-[39.94px] top-[10.63px] w-[6px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2.9973">
          <path d={svgPaths.p3d2f8a40} fill="var(--fill-0, #909090)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative self-stretch shrink-0" data-name="Item">
      <Link18 />
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pr-[14px] relative" data-name="Link">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#909090] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">PRODUCT</p>
      </div>
      <div className="absolute h-[2.997px] left-[63.04px] top-[10.63px] w-[6px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2.9973">
          <path d={svgPaths.p3d2f8a40} fill="var(--fill-0, #909090)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative self-stretch shrink-0" data-name="Item">
      <Link19 />
    </div>
  );
}

function Link20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pr-[14px] relative" data-name="Link">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#909090] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">BLOG</p>
      </div>
      <div className="absolute h-[2.997px] left-[38.61px] top-[10.63px] w-[6px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2.9973">
          <path d={svgPaths.p3d2f8a40} fill="var(--fill-0, #909090)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative self-stretch shrink-0" data-name="Item">
      <Link20 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0" data-name="List">
      <Item12 />
      <Item13 />
      <Item14 />
      <Item15 />
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Nav">
      <List3 />
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Nav />
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[346.45px]" data-name="Container">
      <Container141 />
    </div>
  );
}

function Container139() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[32px] px-[30px] relative size-full">
          <Container140 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[2113.65px] relative shrink-0 w-full" data-name="Container">
      <Masthead />
      <Main />
      <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1540.65px]" data-name="Footer">
        <Section />
        <Section2 />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Header">
        <Container123 />
        <Container139 />
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute left-0 size-[46px] top-0" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g clipPath="url(#clip0_1_5517)" id="SVG">
          <path d={svgPaths.p375dda80} id="Vector" stroke="var(--stroke-0, #0DB22A)" strokeDasharray="138.87 138.87" strokeWidth="1.80392" />
        </g>
        <defs>
          <clipPath id="clip0_1_5517">
            <rect fill="white" height="46" width="46" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container142() {
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

function Background11() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[12px] pointer-events-auto rounded-[9999px] size-[46px] sticky top-0" data-name="Background">
      <div className="absolute bottom-0 pointer-events-none right-0 rounded-[9999px] size-[46px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_2px_rgba(34,34,34,0.2)]" />
      </div>
      <Svg5 />
      <Container142 />
    </div>
  );
}

export default function TrangGiHang() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Trang giỏ hàng">
      <Container />
      <div className="absolute bottom-0 h-[2113.64990234375px] pointer-events-none right-[20px]">
        <Background11 />
      </div>
    </div>
  );
}