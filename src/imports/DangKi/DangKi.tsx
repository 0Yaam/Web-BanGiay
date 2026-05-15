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
    <div className="bg-[#ececec] content-stretch flex items-start justify-center p-[10px] relative rounded-[5px] shrink-0 w-[230px] z-[2]" data-name="Background">
      <div className="absolute bg-white h-[40px] left-[115px] rounded-[5px] shadow-[5px_5px_8px_0px_rgba(0,0,0,0.1)] top-[10px] w-[105px]" data-name="Background+Shadow" />
      <Container />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] pt-[36px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] w-full">
        <p className="leading-[20px]">Create your account:</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] w-full">
        <p>
          <span className="leading-[16px]">{`Username `}</span>
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
          <p className="leading-[normal]">USER NAME</p>
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
          <span className="leading-[16px]">{`Email address `}</span>
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
          <p className="leading-[normal]">EMAIL</p>
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

function Label2() {
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

function Container9() {
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

function Input2() {
  return (
    <div className="bg-white h-[50px] relative rounded-[5px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[17px] pt-[18.6px] px-[20.8px] relative size-full">
          <Container9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pt-[19px] relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Input2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16.6px] pt-[18.4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] w-full">
        <p className="leading-[22px] mb-0">Your personal data will be used to support your experience</p>
        <p className="leading-[22px] mb-0">throughout this website, to manage access to your account, and for</p>
        <p>
          <span className="leading-[22px]">{`other purposes described in our `}</span>
          <span className="font-['Jost:Medium',sans-serif] font-medium leading-[22px] text-[#222]">privacy policy</span>
          <span className="leading-[22px]">.</span>
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black h-[50px] relative rounded-[5px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white uppercase whitespace-nowrap">
            <p className="leading-[24px]">REGISTER</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="Form">
      <Container3 />
      <Container4 />
      <Container6 />
      <Container8 />
      <Container10 />
      <Button />
    </div>
  );
}

export default function DangKi() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start p-[40px] relative rounded-[3px] size-full" data-name="Đăng kí">
      <Background />
      <Form />
    </div>
  );
}