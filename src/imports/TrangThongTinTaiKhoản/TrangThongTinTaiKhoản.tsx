import { Link as RouterLink } from "react-router";
import svgPaths from "./svg-rb499v1m64";
import imgMasthead from "./7e50743c804ee3c01b7423cd7410540d607630a7.png";
import imgImageContact1Png from "./5c4ed1fb8eba4060c9be504390dcc8ba5484b36a.png";
import imgFigureImageContact2Png from "./990b90cfc935aa249507864198c743e2f157c972.png";
import imgImageContact3Png from "./9090d63ed0f5181223c0085f89969a453671ce1d.png";
import imgLogo from "./89309c4327d643be9d6885f84d12f69b214a62e7.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[30px] text-center uppercase whitespace-nowrap">
        <p className="leading-[45px]">MY ACCOUNT</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute capitalize flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-41.51px)] text-[#222] text-[12px] text-center top-[8px] whitespace-nowrap">
        <p>
          <span className="leading-[16px]">Home</span>
          <span className="font-['Jost:Regular',sans-serif] font-normal leading-[16px]">{` `}</span>
        </p>
      </div>
      <div className="-translate-x-1/2 absolute h-[6.997px] left-[calc(50%-12.87px)] top-[5.85px] w-[3.5px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.5 6.99684">
          <path d={svgPaths.p2389b80} fill="var(--fill-0, #222222)" id="Symbol" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute capitalize flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+28.64px)] text-[#222] text-[12px] text-center top-[8px] whitespace-nowrap">
        <p className="leading-[16px]">My Account</p>
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
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[160px] pt-[160.8px] px-[100.4px] right-0 top-0" data-name="masthead">
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

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[30px] py-[15px] relative size-full">
        <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[18px] uppercase w-full">
          <p className="leading-[27px]">MY ACCOUNT</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center pb-[0.01px] pt-[1.57px] relative size-full">
        <div className="relative shrink-0 size-[18px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p15688780} fill="var(--fill-0, #7D7D7D)" id="Symbol" />
          </svg>
        </div>
        <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.8px] relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Paragraph1 />
    </div>
  );
}

function Item() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pb-[16px] relative row-1 self-start shrink-0" data-name="Item">
      <Link />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center pb-[0.01px] pt-[1.57px] relative size-full">
        <div className="h-[14.766px] relative shrink-0 w-[18px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14.7656">
            <path d={svgPaths.p13b7c080} fill="var(--fill-0, #7D7D7D)" id="Symbol" />
          </svg>
        </div>
        <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">Orders</p>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.8px] relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Paragraph2 />
    </div>
  );
}

function Item1() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pb-[16px] relative row-2 self-start shrink-0" data-name="Item">
      <Link1 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center pb-[0.01px] pt-[1.57px] relative size-full">
        <div className="h-[17.104px] relative shrink-0 w-[17.993px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9926 17.1035">
            <path d={svgPaths.pda7fe00} fill="var(--fill-0, #7D7D7D)" id="Symbol" />
          </svg>
        </div>
        <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">Addresses</p>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.8px] relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Paragraph3 />
    </div>
  );
}

function Item2() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pb-[16px] relative row-3 self-start shrink-0" data-name="Item">
      <Link2 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center pt-[1.58px] relative size-full">
        <div className="h-[17.968px] relative shrink-0 w-[16.734px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7344 17.9679">
            <path d={svgPaths.p3a9eb600} fill="var(--fill-0, #60FF00)" id="Symbol" />
          </svg>
        </div>
        <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#60ff00] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">Account details</p>
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.8px] relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#dfdfdf] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Paragraph4 />
    </div>
  );
}

function Item3() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pb-[16px] relative row-4 self-start shrink-0" data-name="Item">
      <Link3 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex gap-[32px] items-center pt-[1.58px] relative shrink-0" data-name="Paragraph">
      <div className="h-[16.436px] relative shrink-0 w-[18px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16.4355">
          <path d={svgPaths.p36e86f80} fill="var(--fill-0, #7D7D7D)" id="Symbol" />
        </svg>
      </div>
      <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Log out</p>
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-5 self-start shrink-0" data-name="Item → Link">
      <Paragraph5 />
    </div>
  );
}

