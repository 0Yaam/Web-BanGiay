import { useState } from "react";
import { Link as RouterLink } from "react-router";
import svgPaths from "./svg-7s85bhtfkc";
import imgMasthead from "./7e50743c804ee3c01b7423cd7410540d607630a7.png";
import imgKid from "./a9a3b8ccba9adf36fe61e5a6c9f3778decd5c484.png";
import imgLifestyle from "./0f8b7aa66af1a5061eac830a292971cb8aafe0b6.png";
import imgMen from "./16dc50a1643818118fe714a82ccc8fe956d62c6e.png";
import imgRunningShoes from "./9949e17c4f7571a1343c9a4641b79d0cdd2b8e8e.png";
import imgSkate from "./65810227fd9f0a520ddfd072b224e5fe8dbe1ec7.png";
import imgAirJordanDmp1Retro from "./37ba129bdf6a4d73f4390a901eaf9994cd1a6bcd.png";
import imgSecondImageOfAirJordanDmp1Retro from "./07efb7f17b073299b1a70210f5e78b1e05e14db4.png";
import imgAirJordanDmp1Retro1 from "./b957fac1f8d50131a15ad42f8f2b097046045ebd.png";
import imgSecondImageOfAirJordanDmp1Retro1 from "./4874dfb16d99bf2e9456ba848e707ad414d011bd.png";
import imgAirJordanDmp1Retro2 from "./4b1c34b74d60936ad774c03b3c498bd652a41fe6.png";
import imgAirJordanDmp1Retro3 from "./c4578f516ba92e38e76844b1b52fe8717c256aec.png";
import imgSecondImageOfAirJordanDmp1Retro2 from "./a7b936b34220a460a92070a712a7387af5a2c1d0.png";
import imgAirJordanDmp1Retro4 from "./fa25379e812d9dddfb49229861453670e8e99724.png";
import imgSecondImageOfAirJordanDmp1Retro3 from "./73fc0d2451347ee9bb5f678eff480891a836731a.png";
import imgAirJordanDmp1Retro5 from "./c48fa71271af6fd83d4ce1b3f7d28e23cbb78b8e.png";
import imgSecondImageOfAirJordanDmp1Retro4 from "./50d9d6e7f76ac128256ec9d7cda69e42629aa79d.png";
import imgAirJordanDmp1Retro6 from "./b44c358431d19a15f43a7c99507636e28e745d24.png";
import imgSecondImageOfAirJordanDmp1Retro5 from "./e0f6ef6b610a49dbbd15621a5d3c3440b6586ff2.png";
import imgAirJordanDmp1Retro7 from "./a5607abb043b2e1a7e8e6152b19d475986f7df7e.png";
import imgSecondImageOfAirJordanDmp1Retro6 from "./a0f145316fb65e152cf20165c501a031d15c5303.png";
import imgAirJordanDmp1Retro8 from "./383ba58bae4cf07f439f6674987d9517105efab0.png";
import imgAirJordanDmp1Retro9 from "./d90d506dd10a839ddc75a1f669f5f032e1077ebc.png";
import imgAirJordanDmp1Retro10 from "./99d51ca8c7167b36ee641d04e1c0ba82ce01b194.png";
import imgSecondImageOfAirJordanDmp1Retro7 from "./633ef9957ca848ab60ebe55c898df234e1962eda.png";
import imgAirJordanDmp1Retro11 from "./7088a0fb2b90ce6fb42ecfcfd502d4cc4d1a2424.png";
import imgSecondImageOfAirJordanDmp1Retro8 from "./8554bb6a56aa668951e6c910f658645f86a73064.png";
import imgImageContact1Png from "./c2000d94d8e5d7dd1fac8c081b9ad2c8a35297d1.png";
import imgFigure from "./f6a7586ab049f7e8f087fb60cf77c048db40a1e4.png";
import imgImageContact3Png from "./9090d63ed0f5181223c0085f89969a453671ce1d.png";
import imgLogo from "./89309c4327d643be9d6885f84d12f69b214a62e7.png";
import { formatPrice, products } from "../../app/data/products";

type FilterState = {
  selectedCategories: string[];
  selectedBrands: string[];
  selectedRatings: number[];
  selectedColors: string[];
  selectedSizes: string[];
  minSelectedPrice: number;
  maxSelectedPrice: number;
};

const categoryOptions = [
  "Kid",
  "Lifestyle",
  "Men",
  "Running Shoes",
  "Skate",
  "Sneakers",
  "Sport Shoes",
  "Women",
];

const colorOptions = [
  { value: "blue", hex: "#0000ff" },
  { value: "brown", hex: "#8b4513" },
  { value: "lime", hex: "#7fff00" },
  { value: "crimson", hex: "#dc143c" },
  { value: "gray", hex: "#9e9e9e" },
  { value: "gold", hex: "#ffd700" },
  { value: "goldenrod", hex: "#daa520" },
  { value: "green", hex: "#00ff00" },
  { value: "indianred", hex: "#cd5c5c" },
  { value: "azure", hex: "#f0ffff" },
  { value: "lightgreen", hex: "#90ee90" },
  { value: "lightskyblue", hex: "#87cefa" },
  { value: "slateblue", hex: "#303a83" },
  { value: "orange", hex: "#ffa500" },
  { value: "palegreen", hex: "#98fb98" },
  { value: "peru", hex: "#cd853f" },
  { value: "pink", hex: "#ffc0cb" },
  { value: "plum", hex: "#dda0dd" },
  { value: "purple", hex: "#800080" },
  { value: "red", hex: "#e70019" },
  { value: "royalblue", hex: "#4169e1" },
  { value: "yellowgreen", hex: "#9acd32" },
  { value: "black", hex: "#111111" },
  { value: "white", hex: "#ffffff" },
  { value: "beige", hex: "#f5f5dc" },
];

function getPriceBounds() {
  const priceValues = products.map((product) => product.price ?? 0);
  return {
    minPrice: Math.min(...priceValues),
    maxPrice: Math.max(...priceValues),
  };
}

function buildCountMap<T>(items: T[], getKey: (item: T) => string) {
  return items.reduce<Record<string, number>>((acc, item) => {
    const key = getKey(item);
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});
}

function toggleValue(values: string[], value: string) {
  return values.includes(value)
    ? values.filter((item) => item !== value)
    : [...values, value];
}

function toggleNumber(values: number[], value: number) {
  return values.includes(value)
    ? values.filter((item) => item !== value)
    : [...values, value];
}

function SidebarCheckbox({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count: number;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center gap-[12px] text-[#505157] text-[14px] cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="size-[18px] rounded-[3px] border border-[#c8c8c8] accent-[#0db22a]"
      />
      <span className="leading-[24px]">{label}</span>
      <span className="text-[#909090] text-[12px] leading-[16px]">({count})</span>
    </label>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M7 0.5L8.7 5.1H13.5L9.6 8.1L10.9 12.9L7 10L3.1 12.9L4.4 8.1L0.5 5.1H5.3L7 0.5Z"
        fill={filled ? "#000" : "#c3c3c3"}
      />
    </svg>
  );
}

function RatingRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-[2px]">
      {[1, 2, 3, 4, 5].map((value) => (
        <StarIcon key={value} filled={value <= rating} />
      ))}
    </div>
  );
}

function ColorSwatch({
  value,
  hex,
  checked,
  onToggle,
}: {
  value: string;
  hex: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`size-[30px] rounded-[9999px] p-[2px] border transition-colors ${
        checked ? "border-[#0db22a]" : "border-transparent"
      }`}
      aria-pressed={checked}
      aria-label={value}
    >
      <span
        className="block size-full rounded-[9999px]"
        style={{ backgroundColor: hex }}
      />
    </button>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const price = formatPrice(product.price);
  const oldPrice = formatPrice(product.oldPrice);

  return (
    <RouterLink
      to={`/product/${product.id}`}
      className="group content-stretch flex flex-col items-start"
    >
      <div className="relative overflow-hidden rounded-[3px] w-full">
        <img
          alt={product.name}
          className="w-full aspect-[302/354] object-cover transition-opacity duration-500"
          src={product.image}
        />
        {product.secondaryImage && (
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            src={product.secondaryImage}
          />
        )}
      </div>
      <div className="flex flex-col gap-[12px] pt-[20px] w-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] text-[#222] text-[14px]">
          <p className="leading-[21px]">{product.name}</p>
        </div>
        <div className="flex items-center gap-[6px] text-[#b5b5b5] text-[12px] font-['Jost:Medium',sans-serif]">
          <RatingRow rating={product.rating} />
          <span className="leading-[24px]">({product.reviews})</span>
        </div>
        <div className="font-['Jost:Bold',sans-serif] font-bold text-[14px] text-[#232630]">
          {price && <span className="leading-[14px]">{price}</span>}
          {oldPrice && (
            <span className="leading-[14px] text-[#7c7c7c] line-through ml-[10px]">{oldPrice}</span>
          )}
        </div>
      </div>
    </RouterLink>
  );
}

function ProductGrid({
  filters,
  sortBy,
}: {
  filters: FilterState;
  sortBy: string;
}) {
  const filteredProducts = products
    .filter((product) => {
      const price = product.price ?? 0;
      const matchesCategory =
        filters.selectedCategories.length === 0 ||
        filters.selectedCategories.includes(product.category);
      const matchesBrand =
        filters.selectedBrands.length === 0 ||
        filters.selectedBrands.includes(product.brand);
      const matchesSize =
        filters.selectedSizes.length === 0 ||
        product.sizes.some((size) => filters.selectedSizes.includes(size));
      const matchesColor =
        filters.selectedColors.length === 0 ||
        product.colors.some((color) => filters.selectedColors.includes(color));
      const matchesRating =
        filters.selectedRatings.length === 0 ||
        filters.selectedRatings.some((rating) => product.rating >= rating);
      const matchesPrice =
        price >= filters.minSelectedPrice && price <= filters.maxSelectedPrice;

      return (
        matchesCategory &&
        matchesBrand &&
        matchesSize &&
        matchesColor &&
        matchesRating &&
        matchesPrice
      );
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") {
        return (a.price ?? 0) - (b.price ?? 0);
      }
      if (sortBy === "price-desc") {
        return (b.price ?? 0) - (a.price ?? 0);
      }
      return 0;
    });

  return (
    <div className="grid grid-cols-3 gap-[30px]">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[30px] text-center uppercase whitespace-nowrap">
        <p className="leading-[45px]">SHOP</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-26.48px)] text-[#222] text-[12px] text-center top-[8px] whitespace-nowrap">
        <RouterLink to="/" className="leading-[16px] hover:text-[#0db22a] transition-colors">
          Home
        </RouterLink>
      </div>
      <div className="-translate-x-1/2 absolute h-[6.997px] left-[calc(50%+2.2px)] top-[5.85px] w-[3.5px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.5 6.99684">
          <path d={svgPaths.p2389b80} fill="var(--fill-0, #222222)" id="Symbol" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+29.2px)] text-[#222] text-[12px] text-center top-[8px] whitespace-nowrap">
        <RouterLink to="/products" className="leading-[16px] hover:text-[#0db22a] transition-colors">
          Shop
        </RouterLink>
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

function Kid() {
  return (
    <div className="max-w-[190px] relative shrink-0 size-[190px]" data-name="Kid">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgKid} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <RouterLink
      to="/products"
      className="content-stretch flex items-start justify-center relative shrink-0"
      data-name="Link"
    >
      <Kid />
    </RouterLink>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-start justify-center max-w-[190px] min-w-[188px] overflow-clip relative rounded-[9999px] shrink-0" data-name="Container">
      <Link />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Kid</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px]">15 Products</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[25px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container10 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[7.2px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px px-[15px] relative self-stretch shrink-0 w-[220px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Lifestyle() {
  return (
    <div className="max-w-[190px] relative shrink-0 size-[190px]" data-name="Lifestyle">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLifestyle} />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <RouterLink
      to="/products"
      className="content-stretch flex items-start justify-center relative shrink-0"
      data-name="Link"
    >
      <Lifestyle />
    </RouterLink>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-start justify-center max-w-[190px] min-w-[188px] overflow-clip relative rounded-[9999px] shrink-0" data-name="Container">
      <Link1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Lifestyle</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px]">8 Products</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[25px] relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container15 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[7.2px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px px-[15px] relative self-stretch shrink-0 w-[220px]" data-name="Container">
      <Container12 />
    </div>
  );
}

function Men() {
  return (
    <div className="max-w-[190px] relative shrink-0 size-[190px]" data-name="Men">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMen} />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <RouterLink
      to="/products"
      className="content-stretch flex items-start justify-center relative shrink-0"
      data-name="Link"
    >
      <Men />
    </RouterLink>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-start justify-center max-w-[190px] min-w-[188px] overflow-clip relative rounded-[9999px] shrink-0" data-name="Container">
      <Link2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Men</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px]">23 Products</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[25px] relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container20 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[7.2px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px px-[15px] relative self-stretch shrink-0 w-[220px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function RunningShoes() {
  return (
    <div className="max-w-[190px] relative shrink-0 size-[190px]" data-name="Running Shoes">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRunningShoes} />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <RouterLink
      to="/products"
      className="content-stretch flex items-start justify-center relative shrink-0"
      data-name="Link"
    >
      <RunningShoes />
    </RouterLink>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-start justify-center max-w-[190px] min-w-[188px] overflow-clip relative rounded-[9999px] shrink-0" data-name="Container">
      <Link3 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Running Shoes</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px]">27 Products</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[25px] relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container25 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[7.2px] items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px px-[15px] relative self-stretch shrink-0 w-[220px]" data-name="Container">
      <Container22 />
    </div>
  );
}

