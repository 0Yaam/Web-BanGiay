import svgPaths from "./svg-7hrn6y30rh";

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative rounded-[5px] self-stretch" data-name="Container">
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[40px]">Login</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative rounded-[5px] self-stretch" data-name="Container">
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[40px]">Register</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[40px] items-start min-w-px relative" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ececec] content-stretch flex items-start justify-center p-[10px] relative rounded-[5px] shrink-0 w-[230px]" data-name="Background">
      <div className="absolute bg-white h-[40px] left-[10px] rounded-[5px] shadow-[5px_5px_8px_0px_rgba(0,0,0,0.1)] top-[10px] w-[105px]" data-name="Background+Shadow" />
      <Container />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] pt-[36px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] w-full">
        <p className="leading-[20px]">Insert your account information:</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] w-full">
        <p>
          <span className="leading-[16px]">{`Email address `}</span>
          <span className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[16px] text-[#ff2a2a]">*</span>
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b1b1b1] text-[10px] uppercase w-full">
          <p className="leading-[normal]">ENTER YOUR EMAIL</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[50px] relative rounded-[5px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[17px] pt-[18.6px] px-[20.8px] relative size-full">
          <Container5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
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
          <span className="leading-[16px]">{`Password `}</span>
          <span className="font-['Jost:SemiBold',sans-serif] font-semibold leading-[16px] text-[#ff2a2a]">*</span>
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b1b1b1] text-[10px] uppercase w-full">
          <p className="leading-[normal]">PASSWORD</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[50px] relative rounded-[5px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[17px] pt-[18.6px] px-[20.8px] relative size-full">
          <Container7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pt-[19px] relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute h-[18px] left-0 top-[6px] w-[20px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Background" opacity="0">
          <rect fill="var(--fill-0, #60FF00)" height="18" rx="3" width="20" />
          <path d={svgPaths.p12f93000} fill="var(--fill-0, white)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[107.69px]" data-name="Label">
      <Background1 />
      <div className="absolute border border-[#e7e8eb] border-solid left-0 rounded-[3px] size-[20px] top-[5px]" data-name="Border" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] left-[30px] text-[#505157] text-[12px] top-[16px] whitespace-nowrap">
        <p className="leading-[16px]">{` Remember me`}</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[172.18px]" data-name="Container">
      <Label2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative self-stretch shrink-0 w-[167.82px]" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pt-[4px] relative size-full">
          <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] text-right whitespace-nowrap">
            <p className="leading-[16px]">Lost your password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[63px] items-start justify-center pb-[19px] pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black h-[50px] relative rounded-[5px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white uppercase whitespace-nowrap">
            <p className="leading-[24px]">LOGIN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <Container3 />
      <Container4 />
      <Container6 />
      <Container8 />
      <Button />
    </div>
  );
}

export default function DangNhp() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[40px] relative rounded-[3px] size-full" data-name="Đăng nhập">
      <Background />
      <Form />
    </div>
  );
}