function List() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-[16px] shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[_346.80px] grid-rows-[________57.60px_58.38px_58.38px_58.38px_58.38px_58.38px_57.60px_25.58px] p-[30px] relative size-full">
        <Item />
        <Item1 />
        <Item2 />
        <Item3 />
        <ItemLink />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[1.6px] relative size-full">
        <Container5 />
        <List />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pb-[593.95px] relative row-1 self-start shrink-0" data-name="Container">
      <Border />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#f2f2f2] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#60ff00] border-solid border-t-[4.8px] inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
      <div className="content-stretch flex flex-col items-start pb-[16px] pt-[20.8px] px-[30px] relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#505157] text-[16px] whitespace-nowrap">
          <p className="leading-[23px]">My Account</p>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] w-full">
        <p>
          <span className="leading-[20px]">{`First name `}</span>
          <span className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] text-[#60ff00]">*</span>
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] w-full">
          <p className="leading-[normal]">Tit</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[50px] relative rounded-[5px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[20.8px] py-[16.2px] relative size-full">
          <Container10 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[36px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] w-full">
        <p>
          <span className="leading-[20px]">{`Last name `}</span>
          <span className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] text-[#60ff00]">*</span>
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] w-full">
          <p className="leading-[normal]">Dan</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[50px] relative rounded-[5px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[20.8px] py-[16.2px] relative size-full">
          <Container12 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[36px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__106px_12px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container11 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[20px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] w-full">
        <p>
          <span className="leading-[20px]">{`Display name `}</span>
          <span className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] text-[#60ff00]">*</span>
        </p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] w-full">
          <p className="leading-[normal]">titdan</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[50px] relative rounded-[5px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[20.8px] py-[16.2px] relative size-full">
          <Container14 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] w-full">
        <p className="leading-[16px]">This will be how your name will be displayed in the account section and in reviews</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[28px] relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Input2 />
      <Container15 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] w-full">
        <p>
          <span className="leading-[20px]">{`Email address `}</span>
          <span className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[20px] text-[#60ff00]">*</span>
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] w-full">
          <p className="leading-[normal]">tit@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[50px] relative rounded-[5px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[20.8px] py-[16.2px] relative size-full">
          <Container17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start pt-[28px] relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Input3 />
    </div>
  );
}

function Legend() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-[146.1px]" data-name="Legend">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[18px] uppercase whitespace-nowrap">
        <p className="leading-[27px]">PASSWORD CHANGE</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] w-full">
        <p className="leading-[20px]">Current password (leave blank to leave unchanged)</p>
      </div>
    </div>
  );
}

function Input4() {
  return <div className="absolute bg-white border border-[#eaeaea] border-solid h-[50px] left-0 right-0 rounded-[5px] top-[-13.8px]" data-name="Input" />;
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Container">
          <path d={svgPaths.p6acf0b6} fill="var(--fill-0, #505157)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function ButtonShowPassword() {
  return (
    <div className="absolute content-stretch flex items-center right-0 size-[50px] top-[-15px]" data-name="Button - Show password">
      <Container20 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[20.8px] relative shrink-0 w-full" data-name="Container">
      <Input4 />
      <ButtonShowPassword />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[49.8px] items-start pb-[15.4px] pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Container19 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] w-full">
        <p className="leading-[20px]">New password (leave blank to leave unchanged)</p>
      </div>
    </div>
  );
}

function Input5() {
  return <div className="absolute bg-white border border-[#eaeaea] border-solid h-[50px] left-0 right-0 rounded-[5px] top-[-13.8px]" data-name="Input" />;
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Container">
          <path d={svgPaths.p6acf0b6} fill="var(--fill-0, #505157)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function ButtonShowPassword1() {
  return (
    <div className="absolute content-stretch flex items-center right-0 size-[50px] top-[-15px]" data-name="Button - Show password">
      <Container23 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[20.8px] relative shrink-0 w-full" data-name="Container">
      <Input5 />
      <ButtonShowPassword1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[49.8px] items-start pb-[15.4px] relative shrink-0 w-full" data-name="Container">
      <Label5 />
      <Container22 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] w-full">
        <p className="leading-[20px]">Confirm new password</p>
      </div>
    </div>
  );
}