function Skate() {
  return (
    <div className="max-w-[190px] relative shrink-0 size-[190px]" data-name="Skate">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSkate} />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <RouterLink
      to="/products"
      className="content-stretch flex items-start justify-center relative shrink-0"
      data-name="Link"
    >
      <Skate />
    </RouterLink>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-start justify-center max-w-[190px] min-w-[188px] overflow-clip relative rounded-[9999px] shrink-0" data-name="Container">
      <Link4 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Skate</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px]">27 Products</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[25px] relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container30 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[7.2px] items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px px-[15px] relative self-stretch shrink-0 w-[220px]" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[275.2px] items-start overflow-clip relative shrink-0 w-[1760px]" data-name="Container">
      <Container6 />
      <Container11 />
      <Container16 />
      <Container21 />
      <Container26 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pl-[660px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[13.34px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13.3398">
        <g id="Container">
          <path d={svgPaths.p2acfc240} fill="var(--fill-0, #909090)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPrevious() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[-80px] opacity-70 rounded-[20px] size-[20px] top-[calc(50%-42px)]" data-name="Button - Previous">
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[13.34px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13.3398">
        <g id="Container">
          <path d={svgPaths.p1170ec80} fill="var(--fill-0, #909090)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function ButtonNext() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center right-[-80px] rounded-[20px] size-[20px] top-[calc(50%-42px)]" data-name="Button - Next">
      <Container32 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <ButtonPrevious />
      <ButtonNext />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[115.4px] overflow-clip px-[95px] right-[115.4px] top-[468.8px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[13.727px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.7266">
        <g id="Container">
          <path d={svgPaths.p253feec0} fill="var(--fill-0, #222222)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[23.8px] pt-[8px] relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[#ececec] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container34 />
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[20px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">FILTER BY</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div
      className="absolute h-[5.705px] right-0 top-[-0.7px] w-[10px]"
      data-name="Container"
      data-filter-arrow
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.70521">
        <g id="Container">
          <path d={svgPaths.p39cb1d00} fill="var(--fill-0, #222222)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div
      className="h-[39px] relative shrink-0 w-full cursor-pointer select-none"
      data-name="Heading 5"
      data-filter-toggle="categories"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#222] text-[16px] top-[12px] whitespace-nowrap">
          <p className="leading-[24px]">Categories</p>
        </div>
        <Container35 />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[20.8px] leading-[0] relative shrink-0 w-[42.45px] whitespace-nowrap" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center left-0 text-[#505157] text-[14px] top-[10.4px]">
        <p className="leading-[24px]">{`Kid `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Light',sans-serif] font-light justify-center left-[23.74px] text-[#909090] text-[12px] top-[11.2px]">
        <p className="leading-[16px]">(15)</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex flex-col items-start pl-[34px] py-[1.6px] relative size-full">
        <Link5 />
        <div className="absolute left-0 rounded-[3px] size-[18px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[7.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[20.8px] leading-[0] relative shrink-0 w-[64.14px] whitespace-nowrap" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center left-0 text-[#505157] text-[14px] top-[10.4px]">
        <p className="leading-[24px]">{`Lifestyle `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Light',sans-serif] font-light justify-center left-[50.95px] text-[#909090] text-[12px] top-[11.2px]">
        <p className="leading-[16px]">(8)</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex flex-col items-start pl-[34px] py-[1.6px] relative size-full">
        <Link6 />
        <div className="absolute left-0 rounded-[3px] size-[18px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[7.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[20.8px] leading-[0] relative shrink-0 w-[50.01px] whitespace-nowrap" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center left-0 text-[#505157] text-[14px] top-[10.4px]">
        <p className="leading-[24px]">{`Men `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Light',sans-serif] font-light justify-center left-[30.1px] text-[#909090] text-[12px] top-[11.2px]">
        <p className="leading-[16px]">(23)</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex flex-col items-start pl-[34px] py-[1.6px] relative size-full">
        <Link7 />
        <div className="absolute left-0 rounded-[3px] size-[18px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[7.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[20.8px] leading-[0] relative shrink-0 w-[112.38px] whitespace-nowrap" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center left-0 text-[#505157] text-[14px] top-[10.4px]">
        <p className="leading-[24px]">{`Running Shoes `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Light',sans-serif] font-light justify-center left-[92.79px] text-[#909090] text-[12px] top-[11.2px]">
        <p className="leading-[16px]">(27)</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex flex-col items-start pl-[34px] py-[1.6px] relative size-full">
        <Link8 />
        <div className="absolute left-0 rounded-[3px] size-[18px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[7.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[20.8px] leading-[0] relative shrink-0 w-[54.92px] whitespace-nowrap" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center left-0 text-[#505157] text-[14px] top-[10.4px]">
        <p className="leading-[24px]">{`Skate `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Light',sans-serif] font-light justify-center left-[35.34px] text-[#909090] text-[12px] top-[11.2px]">
        <p className="leading-[16px]">(27)</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex flex-col items-start pl-[34px] py-[1.6px] relative size-full">
        <Link9 />
        <div className="absolute left-0 rounded-[3px] size-[18px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[7.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[20.8px] leading-[0] relative shrink-0 w-[76.85px] whitespace-nowrap" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center left-0 text-[#505157] text-[14px] top-[10.4px]">
        <p className="leading-[24px]">{`Sneakers `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Light',sans-serif] font-light justify-center left-[56.78px] text-[#909090] text-[12px] top-[11.2px]">
        <p className="leading-[16px]">(25)</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex flex-col items-start pl-[34px] py-[1.6px] relative size-full">
        <Link10 />
        <div className="absolute left-0 rounded-[3px] size-[18px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[7.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[20.8px] leading-[0] relative shrink-0 w-[88.58px] whitespace-nowrap" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center left-0 text-[#505157] text-[14px] top-[10.4px]">
        <p className="leading-[24px]">{`Sport Shoes `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Light',sans-serif] font-light justify-center left-[75.39px] text-[#909090] text-[12px] top-[11.2px]">
        <p className="leading-[16px]">(8)</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex flex-col items-start pl-[34px] py-[1.6px] relative size-full">
        <Link11 />
        <div className="absolute left-0 rounded-[3px] size-[18px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[7.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="h-[20.8px] leading-[0] relative shrink-0 w-[68.64px] whitespace-nowrap" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center left-0 text-[#505157] text-[14px] top-[10.4px]">
        <p className="leading-[24px]">{`Women `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Light',sans-serif] font-light justify-center left-[50.08px] text-[#909090] text-[12px] top-[11.2px]">
        <p className="leading-[16px]">(13)</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex flex-col items-start pl-[34px] py-[1.6px] relative size-full">
        <Link12 />
        <div className="absolute left-0 rounded-[3px] size-[18px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[7.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}

function Container37() {
  return (
    <div className="max-h-[300px] relative shrink-0 w-full" data-name="Container">
      <div className="max-h-[inherit] overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col items-start max-h-[inherit] pr-[17px] relative size-full">
          <List />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div
      className="relative shrink-0 w-[251.9px]"
      data-name="Container"
      data-filter-content="categories"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <div className="absolute bg-[#ececec] h-px left-0 top-0 w-[234.9px]" data-name="Horizontal Divider" />
        <Container37 />
      </div>
    </div>
  );
}

function Border({
  categories,
  counts,
  selected,
  onToggle,
}: {
  categories: string[];
  counts: Record<string, number>;
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="content-stretch flex flex-col items-start pb-[30.8px] pt-[15.8px] px-[28.8px] relative size-full">
        <Heading7 />
        <div
          className="relative shrink-0 w-[251.9px]"
          data-name="Container"
          data-filter-content="categories"
        >
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
            <div className="absolute bg-[#ececec] h-px left-0 top-0 w-[234.9px]" data-name="Horizontal Divider" />
            <div className="max-h-[300px] relative shrink-0 w-full" data-name="Container">
              <div className="max-h-[inherit] overflow-x-clip overflow-y-auto size-full">
                <div className="content-stretch flex flex-col items-start max-h-[inherit] pr-[17px] relative size-full">
                  <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="List">
                    {categories.map((category) => (
                      <SidebarCheckbox
                        key={category}
                        label={category}
                        count={counts[category] ?? 0}
                        checked={selected.includes(category)}
                        onChange={() => onToggle(category)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div
      className="absolute h-[5.705px] right-0 top-[-0.7px] w-[10px]"
      data-name="Container"
      data-filter-arrow
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.70521">
        <g id="Container">
          <path d={svgPaths.p39cb1d00} fill="var(--fill-0, #222222)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Heading8() {
  return (
    <div
      className="h-[39px] relative shrink-0 w-full cursor-pointer select-none"
      data-name="Heading 5"
      data-filter-toggle="price"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#222] text-[16px] top-[12px] whitespace-nowrap">
          <p className="leading-[24px]">Price</p>
        </div>
        <Container38 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto pr-[35.84px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">32</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container47 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container46 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start max-w-[60px] min-w-[50px] overflow-clip relative shrink-0" data-name="Input">
      <Container45 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex items-center pl-[4px] pr-[3.6px] relative shrink-0" data-name="Container">
      <Input />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto pr-[28.31px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">208</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container51 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container50 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start max-w-[60px] min-w-[50px] overflow-clip relative shrink-0" data-name="Input">
      <Container49 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex items-center pl-[35.6px] relative shrink-0" data-name="Container">
      <Input1 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">{`Ranger ($): `}</p>
      </div>
      <Container44 />
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">-</p>
      </div>
      <Container48 />
    </div>
  );
}

function Link13() {
  return (
    <div className="bg-black content-stretch flex items-start px-[20px] relative rounded-[3px] shrink-0 hover:bg-[#0db22a] transition-colors duration-200 cursor-pointer" data-name="Link">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
        <p className="leading-[36px]">FILTER</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.6px] items-start left-0 overflow-clip pb-[10px] right-0 top-[79px]" data-name="Container">
      <Container43 />
      <Link13 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-white border border-[#ababab] border-solid h-[7px] left-0 right-0 rounded-[5px] top-[14px]" data-name="Background+Border">
      <div className="absolute bg-[#60ff00] border border-[#60ff00] border-solid inset-[-1.2px_calc(0.34%-0.99px)] rounded-[5px]" data-name="Background+Border" />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0" data-name="Container">
      <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#909090] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">$32.00</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start right-0" data-name="Container">
      <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#909090] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">$208.00</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[4px] relative rounded-[9.5px] shrink-0 size-[27px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9.5px]" />
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[9.5px] shadow-[0px_0px_0px_1px_#60ff00] shrink-0 size-[19px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container55() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[-4px] right-0 top-1/2" data-name="Container">
      <BackgroundBorder1 />
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute h-[7px] left-0 right-0 top-[-7px]" data-name="Input">
      <Container55 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[4px] relative rounded-[9.5px] shrink-0 size-[27px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9.5px]" />
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[9.5px] shadow-[0px_0px_0px_1px_#60ff00] shrink-0 size-[19px]" data-name="Overlay+Shadow" />
    </div>
  );
}

function Container56() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[209.9px] relative size-full">
        <BackgroundBorder2 />
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="absolute content-stretch flex h-[7px] items-center justify-center left-0 right-0 top-[-7px]" data-name="Input">
      <Container56 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[30px] left-px right-px top-[21px]" data-name="Container">
      <Container53 />
      <Container54 />
      <Input2 />
      <Input3 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[165px] relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <BackgroundBorder />
      <Container52 />
    </div>
  );
}

function PriceRange({
  minLimit = 0,
  maxLimit = 0,
  minValue = 0,
  maxValue = 0,
  onMinChange = () => {},
  onMaxChange = () => {},
}: {
  minLimit?: number;
  maxLimit?: number;
  minValue?: number;
  maxValue?: number;
  onMinChange?: (value: number) => void;
  onMaxChange?: (value: number) => void;
}) {
  const handleMinChange = (value: number) => {
    onMinChange(Math.min(value, maxValue - 1));
  };

  const handleMaxChange = (value: number) => {
    onMaxChange(Math.max(value, minValue + 1));
  };

  const minPercent = ((minValue - minLimit) / (maxLimit - minLimit)) * 100;
  const maxPercent = ((maxValue - minLimit) / (maxLimit - minLimit)) * 100;

  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="content-stretch flex flex-col items-start relative size-full gap-[20px]">
          {/* Slider Track Area */}
          <div className="relative w-full h-[40px] mt-[5px]">
            {/* Track background */}
            <div className="absolute bg-white border border-[#ababab] border-solid h-[7px] left-0 right-0 rounded-[5px] top-1/2 -translate-y-1/2" data-name="Background+Border">
              {/* Active range fill */}
              <div
                className="absolute bg-[#60ff00] border border-[#60ff00] border-solid rounded-[5px] h-full"
                style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
                data-name="Background+Border"
              />
            </div>

            {/* Min thumb */}
            <div
              className="absolute -translate-y-1/2 top-1/2 z-[2]"
              style={{ left: `calc(${minPercent}% - 13.5px)` }}
            >
              <div className="bg-white content-stretch flex flex-col items-start p-[4px] relative rounded-[9.5px] shrink-0 size-[27px]" data-name="Background+Border">
                <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9.5px]" />
                <div className="bg-[rgba(255,255,255,0)] relative rounded-[9.5px] shadow-[0px_0px_0px_1px_#60ff00] shrink-0 size-[19px]" data-name="Overlay+Shadow" />
              </div>
            </div>

            {/* Max thumb */}
            <div
              className="absolute -translate-y-1/2 top-1/2 z-[2]"
              style={{ left: `calc(${maxPercent}% - 13.5px)` }}
            >
              <div className="bg-white content-stretch flex flex-col items-start p-[4px] relative rounded-[9.5px] shrink-0 size-[27px]" data-name="Background+Border">
                <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9.5px]" />
                <div className="bg-[rgba(255,255,255,0)] relative rounded-[9.5px] shadow-[0px_0px_0px_1px_#60ff00] shrink-0 size-[19px]" data-name="Overlay+Shadow" />
              </div>
            </div>

            {/* Hidden range inputs for interaction */}
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={minValue}
              onChange={(event) => handleMinChange(Number(event.target.value))}
              className="absolute left-0 right-0 top-0 h-full opacity-0 cursor-pointer z-[3]"
              style={{ pointerEvents: 'auto' }}
              aria-label="Minimum price"
            />
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={maxValue}
              onChange={(event) => handleMaxChange(Number(event.target.value))}
              className="absolute left-0 right-0 top-0 h-full opacity-0 cursor-pointer z-[3]"
              style={{ pointerEvents: 'auto' }}
              aria-label="Maximum price"
            />
          </div>

          {/* Price labels below slider */}
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] text-[#909090] text-[10px] whitespace-nowrap">
              <p className="leading-[15px]">${minLimit}.00</p>
            </div>
            <div className="flex flex-col font-['Jost:SemiBold',sans-serif] font-semibold justify-center leading-[0] text-[#909090] text-[10px] whitespace-nowrap">
              <p className="leading-[15px]">${maxLimit}.00</p>
            </div>
          </div>

          {/* Ranger text */}
          <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full gap-[4px]" data-name="Container">
            <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] whitespace-nowrap">
              <p className="leading-[24px]">{`Ranger ($):`}</p>
            </div>
            <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] whitespace-nowrap">
              <p className="leading-[24px]">{minValue}</p>
            </div>
            <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] whitespace-nowrap">
              <p className="leading-[24px]">-</p>
            </div>
            <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] whitespace-nowrap">
              <p className="leading-[24px]">{maxValue}</p>
            </div>
          </div>

          {/* FILTER button */}
          <div className="bg-black content-stretch flex items-start px-[20px] relative rounded-[3px] shrink-0 hover:bg-[#0db22a] transition-colors duration-200 cursor-pointer" data-name="Link">
            <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
              <p className="leading-[36px]">FILTER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="max-h-[300px] relative shrink-0 w-full" data-name="Container">
      <div className="max-h-[inherit] overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col items-start max-h-[inherit] pr-[17px] relative size-full">
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return null;
}

function Border1({
  minLimit,
  maxLimit,
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
}: {
  minLimit: number;
  maxLimit: number;
  minValue: number;
  maxValue: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
}) {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="content-stretch flex flex-col items-start pb-[30.8px] pt-[15.8px] px-[28.8px] relative size-full">
        <Heading8 />
        <div
          className="relative shrink-0 w-[251.9px]"
          data-name="Container"
          data-filter-content="price"
        >
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
            <div className="absolute bg-[#ececec] h-px left-0 top-0 w-[234.9px]" data-name="Horizontal Divider" />
            <div className="flex flex-col gap-[16px] w-full">
              <PriceRange
                minLimit={minLimit}
                maxLimit={maxLimit}
                minValue={minValue}
                maxValue={maxValue}
                onMinChange={onMinChange}
                onMaxChange={onMaxChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div
      className="absolute h-[5.705px] right-0 top-[-0.7px] w-[10px]"
      data-name="Container"
      data-filter-arrow
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.70521">
        <g id="Container">
          <path d={svgPaths.p39cb1d00} fill="var(--fill-0, #222222)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Heading9() {
  return (
    <div
      className="h-[39px] relative shrink-0 w-full cursor-pointer select-none"
      data-name="Heading 5"
      data-filter-toggle="brands"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#222] text-[16px] top-[12px] whitespace-nowrap">
          <p className="leading-[24px]">Brands</p>
        </div>
        <Container57 />
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="h-[20.8px] leading-[0] relative shrink-0 w-[65.5px] whitespace-nowrap" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center left-0 text-[#505157] text-[14px] top-[10.4px]">
        <p className="leading-[24px]">{`Adidas `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Light',sans-serif] font-light justify-center left-[45.43px] text-[#909090] text-[12px] top-[11.2px]">
        <p className="leading-[16px]">(25)</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex flex-col items-start pl-[34px] py-[1.6px] relative size-full">
        <Link14 />
        <div className="absolute left-0 rounded-[3px] size-[18px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[7.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="h-[20.8px] leading-[0] relative shrink-0 w-[79.6px] whitespace-nowrap" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center left-0 text-[#505157] text-[14px] top-[10.4px]">
        <p className="leading-[24px]">{`Converse `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Light',sans-serif] font-light justify-center left-[59.54px] text-[#909090] text-[12px] top-[11.2px]">
        <p className="leading-[16px]">(26)</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex flex-col items-start pl-[34px] py-[1.6px] relative size-full">
        <Link15 />
        <div className="absolute left-0 rounded-[3px] size-[18px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[7.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="h-[20.8px] leading-[0] relative shrink-0 w-[51.91px] whitespace-nowrap" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center left-0 text-[#505157] text-[14px] top-[10.4px]">
        <p className="leading-[24px]">{`Nike `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Light',sans-serif] font-light justify-center left-[31.85px] text-[#909090] text-[12px] top-[11.2px]">
        <p className="leading-[16px]">(26)</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex flex-col items-start pl-[34px] py-[1.6px] relative size-full">
        <Link16 />
        <div className="absolute left-0 rounded-[3px] size-[18px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[7.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="h-[20.8px] leading-[0] relative shrink-0 w-[56.79px] whitespace-nowrap" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center left-0 text-[#505157] text-[14px] top-[10.4px]">
        <p className="leading-[24px]">{`Puma `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Light',sans-serif] font-light justify-center left-[36.6px] text-[#909090] text-[12px] top-[11.2px]">
        <p className="leading-[16px]">(24)</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex flex-col items-start pl-[34px] py-[1.6px] relative size-full">
        <Link17 />
        <div className="absolute left-0 rounded-[3px] size-[18px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[7.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="h-[20.8px] leading-[0] relative shrink-0 w-[68.44px] whitespace-nowrap" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center left-0 text-[#505157] text-[14px] top-[10.4px]">
        <p className="leading-[24px]">{`Reebok `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Jost:Light',sans-serif] font-light justify-center left-[48.25px] text-[#909090] text-[12px] top-[11.2px]">
        <p className="leading-[16px]">(24)</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex flex-col items-start pl-[34px] py-[1.6px] relative size-full">
        <Link18 />
        <div className="absolute left-0 rounded-[3px] size-[18px] top-px" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[7.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="List">
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
      <Item12 />
    </div>
  );
}

function Container59() {
  return (
    <div className="max-h-[300px] relative shrink-0 w-full" data-name="Container">
      <div className="max-h-[inherit] overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col items-start max-h-[inherit] pr-[17px] relative size-full">
          <List1 />
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div
      className="relative shrink-0 w-[251.9px]"
      data-name="Container"
      data-filter-content="brands"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <div className="absolute bg-[#ececec] h-px left-0 top-0 w-[234.9px]" data-name="Horizontal Divider" />
        <Container59 />
      </div>
    </div>
  );
}

function Border2({
  brands,
  counts,
  selected,
  onToggle,
}: {
  brands: string[];
  counts: Record<string, number>;
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="content-stretch flex flex-col items-start pb-[30.8px] pt-[15.8px] px-[28.8px] relative size-full">
        <Heading9 />
        <div
          className="relative shrink-0 w-[251.9px]"
          data-name="Container"
          data-filter-content="brands"
        >
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
            <div className="absolute bg-[#ececec] h-px left-0 top-0 w-[234.9px]" data-name="Horizontal Divider" />
            <div className="max-h-[300px] relative shrink-0 w-full" data-name="Container">
              <div className="max-h-[inherit] overflow-x-clip overflow-y-auto size-full">
                <div className="content-stretch flex flex-col items-start max-h-[inherit] pr-[17px] relative size-full">
                  <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="List">
                    {brands.map((brand) => (
                      <SidebarCheckbox
                        key={brand}
                        label={brand}
                        count={counts[brand] ?? 0}
                        checked={selected.includes(brand)}
                        onChange={() => onToggle(brand)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div
      className="absolute h-[5.705px] right-0 top-[-0.7px] w-[10px]"
      data-name="Container"
      data-filter-arrow
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.70521">
        <g id="Container">
          <path d={svgPaths.p39cb1d00} fill="var(--fill-0, #222222)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Heading10() {
  return (
    <div
      className="h-[39px] relative shrink-0 w-full cursor-pointer select-none"
      data-name="Heading 5"
      data-filter-toggle="ratings"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#222] text-[16px] top-[12px] whitespace-nowrap">
          <p className="leading-[24px]">Ratings</p>
        </div>
        <Container60 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[35.1px] right-0 top-0" data-name="Container">
      <div className="h-[13.795px] relative shrink-0 w-[72px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 13.7953">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, black)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[14.4px] overflow-clip relative shrink-0 w-[86.4px]" data-name="Container">
      <div className="absolute h-[13.795px] left-0 top-[0.6px] w-[72px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 13.7953">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </svg>
      </div>
      <Container64 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[14.4px] items-start pr-[4px] relative shrink-0 w-[90.4px] z-[3]" data-name="Margin">
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="flex flex-col font-['Jost:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#909090] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">(5)</p>
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute h-[5.742px] left-[-29px] top-[6.3px] w-[7.997px] z-[4]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
        </svg>
      </div>
      <Margin />
      <div className="absolute left-[-34px] rounded-[3px] size-[18px] top-[-1px] z-[2]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
      </div>
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[35.1px] right-[20.01%] top-0" data-name="Container">
      <div className="h-[13.795px] relative shrink-0 w-[72px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 13.7953">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, black)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[14.4px] overflow-clip relative shrink-0 w-[86.4px]" data-name="Container">
      <div className="absolute h-[13.795px] left-0 top-[0.6px] w-[72px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 13.7953">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </svg>
      </div>
      <Container67 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[14.4px] items-start pr-[4px] relative shrink-0 w-[90.4px] z-[3]" data-name="Margin">
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[11.76px] relative shrink-0 w-[9.816px] z-[1]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.81598 11.76">
        <g id="Container">
          <path d={svgPaths.p319f4e00} fill="var(--fill-0, #909090)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute h-[5.742px] left-[-29px] top-[6.3px] w-[7.997px] z-[4]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
        </svg>
      </div>
      <Margin1 />
      <div className="absolute left-[-34px] rounded-[3px] size-[18px] top-[-1px] z-[2]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
      </div>
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[49.5px] right-[40%] top-0" data-name="Container">
      <div className="h-[13.795px] relative shrink-0 w-[72px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 13.7953">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, black)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[14.4px] overflow-clip relative shrink-0 w-[86.4px]" data-name="Container">
      <div className="absolute h-[13.795px] left-0 top-[0.6px] w-[72px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 13.7953">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </svg>
      </div>
      <Container70 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[14.4px] items-start pr-[4px] relative shrink-0 w-[90.4px] z-[3]" data-name="Margin">
      <Container69 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="flex flex-col font-['Jost:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#909090] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">(2)</p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute h-[5.742px] left-[-29px] top-[6.3px] w-[7.997px] z-[4]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
        </svg>
      </div>
      <Margin2 />
      <div className="absolute left-[-34px] rounded-[3px] size-[18px] top-[-1px] z-[2]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
      </div>
      <Container71 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[63.9px] right-[60.01%] top-0" data-name="Container">
      <div className="h-[13.795px] relative shrink-0 w-[72px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 13.7953">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, black)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[14.4px] overflow-clip relative shrink-0 w-[86.4px]" data-name="Container">
      <div className="absolute h-[13.795px] left-0 top-[0.6px] w-[72px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 13.7953">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </svg>
      </div>
      <Container73 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[14.4px] items-start pr-[4px] relative shrink-0 w-[90.4px] z-[3]" data-name="Margin">
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <div className="flex flex-col font-['Jost:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#909090] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">(3)</p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute h-[5.742px] left-[-29px] top-[6.3px] w-[7.997px] z-[4]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
        </svg>
      </div>
      <Margin3 />
      <div className="absolute left-[-34px] rounded-[3px] size-[18px] top-[-1px] z-[2]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
      </div>
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[78.3px] right-[80.01%] top-0" data-name="Container">
      <div className="h-[13.795px] relative shrink-0 w-[72px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 13.7953">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, black)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[14.4px] overflow-clip relative shrink-0 w-[86.4px]" data-name="Container">
      <div className="absolute h-[13.795px] left-0 top-[0.6px] w-[72px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 13.7953">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </svg>
      </div>
      <Container76 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col h-[14.4px] items-start pr-[4px] relative shrink-0 w-[90.4px] z-[3]" data-name="Margin">
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[11.76px] relative shrink-0 w-[9.816px] z-[1]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.81598 11.76">
        <g id="Container">
          <path d={svgPaths.p319f4e00} fill="var(--fill-0, #909090)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute h-[5.742px] left-[-29px] top-[6.3px] w-[7.997px] z-[4]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
        </svg>
      </div>
      <Margin4 />
      <div className="absolute left-[-34px] rounded-[3px] size-[18px] top-[-1px] z-[2]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
      </div>
      <Container77 />
    </div>
  );
}

function List2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[22px] items-start pb-[2px] pl-[34px] pt-[4px] relative size-full">
        <ItemLink />
        <ItemLink1 />
        <ItemLink2 />
        <ItemLink3 />
        <ItemLink4 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="max-h-[300px] relative shrink-0 w-full" data-name="Container">
      <div className="max-h-[inherit] overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col items-start max-h-[inherit] pr-[17px] relative size-full">
          <List2 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div
      className="relative shrink-0 w-[251.9px]"
      data-name="Container"
      data-filter-content="ratings"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <div className="absolute bg-[#ececec] h-px left-0 top-0 w-[234.9px]" data-name="Horizontal Divider" />
        <Container62 />
      </div>
    </div>
  );
}

function Border3({
  ratings,
  counts,
  selected,
  onToggle,
}: {
  ratings: number[];
  counts: Record<number, number>;
  selected: number[];
  onToggle: (value: number) => void;
}) {
  return (
    <div className="relative rounded-[5px] shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="content-stretch flex flex-col items-start pb-[30.8px] pt-[15.8px] px-[28.8px] relative size-full">
        <Heading10 />
        <div
          className="relative shrink-0 w-[251.9px]"
          data-name="Container"
          data-filter-content="ratings"
        >
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
            <div className="absolute bg-[#ececec] h-px left-0 top-0 w-[234.9px]" data-name="Horizontal Divider" />
            <div className="max-h-[300px] relative shrink-0 w-full" data-name="Container">
              <div className="max-h-[inherit] overflow-x-clip overflow-y-auto size-full">
                <div className="content-stretch flex flex-col items-start max-h-[inherit] pr-[17px] relative size-full">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="List">
                    {ratings.map((rating) => (
                      <label
                        key={rating}
                        className="flex items-center gap-[12px] text-[#909090] text-[12px] cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selected.includes(rating)}
                          onChange={() => onToggle(rating)}
                          className="size-[18px] rounded-[3px] border border-[#c8c8c8] accent-[#0db22a]"
                        />
                        <RatingRow rating={rating} />
                        <span className="leading-[16px]">({counts[rating] ?? 0})</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div
      className="absolute h-[5.705px] right-0 top-[-0.7px] w-[10px]"
      data-name="Container"
      data-filter-arrow
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.70521">
        <g id="Container">
          <path d={svgPaths.p39cb1d00} fill="var(--fill-0, #222222)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Heading11() {
  return (
    <div
      className="absolute h-[39px] left-[28.8px] right-[28.8px] top-[15.8px] cursor-pointer select-none"
      data-name="Heading 5"
      data-filter-toggle="colors"
    >
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#222] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[24px]">Colors</p>
      </div>
      <Container78 />
    </div>
  );
}

function ItemLink5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[5.8px] p-px rounded-[9999px] size-[30.4px] top-[5.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[blue] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[47.8px] p-px rounded-[9999px] size-[30.4px] top-[5.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#8b4513] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[89.8px] p-px rounded-[9999px] size-[30.4px] top-[5.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#7fff00] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[131.8px] p-px rounded-[9999px] size-[30.4px] top-[5.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#dc143c] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[173.8px] p-px rounded-[9999px] size-[30.4px] top-[5.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#a9a9a9] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[5.8px] p-px rounded-[9999px] size-[30.4px] top-[47.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#ffd700] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[47.8px] p-px rounded-[9999px] size-[30.4px] top-[47.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#daa520] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[89.8px] p-px rounded-[9999px] size-[30.4px] top-[47.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#0f0] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[131.8px] p-px rounded-[9999px] size-[30.4px] top-[47.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#cd5c5c] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[173.8px] p-px rounded-[9999px] size-[30.4px] top-[47.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#e0ffff] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[5.8px] p-px rounded-[9999px] size-[30.4px] top-[89.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#90ee90] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[47.8px] p-px rounded-[9999px] size-[30.4px] top-[89.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#87cefa] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[89.8px] p-px rounded-[9999px] size-[30.4px] top-[89.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#303a83] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[131.8px] p-px rounded-[9999px] size-[30.4px] top-[89.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[orange] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[173.8px] p-px rounded-[9999px] size-[30.4px] top-[89.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#98fb98] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[5.8px] p-px rounded-[9999px] size-[30.4px] top-[131.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#cd853f] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[47.8px] p-px rounded-[9999px] size-[30.4px] top-[131.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[pink] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[89.8px] p-px rounded-[9999px] size-[30.4px] top-[131.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#dda0dd] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[131.8px] p-px rounded-[9999px] size-[30.4px] top-[131.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[purple] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[173.8px] p-px rounded-[9999px] size-[30.4px] top-[131.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#e70019] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[5.8px] p-px rounded-[9999px] size-[30.4px] top-[173.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#4169e1] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function ItemLink26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[47.8px] p-px rounded-[9999px] size-[30.4px] top-[173.8px]" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#9acd32] h-[28.4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function List3() {
  return (
    <div className="h-[210px] overflow-clip relative shrink-0 w-full" data-name="List">
      <ItemLink5 />
      <ItemLink6 />
      <ItemLink7 />
      <ItemLink8 />
      <ItemLink9 />
      <ItemLink10 />
      <ItemLink11 />
      <ItemLink12 />
      <ItemLink13 />
      <ItemLink14 />
      <ItemLink15 />
      <ItemLink16 />
      <ItemLink17 />
      <ItemLink18 />
      <ItemLink19 />
      <ItemLink20 />
      <ItemLink21 />
      <ItemLink22 />
      <ItemLink23 />
      <ItemLink24 />
      <ItemLink25 />
      <ItemLink26 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start max-h-[300px] overflow-x-clip overflow-y-auto pr-[17px] relative shrink-0 w-[263.9px]" data-name="Container">
      <List3 />
    </div>
  );
}

function Container79() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-[22.8px] pt-[26px] right-[11.8px] top-[54.8px]"
      data-name="Container"
      data-filter-content="colors"
    >
      <Container80 />
      <div className="absolute bg-[#ececec] h-px left-[6px] top-0 w-[234.9px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Border4({
  colors,
  counts,
  selected,
  onToggle,
}: {
  colors: Array<{ value: string; hex: string }>;
  counts: Record<string, number>;
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div
      className="h-[315.6px] relative rounded-[5px] shrink-0 w-full"
      data-name="Border"
      data-filter-section="colors"
    >
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Heading11 />
      <div
        className="absolute content-stretch flex flex-col items-start left-[22.8px] pt-[26px] right-[11.8px] top-[54.8px]"
        data-name="Container"
        data-filter-content="colors"
      >
        <div className="content-stretch flex flex-col items-start max-h-[300px] overflow-x-clip overflow-y-auto pr-[17px] relative shrink-0 w-[263.9px]">
          <div className="grid grid-cols-5 gap-[12px]">
            {colors.map((color) => (
              <ColorSwatch
                key={color.value}
                value={color.value}
                hex={color.hex}
                checked={selected.includes(color.value)}
                onToggle={() => onToggle(color.value)}
              />
            ))}
          </div>
        </div>
        <div className="absolute bg-[#ececec] h-px left-[6px] top-0 w-[234.9px]" data-name="Horizontal Divider" />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div
      className="absolute h-[5.705px] right-0 top-[-0.7px] w-[10px]"
      data-name="Container"
      data-filter-arrow
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.70521">
        <g id="Container">
          <path d={svgPaths.p39cb1d00} fill="var(--fill-0, #222222)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Heading12() {
  return (
    <div
      className="absolute h-[39px] left-[28.8px] right-[28.8px] top-[15.8px] cursor-pointer select-none"
      data-name="Heading 5"
      data-filter-toggle="sizes"
    >
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#222] text-[16px] top-[12px] whitespace-nowrap">
        <p className="leading-[24px]">Sizes</p>
      </div>
      <Container81 />
    </div>
  );
}

function ItemLink27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item → Link">
      <div className="content-stretch flex flex-col items-start pl-[34px] relative size-full">
        <div className="-translate-y-1/2 absolute left-0 rounded-[3px] size-[18px] top-1/2" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">35</p>
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[9.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ItemLink28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item → Link">
      <div className="content-stretch flex flex-col items-start pl-[34px] relative size-full">
        <div className="-translate-y-1/2 absolute left-0 rounded-[3px] size-[18px] top-1/2" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">36</p>
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[9.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ItemLink29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item → Link">
      <div className="content-stretch flex flex-col items-start pl-[34px] relative size-full">
        <div className="-translate-y-1/2 absolute left-0 rounded-[3px] size-[18px] top-1/2" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">37</p>
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[9.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ItemLink30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item → Link">
      <div className="content-stretch flex flex-col items-start pl-[34px] relative size-full">
        <div className="-translate-y-1/2 absolute left-0 rounded-[3px] size-[18px] top-1/2" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">38</p>
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[9.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ItemLink31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item → Link">
      <div className="content-stretch flex flex-col items-start pl-[34px] relative size-full">
        <div className="-translate-y-1/2 absolute left-0 rounded-[3px] size-[18px] top-1/2" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">39</p>
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[9.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ItemLink32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item → Link">
      <div className="content-stretch flex flex-col items-start pl-[34px] relative size-full">
        <div className="-translate-y-1/2 absolute left-0 rounded-[3px] size-[18px] top-1/2" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">40</p>
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[9.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ItemLink33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item → Link">
      <div className="content-stretch flex flex-col items-start pl-[34px] relative size-full">
        <div className="-translate-y-1/2 absolute left-0 rounded-[3px] size-[18px] top-1/2" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">41</p>
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[9.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ItemLink34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item → Link">
      <div className="content-stretch flex flex-col items-start pl-[34px] relative size-full">
        <div className="-translate-y-1/2 absolute left-0 rounded-[3px] size-[18px] top-1/2" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">42</p>
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[9.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ItemLink35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item → Link">
      <div className="content-stretch flex flex-col items-start pl-[34px] relative size-full">
        <div className="-translate-y-1/2 absolute left-0 rounded-[3px] size-[18px] top-1/2" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">43</p>
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[9.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ItemLink36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item → Link">
      <div className="content-stretch flex flex-col items-start pl-[34px] relative size-full">
        <div className="-translate-y-1/2 absolute left-0 rounded-[3px] size-[18px] top-1/2" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[14px] whitespace-nowrap">
          <p className="leading-[24px]">44</p>
        </div>
        <div className="absolute h-[5.742px] left-[5px] top-[9.3px] w-[7.997px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p2d26bb00} fill="var(--fill-0, white)" id="Symbol" opacity="0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function List4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-0 pl-[6px] pt-[4px] right-[22.6px] top-0" data-name="List">
      <ItemLink27 />
      <ItemLink28 />
      <ItemLink29 />
      <ItemLink30 />
      <ItemLink31 />
      <ItemLink32 />
      <ItemLink33 />
      <ItemLink34 />
      <ItemLink35 />
      <ItemLink36 />
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[300px] max-h-[300px] overflow-x-clip overflow-y-auto relative shrink-0 w-[263.9px]" data-name="Container">
      <List4 />
    </div>
  );
}

function Container82() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-[22.8px] pt-[26px] right-[11.8px] top-[54.8px]"
      data-name="Container"
      data-filter-content="sizes"
    >
      <div className="absolute bg-[#ececec] h-px left-[6px] top-0 w-[234.9px]" data-name="Horizontal Divider" />
      <Container83 />
    </div>
  );
}

function Border5({
  sizes,
  counts,
  selected,
  onToggle,
}: {
  sizes: string[];
  counts: Record<string, number>;
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="h-[405.6px] relative rounded-[5px] shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Heading12 />
      <div
        className="absolute content-stretch flex flex-col items-start left-[22.8px] pt-[26px] right-[11.8px] top-[54.8px]"
        data-name="Container"
        data-filter-content="sizes"
      >
        <div className="absolute bg-[#ececec] h-px left-[6px] top-0 w-[234.9px]" data-name="Horizontal Divider" />
        <div className="h-[300px] max-h-[300px] overflow-x-clip overflow-y-auto relative shrink-0 w-[263.9px]">
          <div className="flex flex-col gap-[14px] pl-[6px] pt-[4px]">
            {sizes.map((size) => (
              <SidebarCheckbox
                key={size}
                label={size}
                count={counts[size] ?? 0}
                checked={selected.includes(size)}
                onChange={() => onToggle(size)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function handleFilterClick(event: { target: EventTarget | null; currentTarget: HTMLDivElement }) {
  const target = event.target as HTMLElement | null;
  if (!target) return;

  const toggle = target.closest("[data-filter-toggle]") as HTMLElement | null;
  if (toggle) {
    const section = toggle.getAttribute("data-filter-toggle");
    if (!section) return;

    const content = event.currentTarget.querySelector(`[data-filter-content="${section}"]`) as HTMLElement | null;
    if (content) {
      const isHidden = content.classList.toggle("hidden");
      const arrow = toggle.querySelector("[data-filter-arrow]") as HTMLElement | null;
      if (arrow) {
        arrow.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
      }
    }
    return;
  }

  return;
}

function Container33({
  filters,
  setFilters,
  priceBounds,
}: {
  filters: FilterState;
  setFilters: (updater: (prev: FilterState) => FilterState) => void;
  priceBounds: { minPrice: number; maxPrice: number };
}) {
  const brandOptions = Array.from(new Set(products.map((product) => product.brand))).sort();
  const sizeOptions = Array.from(
    new Set(products.flatMap((product) => product.sizes))
  ).sort((a, b) => Number(a) - Number(b));
  const categoryCounts = buildCountMap(products, (product) => product.category);
  const brandCounts = buildCountMap(products, (product) => product.brand);
  const sizeCounts = products.reduce<Record<string, number>>((acc, product) => {
    product.sizes.forEach((size) => {
      acc[size] = (acc[size] ?? 0) + 1;
    });
    return acc;
  }, {});
  const colorCounts = products.reduce<Record<string, number>>((acc, product) => {
    product.colors.forEach((color) => {
      acc[color] = (acc[color] ?? 0) + 1;
    });
    return acc;
  }, {});
  const ratingOptions = [5, 4, 3, 2, 1];
  const ratingCounts = ratingOptions.reduce<Record<number, number>>((acc, rating) => {
    acc[rating] = products.filter((product) => product.rating >= rating).length;
    return acc;
  }, {});

  return (
    <div className="relative self-stretch shrink-0 w-[322.5px]" data-name="Container">
      <div
        className="content-stretch flex flex-col gap-[30px] items-start pr-[30px] py-[100px] relative size-full"
        onClick={handleFilterClick}
      >
        <Heading6 />
        <Border
          categories={categoryOptions}
          counts={categoryCounts}
          selected={filters.selectedCategories}
          onToggle={(value) =>
            setFilters((prev) => ({
              ...prev,
              selectedCategories: toggleValue(prev.selectedCategories, value),
            }))
          }
        />
        <Border1
          minLimit={priceBounds.minPrice}
          maxLimit={priceBounds.maxPrice}
          minValue={filters.minSelectedPrice}
          maxValue={filters.maxSelectedPrice}
          onMinChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              minSelectedPrice: value,
            }))
          }
          onMaxChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              maxSelectedPrice: value,
            }))
          }
        />
        <Border2
          brands={brandOptions}
          counts={brandCounts}
          selected={filters.selectedBrands}
          onToggle={(value) =>
            setFilters((prev) => ({
              ...prev,
              selectedBrands: toggleValue(prev.selectedBrands, value),
            }))
          }
        />
        <Border3
          ratings={ratingOptions}
          counts={ratingCounts}
          selected={filters.selectedRatings}
          onToggle={(value) =>
            setFilters((prev) => ({
              ...prev,
              selectedRatings: toggleNumber(prev.selectedRatings, value),
            }))
          }
        />
        <Border4
          colors={colorOptions}
          counts={colorCounts}
          selected={filters.selectedColors}
          onToggle={(value) =>
            setFilters((prev) => ({
              ...prev,
              selectedColors: toggleValue(prev.selectedColors, value),
            }))
          }
        />
        <Border5
          sizes={sizeOptions}
          counts={sizeCounts}
          selected={filters.selectedSizes}
          onToggle={(value) =>
            setFilters((prev) => ({
              ...prev,
              selectedSizes: toggleValue(prev.selectedSizes, value),
            }))
          }
        />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="Background">
          <rect fill="var(--fill-0, #0DB22A)" height="46" rx="4" width="46" />
          <path d={svgPaths.p2693d300} fill="var(--fill-0, white)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col h-[46px] items-start pr-[6px] relative shrink-0 w-[52px]" data-name="Margin">
      <Background1 />
    </div>
  );
}

function Background2() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="Background">
          <rect fill="var(--fill-0, black)" height="46" rx="4" width="46" />
          <path d={svgPaths.p28fa9e80} fill="var(--fill-0, white)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col h-[46px] items-start pr-[6px] relative shrink-0 w-[52px]" data-name="Margin">
      <Background2 />
    </div>
  );
}

function Background3() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="Background">
          <rect fill="var(--fill-0, black)" height="46" rx="4" width="46" />
          <path d={svgPaths.p1ded0280} fill="var(--fill-0, white)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Margin6 />
      <Margin7 />
      <Background3 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[28px] relative shrink-0" data-name="Margin">
      <Container86 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Showing 12 of 27 results</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-0.002px] relative shrink-0" data-name="Container">
      <Margin5 />
      <Container87 />
    </div>
  );
}

function Container89() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Default sorting</p>
        </div>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute h-[5.595px] right-0 top-[-0.6px] w-[30px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 5.59549">
        <g id="Container">
          <path d={svgPaths.p6a99000} fill="var(--fill-0, #222222)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Margin9() {
  return (
    <div className="h-[10px] min-w-[30px] relative shrink-0 w-[50.737px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container90 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white content-stretch flex gap-[0.002px] h-[46px] items-center min-w-[165px] pl-[20.8px] pr-[10.8px] py-[5.8px] relative rounded-[3px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Container89 />
      <Margin9 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <BackgroundBorder3 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="flex-[1_0_0] min-w-[165px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[485.362px] relative size-full">
          <Container88 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#f2f2f2] content-stretch flex items-center left-0 p-[7px] right-0 rounded-[4px] top-[100px]" data-name="Background">
      <Container85 />
      <Margin8 />
    </div>
  );
}

function AirJordanDmp1Retro() {
  return (
    <div className="aspect-[302.5/353.92999267578125] relative shrink-0 w-full" data-name="Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAirJordanDmp1Retro} />
      </div>
    </div>
  );
}

function SecondImageOfAirJordanDmp1Retro() {
  return (
    <div className="absolute h-[353.93px] left-0 max-w-[1536px] opacity-0 top-0 w-[302.5px]" data-name="Second image of Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[363.63%] left-[-131.82%] max-w-none top-[-131.82%] w-[363.64%]" src={imgSecondImageOfAirJordanDmp1Retro} />
      </div>
    </div>
  );
}

function Link19() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <AirJordanDmp1Retro />
      <SecondImageOfAirJordanDmp1Retro />
    </RouterLink>
  );
}

function Container95() {
  return (
    <div className="absolute bottom-[15px] content-stretch flex flex-col items-center justify-center pb-[40px] right-[15px] w-[40px]" data-name="Container">
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link19 />
      <Container95 />
    </div>
  );
}

function Link20() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="leading-[21px]">Air Jordan DMP 1 Retro</p>
      </div>
    </RouterLink>
  );
}

function ImgRated0OutOf() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-[86.4px] z-[2]" data-name="Img - Rated 0 out of 5">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.4 14.4">
        <g id="Img - Rated 0 out of 5">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 z-[1]" data-name="Margin">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5b5b5] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">(0)</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Container">
      <ImgRated0OutOf />
      <Margin10 />
    </div>
  );
}

function Container98() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[3.4px] pl-[3px] pr-[249.19px] pt-[2.6px] relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#232630] text-[14px] w-full">
          <p className="leading-[14px]">$84.00</p>
        </div>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Link20 />
      <Container97 />
      <Container98 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container94 />
      <Container96 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <div className="absolute bg-white h-[500.93px] left-[-15px] opacity-0 rounded-[3px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] top-[-15px] w-[332.5px]" data-name="Background+Shadow" />
      <Container93 />
    </div>
  );
}

function AirJordanDmp1Retro1() {
  return (
    <div className="aspect-[302.5/353.92999267578125] relative shrink-0 w-full" data-name="Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAirJordanDmp1Retro1} />
      </div>
    </div>
  );
}

function SecondImageOfAirJordanDmp1Retro1() {
  return (
    <div className="absolute h-[353.93px] left-0 max-w-[1536px] opacity-0 top-0 w-[302.5px]" data-name="Second image of Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[363.63%] left-[-131.82%] max-w-none top-[-131.82%] w-[363.64%]" src={imgSecondImageOfAirJordanDmp1Retro1} />
      </div>
    </div>
  );
}

function Link21() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <AirJordanDmp1Retro1 />
      <SecondImageOfAirJordanDmp1Retro1 />
    </RouterLink>
  );
}

function Container102() {
  return (
    <div className="absolute bottom-[15px] content-stretch flex flex-col items-center justify-center pb-[40px] right-[15px] w-[40px]" data-name="Container">
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link21 />
      <Container102 />
    </div>
  );
}

function Link22() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="leading-[21px]">Calvin Klein Jeans</p>
      </div>
    </RouterLink>
  );
}

function ImgRated0OutOf1() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-[86.4px] z-[2]" data-name="Img - Rated 0 out of 5">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.4 14.4">
        <g id="Img - Rated 0 out of 5">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 z-[1]" data-name="Margin">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5b5b5] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">(0)</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Container">
      <ImgRated0OutOf1 />
      <Margin11 />
    </div>
  );
}

function Container105() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[3.4px] pl-[3px] pr-[249.1px] pt-[2.6px] relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#232630] text-[14px] w-full">
          <p className="leading-[14px]">$90.00</p>
        </div>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Link22 />
      <Container104 />
      <Container105 />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container101 />
      <Container103 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <div className="absolute bg-white h-[500.93px] left-[-15px] opacity-0 rounded-[3px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] top-[-15px] w-[332.5px]" data-name="Background+Shadow" />
      <Container100 />
    </div>
  );
}

function AirJordanDmp1Retro2() {
  return (
    <div className="aspect-[302.5/353.92999267578125] relative shrink-0 w-full" data-name="Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAirJordanDmp1Retro2} />
      </div>
    </div>
  );
}

function SecondImageOfAirJordanDmp1Retro2() {
  return (
    <div className="absolute h-[353.93px] left-0 max-w-[1536px] opacity-0 top-0 w-[302.5px]" data-name="Second image of Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[363.63%] left-[-131.82%] max-w-none top-[-131.82%] w-[363.64%]" src={imgSecondImageOfAirJordanDmp1Retro} />
      </div>
    </div>
  );
}

function Link23() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <AirJordanDmp1Retro2 />
      <SecondImageOfAirJordanDmp1Retro2 />
    </RouterLink>
  );
}

function Container109() {
  return (
    <div className="absolute bottom-[15px] content-stretch flex flex-col items-center justify-center pb-[40px] right-[15px] w-[40px]" data-name="Container">
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link23 />
      <Container109 />
    </div>
  );
}

function Link24() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="leading-[21px]">{`Canvas Men's Sneakers`}</p>
      </div>
    </RouterLink>
  );
}

function ImgRated0OutOf2() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-[86.4px] z-[2]" data-name="Img - Rated 0 out of 5">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.4 14.4">
        <g id="Img - Rated 0 out of 5">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 z-[1]" data-name="Margin">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5b5b5] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">(0)</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Container">
      <ImgRated0OutOf2 />
      <Margin12 />
    </div>
  );
}

function Container112() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[3.4px] pl-[3px] pr-[249.59px] pt-[2.6px] relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#232630] text-[14px] w-full">
          <p className="leading-[14px]">$86.00</p>
        </div>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Link24 />
      <Container111 />
      <Container112 />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container108 />
      <Container110 />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <div className="absolute bg-white h-[500.93px] left-[-15px] opacity-0 rounded-[3px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] top-[-15px] w-[332.5px]" data-name="Background+Shadow" />
      <Container107 />
    </div>
  );
}

function AirJordanDmp1Retro3() {
  return (
    <div className="aspect-[302.5/353.92999267578125] relative shrink-0 w-full" data-name="Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAirJordanDmp1Retro3} />
      </div>
    </div>
  );
}

function SecondImageOfAirJordanDmp1Retro3() {
  return (
    <div className="absolute h-[353.93px] left-0 max-w-[1536px] opacity-0 top-0 w-[302.5px]" data-name="Second image of Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[363.63%] left-[-131.82%] max-w-none top-[-131.82%] w-[363.64%]" src={imgSecondImageOfAirJordanDmp1Retro2} />
      </div>
    </div>
  );
}

function Link25() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <AirJordanDmp1Retro3 />
      <SecondImageOfAirJordanDmp1Retro3 />
    </RouterLink>
  );
}

function Container116() {
  return (
    <div className="absolute bottom-[15px] content-stretch flex flex-col items-center justify-center pb-[40px] right-[15px] w-[40px]" data-name="Container">
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link25 />
      <Container116 />
    </div>
  );
}

function Link26() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="leading-[21px]">Converse Run Star Hike</p>
      </div>
    </RouterLink>
  );
}

function ImgRated0OutOf3() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-[86.4px] z-[2]" data-name="Img - Rated 0 out of 5">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.4 14.4">
        <g id="Img - Rated 0 out of 5">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 z-[1]" data-name="Margin">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5b5b5] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">(1)</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Container">
      <ImgRated0OutOf3 />
      <Margin13 />
    </div>
  );
}

