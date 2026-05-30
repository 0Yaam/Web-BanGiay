import { Link as RouterLink } from "react-router";
import svgPaths from "../TrangGiỏHang/svg-iyzs9d48al";
import { useState } from "react";
import imgMasthead from "./7e50743c804ee3c01b7423cd7410540d607630a7.png";
import imgBanner from "./b61ddef3ff52b0309c8a2fd4af3e966c857e676b.png";
import imgBanner1 from "./60f9fb18e1bc05163f491f43719fa005a1442a9a.png";
import imgAboutUsVideo5Avif from "./9a9ce726295619ea19449274a555a92c19f8e160.png";
import imgAboutUsVideo1Avif from "./b442b27272759095e81bdaa59026d65ff58848a8.png";
import imgAboutUsVideo2Avif from "./f811db402561ac4618774082487a9277278520d6.png";
import imgBanner2 from "./cfbed30553dbb23a0182b6a00b208d04652310d4.png";
import imgBanner3 from "./e9b9e548482695ff32113414dd2e219d14cff1ed.png";
import imgDanielBrooks from "./bc882ab6f8aa96e6721bee6dbda92cd82beecc73.png";
import imgSophiaMartinez from "./d4ed52df554aaced1523f317520330df1e775aa8.png";
import imgMichaelThompson from "./6227151ae0dc0b8d85b6852296e53b55c10cc0cc.png";
import imgEmilyWatson from "./0c78238cb3d8b555fb11234a74c9597e6c5f0635.png";
import imgJamesCarter from "./1f2185a24a00c6e534df15a6b22d08b6e3fe6394.png";
import imgOliviaReynolds from "./57f952276db0c39e2de2bf5b9c0745afb90acfad.png";
import imgAboutStore1Avif from "./68c0c899032b91340d1216b2f5c3ab08d01af124.png";
import imgAboutStore2Avif from "./6fa362f70c65e079f6369557f3bbdca2f603fc59.png";
import imgAboutStore3Avif from "./282aa82fa0ab4cb97e712380c198d87e2ff950d4.png";
import imgImageContact1Png from "./c2000d94d8e5d7dd1fac8c081b9ad2c8a35297d1.png";
import imgFigure from "./f6a7586ab049f7e8f087fb60cf77c048db40a1e4.png";
import imgImageContact3Png from "./9090d63ed0f5181223c0085f89969a453671ce1d.png";

/* ════════════════════════════════════════════════
   1. HERO / MASTHEAD
   ════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative border-t border-[#ededed]">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <img
          src={imgMasthead}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      </div>
      {/* Content */}
      <div className="relative max-w-[1320px] mx-auto px-[15px] py-[160px] flex flex-col items-center gap-[14px]">
        <h1 className="font-['Oswald',sans-serif] font-bold text-[30px] text-[#222] text-center uppercase leading-[45px]">
          ABOUT US
        </h1>
        <div className="flex items-center gap-2 font-['Jost',sans-serif] text-[12px] text-[#222] capitalize">
          <span>Home</span>
          <svg width="4" height="7" viewBox="0 0 4 7" fill="none">
            <path d="M0.5 0.5L3.5 3.5L0.5 6.5" stroke="#222" strokeWidth="0.8" />
          </svg>
          <span>About Us</span>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   2. MISSION SECTION
   ════════════════════════════════════════════════ */
function MissionSection() {
  return (
    <section className="max-w-[1410px] mx-auto px-[55px]">
      {/* Title */}
      <div className="text-center py-[50px]">
        <p className="font-['Jost',sans-serif] text-[14px] text-[#505157] mb-[10px]">
          Learn More About Our Design!
        </p>
        <h2 className="font-['Oswald',sans-serif] font-bold text-[40px] text-[#222] capitalize leading-[60px]">
          Our Mission? We Bring Harmony And Practicality Into Great Designs For Everyone
        </h2>
      </div>

      {/* Images row */}
      <div className="flex gap-0 pb-[10px]">
        <div className="flex-[2] p-[10px]">
          <div className="rounded-[5px] overflow-hidden">
            <img src={imgBanner} alt="Runner" className="w-full h-auto object-cover" />
          </div>
        </div>
        <div className="flex-1 p-[10px]">
          <div className="rounded-[5px] overflow-hidden">
            <img src={imgBanner1} alt="Basketball player" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      {/* Text paragraphs */}
      <div className="py-[32px] px-[10px]">
        <div className="font-['Jost',sans-serif] text-[14px] text-[#505157] leading-[25px] mb-[15px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus. Fusce imperdiet pulvinar est, eget fermentum nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae
          </p>
        </div>
        <div className="font-['Jost',sans-serif] text-[14px] text-[#505157] leading-[24px] mb-[15px]">
          <p className="mb-0">
            Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla
          </p>
          <p className="mb-0">
            mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat
          </p>
          <p>
            fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.
          </p>
        </div>
        <div className="font-['Jost',sans-serif] text-[14px] text-[#505157] leading-[24px]">
          <p className="mb-0">
            Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla
          </p>
          <p>
            mauris risus, commodo et luctus rutrum, lobortis sed mauris.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   3. VIDEOS FROM OUR CLIENTS
   ════════════════════════════════════════════════ */
function PlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <button
        type="button"
        className="w-[60px] h-[60px] rounded-full bg-[rgba(255,255,255,0.2)] border border-white flex items-center justify-center cursor-pointer hover:bg-[rgba(255,255,255,0.4)] transition-colors"
        aria-label="Play video"
      >
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
          <path d="M2 1L14 9L2 17V1Z" fill="white" />
        </svg>
      </button>
    </div>
  );
}