function Input6() {
  return <div className="absolute bg-white border border-[#eaeaea] border-solid h-[50px] left-0 right-0 rounded-[5px] top-[-13.8px]" data-name="Input" />;
}

function Container26() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Container">
          <path d={svgPaths.p6acf0b6} fill="var(--fill-0, #505157)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function ButtonShowPassword2() {
  return (
    <div className="absolute content-stretch flex items-center right-0 size-[50px] top-[-15px]" data-name="Button - Show password">
      <Container26 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[20.8px] relative shrink-0 w-full" data-name="Container">
      <Input6 />
      <ButtonShowPassword2 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[49.8px] items-start pb-[15.4px] relative shrink-0 w-full" data-name="Container">
      <Label6 />
      <Container25 />
    </div>
  );
}

function Fieldset() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[28px] relative shrink-0 w-full" data-name="Fieldset">
      <Legend />
      <Container18 />
      <Container21 />
      <Container24 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black content-stretch flex h-[50px] items-center justify-center pb-[15.4px] pt-[14.6px] px-[30px] relative rounded-[5px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white uppercase whitespace-nowrap">
        <p className="leading-[20px]">SAVE CHANGES</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[30px] relative shrink-0 w-full" data-name="Container">
      <Button />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <Container8 />
      <Container13 />
      <Container16 />
      <Fieldset />
      <Container27 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundHorizontalBorder />
      <Form />
    </div>
  );
}

function Container6() {
  return (
    <div className="col-[2/span_2] content-stretch flex flex-col items-start justify-self-stretch pb-[12px] relative row-1 self-start shrink-0" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="gap-x-[30px] gap-y-[30px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_1146.80px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col items-start py-[128px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function ArticleSection() {
  return (
    <div className="content-stretch flex h-[1402.8px] items-start justify-center max-w-[1320px] relative shrink-0 w-full" data-name="Article → Section">
      <Container2 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip px-[115.4px] right-0 top-[395.8px]" data-name="Main">
      <ArticleSection />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">CONTACT US</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.7px_0_20px_0] items-start" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Margin">
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[389.99px]" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px] mb-0">Morbi ullamcorper ligula sit amet efficitur pellentesque.</p>
        <p className="leading-[24px]">Aliquam ornare quam tellus ultricies molestie tortor.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container34 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[73px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container33 />
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

function Paragraph6() {
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

function Container36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <FigureMargin />
      <Paragraph6 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container36 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[59px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container35 />
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

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">info@example.com</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <FigureMargin1 />
      <Container39 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container38 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[44px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container37 />
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

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Monday till Friday 10 to 6 EST</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <FigureMargin2 />
      <Container42 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Container41 />
    </div>
  );
}

function Container31() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[15px] relative size-full">
          <Margin />
          <Margin1 />
          <Margin2 />
          <Margin3 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[439.99px]" data-name="Container">
      <Container31 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">HELP</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.7px_0_20px_0] items-start" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Margin">
      <Container45 />
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

function Item4() {
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

function Item5() {
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

function Item6() {
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

function Item7() {
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

function Item8() {
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

function Item9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Link9 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[6.5px] items-start relative shrink-0 w-full" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col h-[191px] items-start relative shrink-0 w-full" data-name="Container">
      <List1 />
    </div>
  );
}

function Container44() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[28px] pt-[15px] px-[15px] relative size-full">
          <Margin4 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[220px]" data-name="Container">
      <Container44 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">COMPANY</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.7px_0_20px_0] items-start" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Margin">
      <Container49 />
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

function Item10() {
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

function Item11() {
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

function Item12() {
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

function Item13() {
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

function Item14() {
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

function Item15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Link15 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[6.5px] items-start relative shrink-0 w-full" data-name="List">
      <Item10 />
      <Item11 />
      <Item12 />
      <Item13 />
      <Item14 />
      <Item15 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col h-[191px] items-start relative shrink-0 w-full" data-name="Container">
      <List2 />
    </div>
  );
}

function Container48() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[28px] pt-[15px] px-[15px] relative size-full">
          <Margin5 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[220px]" data-name="Container">
      <Container48 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">NEWSLETTER</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.7px_0_20px_0] items-start" data-name="Container">
      <Heading4 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Margin">
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px] mb-0">Get 15% off your first purchaxse! Plus, be the first to know about</p>
        <p className="leading-[21px]">sales new product launches and exclusive offers!</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container55 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col h-[74px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container54 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="capitalize flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#959595] text-[13px] w-full">
        <p className="leading-[normal]">Your Email Address</p>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white h-[54px] relative rounded-[54px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[20px] pr-[58px] py-[17.8px] relative size-full">
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function Container58() {
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
      <Input7 />
      <Container58 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <FormContactForm />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col h-[84px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container56 />
    </div>
  );
}

function Container61() {
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

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[2.62px] pr-[2.63px] relative shrink-0 size-[14px]" data-name="Container">
      <Container61 />
    </div>
  );
}

function ListitemLink() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container60 />
    </div>
  );
}

function Container63() {
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

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[0.87px] pr-[0.88px] relative shrink-0 size-[14px]" data-name="Container">
      <Container63 />
    </div>
  );
}

function ListitemLink1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container62 />
    </div>
  );
}

function Container65() {
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

function Container64() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start relative shrink-0 w-[14.88px]" data-name="Container">
      <Container65 />
    </div>
  );
}

function ListitemLink2() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[6.12px] pr-[7px] relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container64 />
    </div>
  );
}

function Container67() {
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

function Container66() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start relative shrink-0 w-[14.88px]" data-name="Container">
      <Container67 />
    </div>
  );
}

function ListitemLink3() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[6.12px] pr-[7px] relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container66 />
    </div>
  );
}