function Container119() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[3.4px] pl-[3px] pr-[250.39px] pt-[2.6px] relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#232630] text-[14px] w-full">
          <p className="leading-[14px]">$88.00</p>
        </div>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Link26 />
      <Container118 />
      <Container119 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col gap-[23.99px] items-start relative shrink-0 w-full" data-name="Container">
      <Container115 />
      <Container117 />
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <div className="absolute bg-white h-[500.93px] left-[-15px] opacity-0 rounded-[3px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] top-[-15px] w-[332.5px]" data-name="Background+Shadow" />
      <Container114 />
    </div>
  );
}

function AirJordanDmp1Retro4() {
  return (
    <div className="aspect-[302.5/353.92999267578125] relative shrink-0 w-full" data-name="Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAirJordanDmp1Retro4} />
      </div>
    </div>
  );
}

function SecondImageOfAirJordanDmp1Retro4() {
  return (
    <div className="absolute h-[353.93px] left-0 max-w-[1536px] opacity-0 top-0 w-[302.5px]" data-name="Second image of Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[363.63%] left-[-131.82%] max-w-none top-[-131.82%] w-[363.64%]" src={imgSecondImageOfAirJordanDmp1Retro3} />
      </div>
    </div>
  );
}

function Link27() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <AirJordanDmp1Retro4 />
      <SecondImageOfAirJordanDmp1Retro4 />
    </RouterLink>
  );
}