function VideosSection() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [imgAboutUsVideo5Avif, imgAboutUsVideo1Avif, imgAboutUsVideo2Avif];

  return (
    <section className="overflow-hidden pt-[115px] pb-[65px]">
      {/* Title */}
      <div className="text-center mb-[64px]">
        <h2 className="font-['Oswald',sans-serif] font-bold text-[40px] text-[#222] capitalize leading-[60px]">
          Videos From Our Clients
        </h2>
        <p className="font-['Jost',sans-serif] text-[14px] text-[#505157] capitalize mt-[10px]">
          Real Customer Experience
        </p>
      </div>

      {/* Video carousel */}
      <div className="relative max-w-[840px] mx-auto">
        <div className="rounded-[5px] overflow-hidden relative">
          <img
            src={videos[currentVideo]}
            alt="Customer video"
            className="w-full aspect-[840/532] object-cover"
          />
          <PlayButton />
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {videos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentVideo(i)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                currentVideo === i ? "bg-[#0db22a]" : "bg-[#d9d9d9]"
              }`}
              aria-label={`Video ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   4. HOW WE WORK (3 ICONS)
   ════════════════════════════════════════════════ */
function HowWeWorkSection() {
  const steps = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M6 8H42V40H6V8Z" stroke="#1C1C1C" strokeWidth="2" />
          <path d="M14 16H34M14 22H34M14 28H26" stroke="#1C1C1C" strokeWidth="2" />
          <path d="M18 34L22 38L30 30" stroke="#1C1C1C" strokeWidth="2" />
        </svg>
      ),
      title: "Choose A Theme",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="10" width="32" height="28" rx="2" stroke="#1C1C1C" strokeWidth="2" />
          <path d="M18 24H30M24 18V30" stroke="#1C1C1C" strokeWidth="2" />
          <path d="M16 6V10M32 6V10" stroke="#1C1C1C" strokeWidth="2" />
        </svg>
      ),
      title: "Add Products",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus.",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="16" stroke="#1C1C1C" strokeWidth="2" />
          <path d="M24 14V26L30 30" stroke="#1C1C1C" strokeWidth="2" />
          <path d="M18 8L24 4L30 8" stroke="#1C1C1C" strokeWidth="2" />
        </svg>
      ),
      title: "Start Selling",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus.",
    },
  ];

  return (
    <section className="pb-[80px]">
      {/* Title */}
      <div className="text-center max-w-[800px] mx-auto px-[15px] mb-[50px]">
        <p className="font-['Jost',sans-serif] text-[14px] text-[#505157] text-center mb-[6px]">
          How We Work
        </p>
        <h2 className="font-['Oswald',sans-serif] font-bold text-[40px] text-[#222] capitalize leading-[60px] text-center">
          We Give You The Power To Create Spaces
          <br />
          That Are Just Right For You
        </h2>
      </div>

      {/* 3 steps */}
      <div className="max-w-[1320px] mx-auto px-[15px] grid grid-cols-3 gap-[30px]">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center px-[40px]">
            <div className="mb-[24px]">{step.icon}</div>
            <h3 className="font-['Oswald',sans-serif] font-medium text-[24px] text-[#222] capitalize leading-[36px] mb-[16px]">
              {step.title}
            </h3>
            <p className="font-['Jost',sans-serif] text-[14px] text-[#505157] leading-[24px]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   5. WHY CHOOSE US
   ════════════════════════════════════════════════ */
function WhyChooseUsSection() {
  return (
    <section className="max-w-[1410px] mx-auto px-[55px] py-[60px]">
      {/* Row 1: Why Choose Us heading + text left, image right */}
      <div className="grid grid-cols-2 gap-[30px] items-start mb-[30px]">
        <div>
          <h2 className="font-['Oswald',sans-serif] font-bold text-[24px] text-[#222] capitalize leading-[36px] mb-[20px]">
            Why Choose Us ?
          </h2>
          <p className="font-['Jost',sans-serif] text-[14px] text-[#505157] leading-[24px]">
            Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla
            mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique and more.
          </p>
        </div>
        <div className="rounded-[5px] overflow-hidden">
          <img src={imgBanner3} alt="Runner on track" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Row 2: Image left, Trusted Online Shopping text right */}
      <div className="grid grid-cols-2 gap-[30px] items-start">
        <div className="rounded-[5px] overflow-hidden">
          <img src={imgBanner2} alt="Sneakers on court" className="w-full h-auto object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="font-['Oswald',sans-serif] font-bold text-[24px] text-[#222] capitalize leading-[36px] mb-[16px]">
            Trusted Online Shopping
          </h3>
          <p className="font-['Jost',sans-serif] text-[14px] text-[#505157] leading-[24px]">
            Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla
            mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   6. TEAM SECTION
   ════════════════════════════════════════════════ */
function TeamSection() {
  const team = [
    { name: "Daniel Brooks", role: "From Envato", image: imgDanielBrooks },
    { name: "Sophia Martinez", role: "From Envato", image: imgSophiaMartinez },
    { name: "Michael Thompson", role: "From Envato", image: imgMichaelThompson },
    { name: "Emily Watson", role: "From Envato", image: imgEmilyWatson },
    { name: "James Carter", role: "From Envato", image: imgJamesCarter },
    { name: "Olivia Reynolds", role: "From Envato", image: imgOliviaReynolds },
  ];

  return (
    <section className="py-[80px] bg-white">
      {/* Title */}
      <div className="text-center mb-[60px]">
        <p className="font-['Jost',sans-serif] text-[14px] text-[#505157] mb-[10px]">
          Our Team
        </p>
        <h2 className="font-['Oswald',sans-serif] font-bold text-[40px] text-[#222] capitalize leading-[60px]">
          The Passionate Team Bringing Our
          <br />
          Designs To Life
        </h2>
      </div>

      {/* Team grid */}
      <div className="max-w-[1320px] mx-auto px-[15px] grid grid-cols-6 gap-0">
        {team.map((member, i) => (
          <div key={i} className="group cursor-pointer overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-[220/264] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   7. STORES SECTION
   ════════════════════════════════════════════════ */
function StoresSection() {
  const stores = [
    {
      city: "Los Angeles",
      address: "3123 Canis Heights Drive, Marina, CA 90071",
      image: imgAboutStore1Avif,
    },
    {
      city: "New York",
      address: "1904 James Street, Rochester, NY 14604",
      image: imgAboutStore2Avif,
    },
    {
      city: "California",
      address: "3605 Martha Street, Phoenix, AZ 86040",
      image: imgAboutStore3Avif,
    },
  ];

  return (
    <section className="bg-[#f6f6f6] py-[80px] pb-[80px]">
      {/* Title */}
      <div className="text-center mb-[50px]">
        <p className="font-['Jost',sans-serif] text-[14px] text-[#505157] mb-[10px]">
          Our Stores
        </p>
        <h2 className="font-['Oswald',sans-serif] font-bold text-[40px] text-[#222] capitalize leading-[60px]">
          Stores System
        </h2>
      </div>

      {/* Store cards */}
      <div className="max-w-[1320px] mx-auto px-[15px] grid grid-cols-3 gap-[30px]">
        {stores.map((store, i) => (
          <div key={i} className="group">
            <div className="rounded-[5px] overflow-hidden mb-[20px]">
              <img
                src={store.image}
                alt={store.city}
                className="w-full aspect-[420/280] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-['Oswald',sans-serif] font-bold text-[20px] text-[#222] text-center mb-[8px]">
              {store.city}
            </h3>
            <p className="font-['Jost',sans-serif] text-[14px] text-[#505157] text-center leading-[21px]">
              {store.address}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   8. FOOTER
   ════════════════════════════════════════════════ */
function Footer() {
  const helpLinks = [
    { label: "Help Center", to: "/info" },
    { label: "Shipping Info", to: "/contact" },
    { label: "Returns", to: "/contact" },
    { label: "How To Order", to: "/products" },
    { label: "How To Track", to: "/account" },
    { label: "Size Guide", to: "/info" },
  ];

  const companyLinks = [
    { label: "About Us", to: "/info" },
    { label: "Our Blog", to: "/info" },
    { label: "Careers", to: "/contact" },
    { label: "Store Locations", to: "/contact" },
    { label: "Testimonial", to: "/info" },
    { label: "Sitemap", to: "/" },
  ];

  return (
    <footer className="mt-0">
      <div className="bg-black pt-[60px] pb-[50px]">
        <div className="max-w-[1320px] mx-auto px-[15px] sm:px-[30px] lg:px-[100px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] lg:gap-[20px]">
            <div>
              <h4 className="font-['Oswald',sans-serif] font-bold text-[18px] text-white uppercase mb-[20px]">
                CONTACT US
              </h4>
              <p className="font-['Jost',sans-serif] text-[14px] text-white/90 leading-[24px] mb-[20px]">
                Need help with your order or have questions about our products? Reach out anytime.
              </p>
              <div className="flex items-center gap-[16px] mb-[16px]">
                <img src={imgImageContact1Png} alt="" className="w-[28px] h-[28px] shrink-0" />
                <div className="font-['Jost',sans-serif] text-white">
                  <span className="font-bold text-[13px] uppercase">Hotline:</span>{" "}
                  <span className="font-bold text-[16px]">+0123 456 789</span>
                </div>
              </div>
              <div className="flex items-center gap-[16px] mb-[16px]">
                <img src={imgFigure} alt="" className="w-[28px] h-[24px] shrink-0 object-contain" />
                <a
                  href="mailto:info@mate.com"
                  className="font-['Jost',sans-serif] text-[14px] text-white hover:text-[#0db22a] transition-colors"
                >
                  info@mate.com
                </a>
              </div>
              <div className="flex items-center gap-[16px]">
                <img src={imgImageContact3Png} alt="" className="w-[28px] h-[24px] shrink-0 object-contain" />
                <span className="font-['Jost',sans-serif] text-[14px] text-white">
                  Monday – Friday, 10:00 – 18:00
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-['Oswald',sans-serif] font-bold text-[18px] text-white uppercase mb-[20px]">
                HELP
              </h4>
              <ul className="flex flex-col gap-[8px]">
                {helpLinks.map((item) => (
                  <li key={item.label}>
                    <RouterLink
                      to={item.to}
                      className="font-['Jost',sans-serif] text-[14px] text-white hover:text-[#0db22a] transition-colors"
                    >
                      {item.label}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-['Oswald',sans-serif] font-bold text-[18px] text-white uppercase mb-[20px]">
                COMPANY
              </h4>
              <ul className="flex flex-col gap-[8px]">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <RouterLink
                      to={item.to}
                      className="font-['Jost',sans-serif] text-[14px] text-white hover:text-[#0db22a] transition-colors"
                    >
                      {item.label}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-['Oswald',sans-serif] font-bold text-[18px] text-white uppercase mb-[20px]">
                NEWSLETTER
              </h4>
              <p className="font-['Jost',sans-serif] text-[14px] text-white/90 leading-[22px] mb-[20px]">
                Get 15% off your first purchase! Be the first to know about sales and new arrivals.
              </p>
              <div className="relative mb-[20px]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full h-[50px] bg-white rounded-full pl-[20px] pr-[56px] font-['Jost',sans-serif] text-[13px] text-[#222] outline-none"
                />
                <button
                  type="button"
                  className="absolute right-[3px] top-[3px] w-[44px] h-[44px] bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-[#333] transition-colors"
                  aria-label="Subscribe"
                >
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <path d="M2 9H16M10 3L16 9L10 15" stroke="white" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-wrap gap-[12px]">
                {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="font-['Jost',sans-serif] text-[12px] text-white/80 hover:text-[#0db22a] transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black border-t border-white/10">
        <div className="max-w-[1320px] mx-auto px-[15px] sm:px-[30px] lg:px-[100px] py-[16px] flex flex-col sm:flex-row items-center justify-between gap-[12px]">
          <span className="font-['Jost',sans-serif] text-[13px] text-white/80 text-center sm:text-left">
            Copyright © 2026 MATE. All Rights Reserved.
          </span>
          <span className="font-['Jost',sans-serif] text-[12px] text-white/60 uppercase tracking-wider">
            Visa · Mastercard · PayPal · COD
          </span>
        </div>
      </div>
    </footer>
  );
}

function ScrollTopRing() {
  return (
    <div className="absolute left-0 size-[46px] top-0" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g clipPath="url(#clip0_scroll_top)" id="SVG">
          <path d={svgPaths.p375dda80} id="Vector" stroke="var(--stroke-0, #0DB22A)" strokeDasharray="138.87 138.87" strokeWidth="1.80392" />
        </g>
        <defs>
          <clipPath id="clip0_scroll_top">
            <rect fill="white" height="46" width="46" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ScrollTopArrow() {
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

function ScrollToTopButton() {
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
      <ScrollTopRing />
      <ScrollTopArrow />
    </div>
  );
}

/* ════════════════════════════════════════════════
   MAIN EXPORT
   ════════════════════════════════════════════════ */
export default function TrangThongTin() {
  return (
    <div className="bg-white w-full" data-name="Trang thong tin">
      <HeroSection />
      <MissionSection />
      <VideosSection />
      <HowWeWorkSection />
      <WhyChooseUsSection />
      <TeamSection />
      <StoresSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}