function Container69() {
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

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[14px]" data-name="Container">
      <Container69 />
    </div>
  );
}

function ListitemLink4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container68 />
    </div>
  );
}

function List3() {
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

function Container59() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <List3 />
    </div>
  );
}

function Container52() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[33px] pt-[15px] px-[15px] relative size-full">
          <Margin6 />
          <Margin7 />
          <Margin8 />
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[439.99px]" data-name="Container">
      <Container52 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[291px] items-start max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container43 />
      <Container47 />
      <Container51 />
    </div>
  );
}

function Section1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Section">
      <div className="content-stretch flex flex-col items-start px-[100.4px] relative size-full">
        <Container29 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[291px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Section1 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start pb-[98px] pt-[80px] relative shrink-0 w-full" data-name="Section">
      <Container28 />
    </div>
  );
}

function Container75() {
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

function Container74() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container75 />
    </div>
  );
}

function Container73() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container73 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g clipPath="url(#clip0_1_5708)" id="SVG">
          <path d={svgPaths.p21bd9700} fill="var(--fill-0, #21246E)" id="Vector" />
          <path d={svgPaths.p6584980} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_5708">
            <rect fill="white" height="36" width="36" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container80 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] pr-[16px] relative shrink-0" data-name="Container">
      <Container79 />
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

function Container83() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container83 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] pr-[16px] relative shrink-0" data-name="Container">
      <Container82 />
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

function Container86() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container86 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] pr-[16px] relative shrink-0" data-name="Container">
      <Container85 />
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

function Container89() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container89 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] pr-[16px] relative shrink-0" data-name="Container">
      <Container88 />
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

function Container92() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container92 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] relative shrink-0" data-name="Container">
      <Container91 />
    </div>
  );
}

function Container77() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end p-[15px] relative size-full">
          <Container78 />
          <Container81 />
          <Container84 />
          <Container87 />
          <Container90 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container77 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex h-[73.2px] items-start max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Container76 />
    </div>
  );
}

function Section3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Section">
      <div className="content-stretch flex flex-col items-start py-[15px] relative size-full">
        <Container71 />
      </div>
    </div>
  );
}

function Container70() {
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
        <Container70 />
      </div>
    </div>
  );
}

function Container96() {
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

function Container98() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Link16 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container98 />
    </div>
  );
}