function Container123() {
  return (
    <div className="absolute bottom-[15px] content-stretch flex flex-col items-center justify-center pb-[40px] right-[15px] w-[40px]" data-name="Container">
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link27 />
      <Container123 />
    </div>
  );
}

function Link28() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="leading-[21px]">Converse Run Star Motion</p>
      </div>
    </RouterLink>
  );
}

function ImgRated0OutOf4() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-[86.4px] z-[2]" data-name="Img - Rated 0 out of 5">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.4 14.4">
        <g id="Img - Rated 0 out of 5">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 z-[1]" data-name="Margin">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5b5b5] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">(2)</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Container">
      <ImgRated0OutOf4 />
      <Margin14 />
    </div>
  );
}

function Container126() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[3.4px] pl-[3px] pr-[250.39px] pt-[2.6px] relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#232630] text-[14px] w-full">
          <p className="leading-[14px]">$88.00</p>
        </div>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Link28 />
      <Container125 />
      <Container126 />
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col gap-[23.99px] items-start relative shrink-0 w-full" data-name="Container">
      <Container122 />
      <Container124 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <div className="absolute bg-white h-[500.93px] left-[-15px] opacity-0 rounded-[3px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] top-[-15px] w-[332.5px]" data-name="Background+Shadow" />
      <Container121 />
    </div>
  );
}

function AirJordanDmp1Retro5() {
  return (
    <div className="aspect-[302.5/353.92999267578125] relative shrink-0 w-full" data-name="Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAirJordanDmp1Retro5} />
      </div>
    </div>
  );
}

function SecondImageOfAirJordanDmp1Retro5() {
  return (
    <div className="absolute h-[353.93px] left-0 max-w-[1536px] opacity-0 top-0 w-[302.5px]" data-name="Second image of Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[363.63%] left-[-131.82%] max-w-none top-[-131.82%] w-[363.64%]" src={imgSecondImageOfAirJordanDmp1Retro4} />
      </div>
    </div>
  );
}

function Link29() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <AirJordanDmp1Retro5 />
      <SecondImageOfAirJordanDmp1Retro5 />
    </RouterLink>
  );
}

function Container130() {
  return (
    <div className="absolute bottom-[15px] content-stretch flex flex-col items-start right-[15px] w-[40px]" data-name="Container">
      <div className="h-[45px] relative shrink-0 w-full" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link29 />
      <Container130 />
    </div>
  );
}

function Link30() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="leading-[21px]">Jordan Luka 1 Basketball</p>
      </div>
    </RouterLink>
  );
}

function ImgRated0OutOf5() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-[86.4px] z-[2]" data-name="Img - Rated 0 out of 5">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.4 14.4">
        <g id="Img - Rated 0 out of 5">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Margin15() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 z-[1]" data-name="Margin">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5b5b5] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">(0)</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Container">
      <ImgRated0OutOf5 />
      <Margin15 />
    </div>
  );
}