function Container102() {
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

function Background() {
  return (
    <div className="bg-[#ededed] content-stretch flex items-center justify-center p-[13px] relative rounded-[50px] shrink-0" data-name="Background">
      <Container102 />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Background />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Container101 />
    </div>
  );
}

function Container104() {
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

function Background1() {
  return (
    <div className="bg-[#ededed] content-stretch flex items-center justify-center pl-[16.59px] pr-[16.6px] py-[16px] relative rounded-[50px] shrink-0" data-name="Background">
      <Container104 />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Background1 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Container103 />
    </div>
  );
}

function Container108() {
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

function Container107() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[50px] p-[15px] relative shrink-0" data-name="Container">
      <Container108 />
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-center right-[-6px] rounded-[9999px] size-[18px] top-[-6px]" data-name="Background">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#60ff00] text-[10px] text-center uppercase whitespace-nowrap">
        <p className="leading-[18px]">1</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container107 />
      <Background3 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#ededed] content-stretch flex items-center justify-center min-h-[50px] min-w-[50px] relative rounded-[50px] shrink-0" data-name="Background">
      <Button1 />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Background2 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container106 />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Container">
      <Margin9 />
      <Margin10 />
      <Container105 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container100 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container96 />
      <Container97 />
      <Container99 />
    </div>
  );
}

function Container94() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[30px] pt-[33px] px-[30px] relative size-full">
        <Container95 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container94 />
    </div>
  );
}

function Link17() {
  return (
    <RouterLink
      to="/"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pr-[14px] relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#909090] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">HOME</p>
      </div>
      <div className="absolute h-[2.997px] left-[40.86px] top-[10.63px] w-[6px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2.9973">
          <path d={svgPaths.p3d2f8a40} fill="var(--fill-0, #909090)" id="Symbol" />
        </svg>
      </div>
    </RouterLink>
  );
}

function Item16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0" data-name="Item">
      <Link17 />
    </div>
  );
}

function Link18() {
  return (
    <RouterLink
      to="/products"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pr-[14px] relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#909090] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">SHOP</p>
      </div>
      <div className="absolute h-[2.997px] left-[39.94px] top-[10.63px] w-[6px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2.9973">
          <path d={svgPaths.p3d2f8a40} fill="var(--fill-0, #909090)" id="Symbol" />
        </svg>
      </div>
    </RouterLink>
  );
}

function Item17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative self-stretch shrink-0" data-name="Item">
      <Link18 />
    </div>
  );
}

function Link19() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pr-[14px] relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#909090] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">PRODUCT</p>
      </div>
      <div className="absolute h-[2.997px] left-[63.04px] top-[10.63px] w-[6px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2.9973">
          <path d={svgPaths.p3d2f8a40} fill="var(--fill-0, #909090)" id="Symbol" />
        </svg>
      </div>
    </RouterLink>
  );
}

function Item18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative self-stretch shrink-0" data-name="Item">
      <Link19 />
    </div>
  );
}

function Link20() {
  return (
    <RouterLink
      to="/info"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pr-[14px] relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#909090] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">BLOG</p>
      </div>
      <div className="absolute h-[2.997px] left-[38.61px] top-[10.63px] w-[6px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2.9973">
          <path d={svgPaths.p3d2f8a40} fill="var(--fill-0, #909090)" id="Symbol" />
        </svg>
      </div>
    </RouterLink>
  );
}

function Item19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative self-stretch shrink-0" data-name="Item">
      <Link20 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0" data-name="List">
      <Item16 />
      <Item17 />
      <Item18 />
      <Item19 />
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Nav">
      <List4 />
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Nav />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[346.45px]" data-name="Container">
      <Container111 />
    </div>
  );
}

function Container109() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[32px] px-[30px] relative size-full">
          <Container110 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[2371.6px] relative shrink-0 w-full" data-name="Container">
      <Masthead />
      <Main />
      <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[1798.6px]" data-name="Footer">
        <Section />
        <Section2 />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Header">
        <Container93 />
        <Container109 />
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute left-0 size-[46px] top-0" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g clipPath="url(#clip0_1_5678)" id="SVG">
          <path d={svgPaths.p375dda80} id="Vector" stroke="var(--stroke-0, #0DB22A)" strokeDasharray="138.87 138.87" strokeWidth="1.80392" />
        </g>
        <defs>
          <clipPath id="clip0_1_5678">
            <rect fill="white" height="46" width="46" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container112() {
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

function Background4() {
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
      <Svg5 />
      <Container112 />
    </div>
  );
}

export default function TrangThongTinTaiKhon() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Trang thông tin tài khoản">
      <Container />
      <div className="absolute bottom-0 h-[2371.6px] pointer-events-none right-[20px]">
        <Background4 />
      </div>
    </div>
  );
}