function Container133() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[3.4px] pl-[3px] pr-[249.19px] pt-[2.6px] relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#7c7c7c] text-[14px] w-full">
          <p>
            <span className="leading-[14px]">$</span>
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[14px] line-through">90.00</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Link30 />
      <Container132 />
      <Container133 />
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col gap-[23.99px] items-start relative shrink-0 w-full" data-name="Container">
      <Container129 />
      <Container131 />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <div className="absolute bg-white h-[500.93px] left-[-15px] opacity-0 rounded-[3px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] top-[-15px] w-[332.5px]" data-name="Background+Shadow" />
      <Container128 />
    </div>
  );
}

function AirJordanDmp1Retro6() {
  return (
    <div className="aspect-[302.5/353.92999267578125] relative shrink-0 w-full" data-name="Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAirJordanDmp1Retro6} />
      </div>
    </div>
  );
}

function SecondImageOfAirJordanDmp1Retro6() {
  return (
    <div className="absolute h-[353.93px] left-0 max-w-[1536px] opacity-0 top-0 w-[302.5px]" data-name="Second image of Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[363.63%] left-[-131.82%] max-w-none top-[-131.82%] w-[363.64%]" src={imgSecondImageOfAirJordanDmp1Retro5} />
      </div>
    </div>
  );
}

function Link31() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <AirJordanDmp1Retro6 />
      <SecondImageOfAirJordanDmp1Retro6 />
    </RouterLink>
  );
}

function Container137() {
  return (
    <div className="absolute bottom-[15px] content-stretch flex flex-col items-start right-[15px] w-[40px]" data-name="Container">
      <div className="h-[45px] relative shrink-0 w-full" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link31 />
      <Container137 />
    </div>
  );
}

function Link32() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="leading-[21px]">K1X Men H1KE Boot</p>
      </div>
    </RouterLink>
  );
}

function ImgRated0OutOf6() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-[86.4px] z-[2]" data-name="Img - Rated 0 out of 5">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.4 14.4">
        <g id="Img - Rated 0 out of 5">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Margin16() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 z-[1]" data-name="Margin">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5b5b5] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">(2)</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Container">
      <ImgRated0OutOf6 />
      <Margin16 />
    </div>
  );
}

function Container140() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[3.4px] pl-[3px] pr-[249.19px] pt-[2.6px] relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#7c7c7c] text-[14px] w-full">
          <p>
            <span className="leading-[14px]">$</span>
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[14px] line-through">120.00</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Link32 />
      <Container139 />
      <Container140 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container136 />
      <Container138 />
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <div className="absolute bg-white h-[500.93px] left-[-15px] opacity-0 rounded-[3px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] top-[-15px] w-[332.5px]" data-name="Background+Shadow" />
      <Container135 />
    </div>
  );
}

function AirJordanDmp1Retro7() {
  return (
    <div className="aspect-[302.5/353.92999267578125] relative shrink-0 w-full" data-name="Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAirJordanDmp1Retro7} />
      </div>
    </div>
  );
}

function SecondImageOfAirJordanDmp1Retro7() {
  return (
    <div className="absolute h-[353.93px] left-0 max-w-[1536px] opacity-0 top-0 w-[302.5px]" data-name="Second image of Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[363.63%] left-[-131.82%] max-w-none top-[-131.82%] w-[363.64%]" src={imgSecondImageOfAirJordanDmp1Retro6} />
      </div>
    </div>
  );
}

function Link33() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <AirJordanDmp1Retro7 />
      <SecondImageOfAirJordanDmp1Retro7 />
    </RouterLink>
  );
}

function Container144() {
  return (
    <div className="absolute bottom-[15px] content-stretch flex flex-col items-center justify-center pb-[40px] right-[15px] w-[40px]" data-name="Container">
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link33 />
      <Container144 />
    </div>
  );
}

function Link34() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="leading-[21px]">{`K1X Men's Philly Boot`}</p>
      </div>
    </RouterLink>
  );
}

function ImgRated0OutOf7() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-[86.4px] z-[2]" data-name="Img - Rated 0 out of 5">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.4 14.4">
        <g id="Img - Rated 0 out of 5">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Margin17() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 z-[1]" data-name="Margin">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5b5b5] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">(1)</p>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Container">
      <ImgRated0OutOf7 />
      <Margin17 />
    </div>
  );
}

function Container147() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[3.4px] pl-[3px] pr-[242.77px] pt-[2.6px] relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#232630] text-[14px] w-full">
          <p className="leading-[14px]">$108.00</p>
        </div>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Link34 />
      <Container146 />
      <Container147 />
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container143 />
      <Container145 />
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <div className="absolute bg-white h-[500.93px] left-[-15px] opacity-0 rounded-[3px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] top-[-15px] w-[332.5px]" data-name="Background+Shadow" />
      <Container142 />
    </div>
  );
}

function AirJordanDmp1Retro8() {
  return (
    <div className="aspect-[302.5/353.92999267578125] relative shrink-0 w-full" data-name="Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAirJordanDmp1Retro8} />
      </div>
    </div>
  );
}

function SecondImageOfAirJordanDmp1Retro8() {
  return (
    <div className="absolute h-[353.93px] left-0 max-w-[1536px] opacity-0 top-0 w-[302.5px]" data-name="Second image of Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[363.63%] left-[-131.82%] max-w-none top-[-131.82%] w-[363.64%]" src={imgSecondImageOfAirJordanDmp1Retro} />
      </div>
    </div>
  );
}

function Link35() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <AirJordanDmp1Retro8 />
      <SecondImageOfAirJordanDmp1Retro8 />
    </RouterLink>
  );
}

function Container151() {
  return (
    <div className="absolute bottom-[15px] content-stretch flex flex-col items-start right-[15px] w-[40px]" data-name="Container">
      <div className="h-[45px] relative shrink-0 w-full" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link35 />
      <Container151 />
    </div>
  );
}

function Link36() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="leading-[21px]">Luka Doncic x Air Jordan</p>
      </div>
    </RouterLink>
  );
}

function ImgRated0OutOf8() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-[86.4px] z-[2]" data-name="Img - Rated 0 out of 5">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.4 14.4">
        <g id="Img - Rated 0 out of 5">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Margin18() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 z-[1]" data-name="Margin">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5b5b5] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">(1)</p>
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Container">
      <ImgRated0OutOf8 />
      <Margin18 />
    </div>
  );
}

function Container154() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[3.4px] pl-[3px] pr-[249.19px] pt-[2.6px] relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#7c7c7c] text-[14px] w-full">
          <p>
            <span className="leading-[14px]">$</span>
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[14px] line-through">140.00</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Link36 />
      <Container153 />
      <Container154 />
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container150 />
      <Container152 />
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <div className="absolute bg-white h-[500.93px] left-[-15px] opacity-0 rounded-[3px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] top-[-15px] w-[332.5px]" data-name="Background+Shadow" />
      <Container149 />
    </div>
  );
}

function AirJordanDmp1Retro9() {
  return (
    <div className="aspect-[302.5/353.92999267578125] relative shrink-0 w-full" data-name="Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAirJordanDmp1Retro9} />
      </div>
    </div>
  );
}

function SecondImageOfAirJordanDmp1Retro9() {
  return (
    <div className="absolute h-[353.93px] left-0 max-w-[1536px] opacity-0 top-0 w-[302.5px]" data-name="Second image of Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[363.63%] left-[-131.82%] max-w-none top-[-131.82%] w-[363.64%]" src={imgSecondImageOfAirJordanDmp1Retro} />
      </div>
    </div>
  );
}

function Link37() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <AirJordanDmp1Retro9 />
      <SecondImageOfAirJordanDmp1Retro9 />
    </RouterLink>
  );
}

function Container158() {
  return (
    <div className="absolute bottom-[15px] content-stretch flex flex-col items-center justify-center pb-[40px] right-[15px] w-[40px]" data-name="Container">
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link37 />
      <Container158 />
    </div>
  );
}

function Link38() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="leading-[21px]">{`Men's Air Jordan 14 Retro`}</p>
      </div>
    </RouterLink>
  );
}

function ImgRated0OutOf9() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-[86.4px] z-[2]" data-name="Img - Rated 0 out of 5">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.4 14.4">
        <g id="Img - Rated 0 out of 5">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Margin19() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 z-[1]" data-name="Margin">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5b5b5] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">(2)</p>
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Container">
      <ImgRated0OutOf9 />
      <Margin19 />
    </div>
  );
}

function Container161() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[3.4px] pl-[3px] pr-[242.31px] pt-[2.6px] relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#232630] text-[14px] w-full">
          <p className="leading-[14px]">$150.00</p>
        </div>
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Link38 />
      <Container160 />
      <Container161 />
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex flex-col gap-[23.99px] items-start relative shrink-0 w-full" data-name="Container">
      <Container157 />
      <Container159 />
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <div className="absolute bg-white h-[500.93px] left-[-15px] opacity-0 rounded-[3px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] top-[-15px] w-[332.5px]" data-name="Background+Shadow" />
      <Container156 />
    </div>
  );
}

function AirJordanDmp1Retro10() {
  return (
    <div className="aspect-[302.5/353.92999267578125] relative shrink-0 w-full" data-name="Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAirJordanDmp1Retro10} />
      </div>
    </div>
  );
}

function SecondImageOfAirJordanDmp1Retro10() {
  return (
    <div className="absolute h-[353.93px] left-0 max-w-[1536px] opacity-0 top-0 w-[302.5px]" data-name="Second image of Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[363.63%] left-[-131.82%] max-w-none top-[-131.82%] w-[363.64%]" src={imgSecondImageOfAirJordanDmp1Retro7} />
      </div>
    </div>
  );
}

function Link39() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <AirJordanDmp1Retro10 />
      <SecondImageOfAirJordanDmp1Retro10 />
    </RouterLink>
  );
}

function Container165() {
  return (
    <div className="absolute bottom-[15px] content-stretch flex flex-col items-start right-[15px] w-[40px]" data-name="Container">
      <div className="h-[45px] relative shrink-0 w-full" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link39 />
      <Container165 />
    </div>
  );
}

function Link40() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="leading-[21px]">{`Men's Air Jordan 2 Retro`}</p>
      </div>
    </RouterLink>
  );
}

function ImgRated0OutOf10() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-[86.4px] z-[2]" data-name="Img - Rated 0 out of 5">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.4 14.4">
        <g id="Img - Rated 0 out of 5">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Margin20() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 z-[1]" data-name="Margin">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5b5b5] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">(0)</p>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Container">
      <ImgRated0OutOf10 />
      <Margin20 />
    </div>
  );
}

function Container168() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[3.4px] pl-[3px] pr-[249.19px] pt-[2.6px] relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#7c7c7c] text-[14px] w-full">
          <p>
            <span className="leading-[14px]">$</span>
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[14px] line-through">170.00</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Link40 />
      <Container167 />
      <Container168 />
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex flex-col gap-[23.99px] items-start relative shrink-0 w-full" data-name="Container">
      <Container164 />
      <Container166 />
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <div className="absolute bg-white h-[500.93px] left-[-15px] opacity-0 rounded-[3px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] top-[-15px] w-[332.5px]" data-name="Background+Shadow" />
      <Container163 />
    </div>
  );
}

function AirJordanDmp1Retro11() {
  return (
    <div className="aspect-[302.5/353.92999267578125] relative shrink-0 w-full" data-name="Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAirJordanDmp1Retro11} />
      </div>
    </div>
  );
}

function SecondImageOfAirJordanDmp1Retro11() {
  return (
    <div className="absolute h-[353.93px] left-0 max-w-[1536px] opacity-0 top-0 w-[302.5px]" data-name="Second image of Air Jordan DMP 1 Retro">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[363.63%] left-[-131.82%] max-w-none top-[-131.82%] w-[363.64%]" src={imgSecondImageOfAirJordanDmp1Retro8} />
      </div>
    </div>
  );
}

function Link41() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <AirJordanDmp1Retro11 />
      <SecondImageOfAirJordanDmp1Retro11 />
    </RouterLink>
  );
}

function Container172() {
  return (
    <div className="absolute bottom-[15px] content-stretch flex flex-col items-start right-[15px] w-[40px]" data-name="Container">
      <div className="h-[45px] relative shrink-0 w-full" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
      <div className="h-[45px] relative shrink-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function Container171() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link41 />
      <Container172 />
    </div>
  );
}

function Link42() {
  return (
    <RouterLink
      to="/product/1"
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="leading-[21px]">{`Men's Jordan Max Aura`}</p>
      </div>
    </RouterLink>
  );
}

function ImgRated0OutOf11() {
  return (
    <div className="h-[14.4px] relative shrink-0 w-[86.4px] z-[2]" data-name="Img - Rated 0 out of 5">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.4 14.4">
        <g id="Img - Rated 0 out of 5">
          <path d={svgPaths.p1caefc00} fill="var(--fill-0, #C3C3C3)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function Margin21() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 z-[1]" data-name="Margin">
      <div className="flex flex-col font-['Jost:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5b5b5] text-[12px] whitespace-nowrap">
        <p className="leading-[24px]">(0)</p>
      </div>
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Container">
      <ImgRated0OutOf11 />
      <Margin21 />
    </div>
  );
}

function Container175() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[3.4px] pl-[3px] pr-[249.19px] pt-[2.6px] relative size-full">
        <div className="flex flex-col font-['Jost:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#7c7c7c] text-[14px] w-full">
          <p>
            <span className="leading-[14px]">$</span>
            <span className="[text-decoration-skip-ink:none] decoration-solid leading-[14px] line-through">199.00</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Container">
      <Link42 />
      <Container174 />
      <Container175 />
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex flex-col gap-[23.99px] items-start relative shrink-0 w-full" data-name="Container">
      <Container171 />
      <Container173 />
    </div>
  );
}

function Container169() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <div className="absolute bg-white h-[500.93px] left-[-15px] opacity-0 rounded-[3px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] top-[-15px] w-[332.5px]" data-name="Background+Shadow" />
      <Container170 />
    </div>
  );
}

function Container91({
  filters,
  sortBy,
}: {
  filters: FilterState;
  sortBy: string;
}) {
  return (
    <div className="absolute h-[2399.7px] left-[-25px] overflow-clip right-[-25px] top-[-23px]" data-name="Container">
      <div className="absolute inset-[213px_10px_182.99px_10px]" data-name="Sản phẩm">
        <ProductGrid filters={filters} sortBy={sortBy} />
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 pt-[24px] right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[12px] text-center whitespace-nowrap">
        <p>
          <span className="leading-[16px]">{`Showing `}</span>
          <span className="font-['Jost:Bold',sans-serif] font-bold leading-[16px]">12</span>
          <span className="leading-[16px]">{` of `}</span>
          <span className="font-['Jost:Bold',sans-serif] font-bold leading-[16px]">27</span>
          <span className="leading-[16px]">{` products`}</span>
        </p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#ebebeb] h-[7px] left-[358.75px] right-[358.75px] rounded-[7px] top-[55px]" data-name="Background">
      <div className="absolute bg-[#60ff00] h-[7px] left-0 right-[66.67%] rounded-[7px] top-0" data-name="Background" />
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#ebebeb] content-stretch flex h-[48px] items-center justify-center left-1/2 min-w-[250px] pl-[80.68px] pr-[80.67px] rounded-[3px] top-[92px] cursor-pointer" data-name="Button">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[12px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">LOAD MORE ITEMS</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute h-[140px] left-0 right-0 top-[2193.7px]" data-name="Nav">
      <Container176 />
      <Background4 />
      <Button />
    </div>
  );
}

function Container84({
  filters,
  sortBy,
}: {
  filters: FilterState;
  sortBy: string;
}) {
  return (
    <div className="relative self-stretch shrink-0 w-[967.5px]" data-name="Container">
      <Background />
      <Container91 filters={filters} sortBy={sortBy} />
      <Nav />
    </div>
  );
}

function Main() {
  const priceBounds = getPriceBounds();
  const [filters, setFilters] = useState<FilterState>({
    selectedCategories: [],
    selectedBrands: [],
    selectedRatings: [],
    selectedColors: [],
    selectedSizes: [],
    minSelectedPrice: priceBounds.minPrice,
    maxSelectedPrice: priceBounds.maxPrice,
  });
  const [sortBy] = useState("default");

  return (
    <div className="absolute content-stretch flex h-[2389.2px] items-start left-[100.4px] max-w-[1320px] px-[15px] right-[100.4px] top-[789px]" data-name="Main">
      <Container33 filters={filters} setFilters={setFilters} priceBounds={priceBounds} />
      <Container84 filters={filters} sortBy={sortBy} />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#222] text-[14px] uppercase w-full">
        <p className="leading-[21px]">ALL TAGS :</p>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4px] relative size-full">
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[11px] whitespace-nowrap">
          <p className="leading-[24px]">(27)</p>
        </div>
      </div>
    </div>
  );
}

function ItemLink37() {
  return (
    <div className="bg-white content-stretch flex h-[42px] items-center justify-center px-[30.8px] py-px relative shrink-0" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Adidas</p>
      </div>
      <Container178 />
    </div>
  );
}

function Container179() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4px] relative size-full">
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[11px] whitespace-nowrap">
          <p className="leading-[24px]">(27)</p>
        </div>
      </div>
    </div>
  );
}

function ItemLink38() {
  return (
    <div className="bg-white content-stretch flex h-[42px] items-center justify-center px-[30.8px] py-px relative shrink-0" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Balance</p>
      </div>
      <Container179 />
    </div>
  );
}

function Container180() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4px] relative size-full">
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[11px] whitespace-nowrap">
          <p className="leading-[24px]">(25)</p>
        </div>
      </div>
    </div>
  );
}

function ItemLink39() {
  return (
    <div className="bg-white content-stretch flex h-[42px] items-center justify-center px-[30.8px] py-px relative shrink-0" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Converse</p>
      </div>
      <Container180 />
    </div>
  );
}

function Container181() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4px] relative size-full">
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[11px] whitespace-nowrap">
          <p className="leading-[24px]">(27)</p>
        </div>
      </div>
    </div>
  );
}

function ItemLink40() {
  return (
    <div className="bg-white content-stretch flex h-[42px] items-center justify-center px-[30.8px] py-px relative shrink-0" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Nike</p>
      </div>
      <Container181 />
    </div>
  );
}

function Container182() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4px] relative size-full">
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[11px] whitespace-nowrap">
          <p className="leading-[24px]">(27)</p>
        </div>
      </div>
    </div>
  );
}

function ItemLink41() {
  return (
    <div className="bg-white content-stretch flex gap-[0.01px] h-[42px] items-center justify-center px-[30.8px] py-px relative shrink-0" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Puma</p>
      </div>
      <Container182 />
    </div>
  );
}

function Container183() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4px] relative size-full">
        <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[11px] whitespace-nowrap">
          <p className="leading-[24px]">(27)</p>
        </div>
      </div>
    </div>
  );
}

function ItemLink42() {
  return (
    <div className="bg-white content-stretch flex h-[42px] items-center justify-center px-[30.8px] py-px relative shrink-0" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Reebok</p>
      </div>
      <Container183 />
    </div>
  );
}

function ItemLink43() {
  return (
    <div className="bg-white content-stretch flex h-[42px] items-center justify-center pl-[30.8px] pr-[34.8px] py-px relative shrink-0" data-name="Item → Link">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#505157] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Skechers</p>
      </div>
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex gap-[10px] h-0 items-start relative shrink-0 w-full" data-name="List">
      <ItemLink37 />
      <ItemLink38 />
      <ItemLink39 />
      <ItemLink40 />
      <ItemLink41 />
      <ItemLink42 />
      <ItemLink43 />
    </div>
  );
}

function Container177() {
  return (
    <div className="max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <div className="max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[28px] items-start max-w-[inherit] pb-[52px] px-[15px] relative size-full">
          <Heading13 />
          <List5 />
        </div>
      </div>
    </div>
  );
}

function Main1() {
  return (
    <div className="absolute bg-[#f2f2f2] content-stretch flex flex-col items-start left-0 pb-[90px] pt-[95px] px-[100.4px] right-0 top-[3222.7px]" data-name="main">
      <Container177 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">CONTACT US</p>
      </div>
    </div>
  );
}

function Container188() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.7px_0_20px_0] items-start" data-name="Container">
      <Heading14 />
    </div>
  );
}

function Margin22() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Margin">
      <Container188 />
    </div>
  );
}

function Container190() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[389.99px]" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px] mb-0">Morbi ullamcorper ligula sit amet efficitur pellentesque.</p>
        <p className="leading-[24px]">Aliquam ornare quam tellus ultricies molestie tortor.</p>
      </div>
    </div>
  );
}

function Container189() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container190 />
    </div>
  );
}

function Margin23() {
  return (
    <div className="content-stretch flex flex-col h-[73px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container189 />
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

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] font-['Jost:Bold',sans-serif] font-bold h-[39px] leading-[0] min-w-px relative text-white uppercase whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[13px] top-[15.35px]">
        <p className="leading-[19.5px]">HOTLINE:</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[64.17px] text-[18px] top-[13.5px]">
        <p className="leading-[27px]">+0123 456 789</p>
      </div>
    </div>
  );
}

function Container192() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <FigureMargin />
      <Paragraph1 />
    </div>
  );
}

function Container191() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container192 />
    </div>
  );
}

function Margin24() {
  return (
    <div className="content-stretch flex flex-col h-[59px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container191 />
    </div>
  );
}

function FigureImageContact2Png() {
  return <div className="h-[24px] max-w-[28px] relative shrink-0 w-[28px]" data-name="Figure → image-contact-2.png" />;
}

function FigureMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[27px] relative shrink-0 w-[55px]" data-name="Figure:margin">
      <FigureImageContact2Png />
    </div>
  );
}

function Container195() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full whitespace-nowrap">
        <p className="leading-[24px]">info@example.com</p>
      </div>
    </div>
  );
}

function Container194() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <FigureMargin1 />
      <Container195 />
    </div>
  );
}

function Container193() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container194 />
    </div>
  );
}

function Margin25() {
  return (
    <div className="content-stretch flex flex-col h-[44px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container193 />
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
    <div className="content-stretch flex flex-col h-[24px] items-start overflow-clip relative shrink-0 w-[28px]" data-name="Figure">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFigure} />
      </div>
      <ImageContact3Png />
    </div>
  );
}

function FigureMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[27px] relative shrink-0 w-[55px]" data-name="Figure:margin">
      <Figure1 />
    </div>
  );
}

function Container198() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full whitespace-nowrap">
        <p className="leading-[24px]">Monday till Friday 10 to 6 EST</p>
      </div>
    </div>
  );
}

function Container197() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <FigureMargin2 />
      <Container198 />
    </div>
  );
}

function Container196() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Container197 />
    </div>
  );
}

function Container187() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[17.51px] pt-[15px] px-[15px] relative size-full">
          <Margin22 />
          <Margin23 />
          <Margin24 />
          <Margin25 />
          <Container196 />
        </div>
      </div>
    </div>
  );
}

function Container186() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[439.99px]" data-name="Container">
      <Container187 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">HELP</p>
      </div>
    </div>
  );
}

function Container201() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.7px_0_20px_0] items-start" data-name="Container">
      <Heading15 />
    </div>
  );
}

function Margin26() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Margin">
      <Container201 />
    </div>
  );
}

function Link43() {
  return (
    <RouterLink
      to="/info"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Help Center</p>
      </div>
    </RouterLink>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link43 />
    </div>
  );
}

function Link44() {
  return (
    <RouterLink
      to="/info"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Shipping Info</p>
      </div>
    </RouterLink>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link44 />
    </div>
  );
}

function Link45() {
  return (
    <RouterLink
      to="/info"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Returns</p>
      </div>
    </RouterLink>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link45 />
    </div>
  );
}

function Link46() {
  return (
    <RouterLink
      to="/info"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">How To Order</p>
      </div>
    </RouterLink>
  );
}

function Item16() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link46 />
    </div>
  );
}

function Link47() {
  return (
    <RouterLink
      to="/info"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">How To Track</p>
      </div>
    </RouterLink>
  );
}

function Item17() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link47 />
    </div>
  );
}

function Link48() {
  return (
    <RouterLink
      to="/info"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Size Guide</p>
      </div>
    </RouterLink>
  );
}

function Item18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Link48 />
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col gap-[6.5px] items-start relative shrink-0 w-full" data-name="List">
      <Item13 />
      <Item14 />
      <Item15 />
      <Item16 />
      <Item17 />
      <Item18 />
    </div>
  );
}

function Container202() {
  return (
    <div className="content-stretch flex flex-col h-[191px] items-start relative shrink-0 w-full" data-name="Container">
      <List6 />
    </div>
  );
}

function Container200() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[15px] relative size-full">
          <Margin26 />
          <Container202 />
        </div>
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[220px]" data-name="Container">
      <Container200 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">COMPANY</p>
      </div>
    </div>
  );
}

function Container205() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.7px_0_20px_0] items-start" data-name="Container">
      <Heading16 />
    </div>
  );
}

function Margin27() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Margin">
      <Container205 />
    </div>
  );
}

function Link49() {
  return (
    <RouterLink
      to="/info"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">About Us</p>
      </div>
    </RouterLink>
  );
}

function Item19() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link49 />
    </div>
  );
}

function Link50() {
  return (
    <RouterLink
      to="/info"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Our Blog</p>
      </div>
    </RouterLink>
  );
}

function Item20() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link50 />
    </div>
  );
}

function Link51() {
  return (
    <RouterLink
      to="/info"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Careers</p>
      </div>
    </RouterLink>
  );
}

function Item21() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link51 />
    </div>
  );
}

function Link52() {
  return (
    <RouterLink
      to="/info"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Store Locations</p>
      </div>
    </RouterLink>
  );
}

function Item22() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link52 />
    </div>
  );
}

function Link53() {
  return (
    <RouterLink
      to="/info"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Testimonial</p>
      </div>
    </RouterLink>
  );
}

function Item23() {
  return (
    <div className="content-stretch flex items-center pb-[6.5px] relative shrink-0 w-full" data-name="Item">
      <Link53 />
    </div>
  );
}

function Link54() {
  return (
    <RouterLink
      to="/info"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px]">Sitemap</p>
      </div>
    </RouterLink>
  );
}

function Item24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Link54 />
    </div>
  );
}

function List7() {
  return (
    <div className="content-stretch flex flex-col gap-[6.5px] items-start relative shrink-0 w-full" data-name="List">
      <Item19 />
      <Item20 />
      <Item21 />
      <Item22 />
      <Item23 />
      <Item24 />
    </div>
  );
}

function Container206() {
  return (
    <div className="content-stretch flex flex-col h-[191px] items-start relative shrink-0 w-full" data-name="Container">
      <List7 />
    </div>
  );
}

function Container204() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[15px] relative size-full">
          <Margin27 />
          <Container206 />
        </div>
      </div>
    </div>
  );
}

function Container203() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[220px]" data-name="Container">
      <Container204 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.7px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">NEWSLETTER</p>
      </div>
    </div>
  );
}

function Container209() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.7px_0_20px_0] items-start" data-name="Container">
      <Heading17 />
    </div>
  );
}

function Margin28() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Margin">
      <Container209 />
    </div>
  );
}

function Container211() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[21px] mb-0">Get 15% off your first purchaxse! Plus, be the first to know about</p>
        <p className="leading-[21px]">sales new product launches and exclusive offers!</p>
      </div>
    </div>
  );
}

function Container210() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container211 />
    </div>
  );
}

function Margin29() {
  return (
    <div className="content-stretch flex flex-col h-[74px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container210 />
    </div>
  );
}

function Container213() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="capitalize flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#959595] text-[13px] w-full">
        <p className="leading-[normal]">Your Email Address</p>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white h-[54px] relative rounded-[54px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[20px] pr-[58px] py-[17.8px] relative size-full">
          <Container213 />
        </div>
      </div>
    </div>
  );
}

function Container214() {
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
      <Input4 />
      <Container214 />
    </div>
  );
}

function Container212() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <FormContactForm />
    </div>
  );
}

function Margin30() {
  return (
    <div className="content-stretch flex flex-col h-[84px] items-start justify-center pb-[20px] relative shrink-0 w-full" data-name="Margin">
      <Container212 />
    </div>
  );
}

function Container217() {
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

function Container216() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[2.62px] pr-[2.63px] relative shrink-0 size-[14px]" data-name="Container">
      <Container217 />
    </div>
  );
}

function ListitemLink() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container216 />
    </div>
  );
}

function Container219() {
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

function Container218() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[0.87px] pr-[0.88px] relative shrink-0 size-[14px]" data-name="Container">
      <Container219 />
    </div>
  );
}

function ListitemLink1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container218 />
    </div>
  );
}

function Container221() {
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

function Container220() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start relative shrink-0 w-[14.88px]" data-name="Container">
      <Container221 />
    </div>
  );
}

function ListitemLink2() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[6.12px] pr-[7px] relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container220 />
    </div>
  );
}

function Container223() {
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

function Container222() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start relative shrink-0 w-[14.88px]" data-name="Container">
      <Container223 />
    </div>
  );
}

function ListitemLink3() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[6.12px] pr-[7px] relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container222 />
    </div>
  );
}

function Container225() {
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

function Container224() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[14px]" data-name="Container">
      <Container225 />
    </div>
  );
}

function ListitemLink4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[28px]" data-name="Listitem → Link">
      <Container224 />
    </div>
  );
}

function List8() {
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

function Container215() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <List8 />
    </div>
  );
}

function Container208() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[20px] pt-[15px] px-[15px] relative size-full">
          <Margin28 />
          <Margin29 />
          <Margin30 />
          <Container215 />
        </div>
      </div>
    </div>
  );
}

function Container207() {
  return (
    <div className="content-stretch flex items-start justify-center min-h-px relative self-stretch shrink-0 w-[439.99px]" data-name="Container">
      <Container208 />
    </div>
  );
}

function Container185() {
  return (
    <div className="content-stretch flex h-[291px] items-start max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <Container186 />
      <Container199 />
      <Container203 />
      <Container207 />
    </div>
  );
}

function Section1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Section">
      <div className="content-stretch flex flex-col items-start px-[100.4px] relative size-full">
        <Container185 />
      </div>
    </div>
  );
}

function Container184() {
  return (
    <div className="content-stretch flex h-[291px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Section1 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start pb-[98px] pt-[80px] relative shrink-0 w-full" data-name="Section">
      <Container184 />
    </div>
  );
}

function Container231() {
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

function Container230() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container231 />
    </div>
  );
}

function Container229() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
          <Container230 />
        </div>
      </div>
    </div>
  );
}

function Container228() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container229 />
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

function Container236() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function Container235() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container236 />
    </div>
  );
}

function Container234() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] pr-[16px] relative shrink-0" data-name="Container">
      <Container235 />
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

function Container239() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Container238() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container239 />
    </div>
  );
}

function Container237() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] pr-[16px] relative shrink-0" data-name="Container">
      <Container238 />
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

function Container242() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Container241() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container242 />
    </div>
  );
}

function Container240() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] pr-[16px] relative shrink-0" data-name="Container">
      <Container241 />
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

function Container245() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Container244() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container245 />
    </div>
  );
}

function Container243() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] pr-[16px] relative shrink-0" data-name="Container">
      <Container244 />
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

function Container248() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Container247() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[7.2px] relative shrink-0" data-name="Container">
      <Container248 />
    </div>
  );
}

function Container246() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[660px] relative shrink-0" data-name="Container">
      <Container247 />
    </div>
  );
}

function Container233() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end p-[15px] relative size-full">
          <Container234 />
          <Container237 />
          <Container240 />
          <Container243 />
          <Container246 />
        </div>
      </div>
    </div>
  );
}

function Container232() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container233 />
    </div>
  );
}

function Container227() {
  return (
    <div className="content-stretch flex h-[73.2px] items-start max-w-[1320px] relative shrink-0 w-full" data-name="Container">
      <Container228 />
      <Container232 />
    </div>
  );
}

function Section3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Section">
      <div className="content-stretch flex flex-col items-start py-[15px] relative size-full">
        <Container227 />
      </div>
    </div>
  );
}

function Container226() {
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
        <Container226 />
      </div>
    </div>
  );
}

function Container252() {
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

function Link55() {
  return (
    <RouterLink to="/" className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Logo />
    </RouterLink>
  );
}

function Container254() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Link55 />
    </div>
  );
}

function Container253() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container254 />
    </div>
  );
}

function Container258() {
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

function Background5() {
  return (
    <div className="bg-[#ededed] content-stretch flex items-center justify-center p-[13px] relative rounded-[50px] shrink-0" data-name="Background">
      <Container258 />
    </div>
  );
}

function Container257() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Background5 />
    </div>
  );
}

function Margin31() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Container257 />
    </div>
  );
}

function Container260() {
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

function Background6() {
  return (
    <div className="bg-[#ededed] content-stretch flex items-center justify-center pl-[16.59px] pr-[16.6px] py-[16px] relative rounded-[50px] shrink-0" data-name="Background">
      <Container260 />
    </div>
  );
}

function Container259() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Background6 />
    </div>
  );
}

function Margin32() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10px] relative shrink-0" data-name="Margin">
      <Container259 />
    </div>
  );
}

function Container264() {
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

function Container263() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[50px] p-[15px] relative shrink-0" data-name="Container">
      <Container264 />
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col items-center right-[-6px] rounded-[9999px] size-[18px] top-[-6px]" data-name="Background">
      <div className="flex flex-col font-['Jost:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#60ff00] text-[10px] text-center uppercase whitespace-nowrap">
        <p className="leading-[18px]">0</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <Container263 />
      <Background8 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#ededed] content-stretch flex items-center justify-center min-h-[50px] min-w-[50px] relative rounded-[50px] shrink-0" data-name="Background">
      <Button1 />
    </div>
  );
}

function Container262() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Background7 />
    </div>
  );
}

function Container261() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container262 />
    </div>
  );
}

function Container256() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Container">
      <Margin31 />
      <Margin32 />
      <Container261 />
    </div>
  );
}

function Container255() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container256 />
    </div>
  );
}

function Container251() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container252 />
      <Container253 />
      <Container255 />
    </div>
  );
}

function Container250() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[30px] pt-[33px] px-[30px] relative size-full">
        <Container251 />
      </div>
    </div>
  );
}

function Container249() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container250 />
    </div>
  );
}

function Link56() {
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

function Item25() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pr-[20px] relative self-stretch shrink-0" data-name="Item">
      <Link56 />
    </div>
  );
}

function Link57() {
  return (
    <RouterLink
      to="/products"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pr-[14px] relative"
      data-name="Link"
    >
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">
        <p className="leading-[24px]">SHOP</p>
      </div>
      <div className="absolute h-[2.997px] left-[39.94px] top-[10.63px] w-[6px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2.9973">
          <path d={svgPaths.p3d2f8a40} fill="var(--fill-0, black)" id="Symbol" />
        </svg>
      </div>
    </RouterLink>
  );
}

function Item26() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative self-stretch shrink-0" data-name="Item">
      <Link57 />
    </div>
  );
}

function Link58() {
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

function Item27() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative self-stretch shrink-0" data-name="Item">
      <Link58 />
    </div>
  );
}

function Link59() {
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

function Item28() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative self-stretch shrink-0" data-name="Item">
      <Link59 />
    </div>
  );
}

function List9() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0" data-name="List">
      <Item25 />
      <Item26 />
      <Item27 />
      <Item28 />
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Nav">
      <List9 />
    </div>
  );
}

function Container267() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Nav1 />
    </div>
  );
}

function Container266() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[346.45px]" data-name="Container">
      <Container267 />
    </div>
  );
}

function Container265() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[32px] px-[30px] relative size-full">
          <Container266 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[4068.7px] relative shrink-0 w-full" data-name="Container">
      <Masthead />
      <Container2 />
      <Main />
      <Main1 />
      <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[3508.7px]" data-name="Footer">
        <Section />
        <Section2 />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[-0.1px] right-[0.1px] top-0" data-name="Header">
        <Container249 />
        <Container265 />
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

function Container268() {
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

function Background9() {
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
      <Container268 />
    </div>
  );
}

export default function TrangDanhMcSnPhm() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Trang danh mục sản phẩm">
      <Container />
      <div className="absolute bottom-0 h-[4068.699951171875px] pointer-events-none right-[20px]">
        <Background9 />
      </div>
    </div>
  );
}