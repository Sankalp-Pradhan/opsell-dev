"use client";

import { Toaster, toast } from "react-hot-toast";
import { useState, useEffect, useRef } from "react";

// -- Logo ----------------------------------------------------------------------
function OpsellLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-9 h-9 shrink-0">
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="18" cy="18" r="14" stroke="#5046E5" strokeWidth="2.5" />
          <circle cx="18" cy="18" r="7" stroke="#5046E5" strokeWidth="2" strokeDasharray="4 2" />
          <circle cx="18" cy="6" r="3" fill="#5046E5" />
          <circle cx="28" cy="24" r="2" fill="#7B73FF" />
          <circle cx="8" cy="24" r="2" fill="#7B73FF" />
        </svg>
      </div>
      {/* Logo: ~18px, bold */}
      <span className="text-[18px] font-bold leading-none tracking-tight text-[#0F1114]">
        Opsell <span className="text-[#5046E5]">AI</span>
      </span>
    </div>
  );
}

// -- Hamburger (mobile) --------------------------------------------------------
function Hamburger({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-lg hover:bg-[#F0F1F3] transition-colors"
      aria-label="Toggle menu"
    >
      <span
        className={`block h-[2px] w-5 bg-[#2E3238] rounded-full transition-all duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""
          }`}
      />
      <span
        className={`block h-[2px] w-5 bg-[#2E3238] rounded-full transition-all duration-200 ${open ? "opacity-0" : ""
          }`}
      />
      <span
        className={`block h-[2px] w-5 bg-[#2E3238] rounded-full transition-all duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
      />
    </button>
  );
}

// -- Navbar --------------------------------------------------------------------
const NAV_LINKS = ["Free Score", "How it works", "Product", "Platforms", "Pricing", "Security"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${scrolled || menuOpen
          ? "bg-white/95 backdrop-blur-md border-b border-[#E2E4E8] shadow-[0_1px_2px_rgba(15,17,20,0.06)]"
          : "bg-white/80 backdrop-blur-sm"
          }`}
      >
        <nav className="max-w-[1152px] mx-auto px-4 sm:px-6 h-[64px] flex items-center justify-between gap-4">
          <OpsellLogo />

          {/* Desktop pill nav */}
          <div className="hidden md:flex items-center gap-0.5 bg-[#F8F9FA] border border-[#E2E4E8] rounded-full px-2 py-1.5">
            {NAV_LINKS.map((label) => (
              <button
                key={label}
                className="text-[14px] font-medium leading-none text-[#4A4F57] hover:text-[#0F1114] px-3.5 py-[7px] rounded-full hover:bg-white hover:shadow-[0_1px_2px_rgba(15,17,20,0.06)] transition-all duration-150 whitespace-nowrap"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden sm:block text-[14px] font-semibold leading-none text-[#2E3238] hover:text-[#0F1114] transition-colors px-3 py-2">
              Log In
            </button>
            <button className="bg-[#5046E5] hover:bg-[#3B32C4] active:bg-[#2A2494] text-white text-[14px] font-semibold leading-none px-4 sm:px-5 py-[9px] rounded-xl shadow-[0_2px_8px_rgba(15,17,20,0.08),0_1px_2px_rgba(15,17,20,0.04)] hover:shadow-[0_8px_24px_rgba(15,17,20,0.10),0_2px_6px_rgba(15,17,20,0.06)] transition-all duration-150 active:scale-[0.98] whitespace-nowrap">
              Get Started
            </button>
            <Hamburger open={menuOpen} onClick={() => setMenuOpen((o) => !o)} />
          </div>
        </nav>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-200 ${menuOpen ? "max-h-[400px] border-t border-[#E2E4E8]" : "max-h-0"
            }`}
        >
          <div className="px-4 py-3 flex flex-col gap-1 bg-white">
            {NAV_LINKS.map((label) => (
              <button
                key={label}
                className="text-[15px] font-medium text-[#2E3238] hover:text-[#0F1114] text-left px-3 py-2.5 rounded-lg hover:bg-[#F8F9FA] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </button>
            ))}
            <div className="border-t border-[#E2E4E8] mt-1 pt-3">
              <button className="text-[15px] font-semibold text-[#2E3238] text-left px-3 py-2.5 rounded-lg hover:bg-[#F8F9FA] w-full transition-colors">
                Log In
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

// -- Live pill -----------------------------------------------------------------
function LivePill() {
  const [count, setCount] = useState(23);

  useEffect(() => {
    const t = setInterval(() => {
      setCount((c) => Math.max(18, Math.min(35, c + (Math.random() > 0.5 ? 1 : -1))));
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 bg-white border border-[#E2E4E8] rounded-full pl-3 pr-4 py-[7px] shadow-[0_1px_2px_rgba(15,17,20,0.06)] animate-[fadeUp_0.5s_ease_both]">
      <span className="relative flex h-[8px] w-[8px] shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-70" />
        <span className="relative inline-flex rounded-full h-[8px] w-[8px] bg-[#16A34A]" />
      </span>
      {/* Pill text: 14px, normal weight, bold on count */}
      <span className="text-[14px] leading-none text-[#4A4F57]">
        <span className="font-bold text-[#0F1114]">{count} sellers</span>{" "}
        scored their listings in the last hour
      </span>
    </div>
  );
}

// -- URL Card ------------------------------------------------------------------
function UrlCard() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function extractAsin(amazonUrl: string): string {
    const match = amazonUrl.match(/\/dp\/([A-Z0-9]{10})/);
    return match?.[1] ?? amazonUrl; // fallback: pass raw input
  }

  // const handleSubmit = () => {
  //   if (!url.trim()) {
  //     toast.error("Please enter the Amazon URL");
  //     inputRef.current?.focus();
  //     return;
  //   }

  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //     toast.success("Listing scored successfully!");
  //   }, 2200);
  // };
  const handleSubmit = async () => {
    if (!url.trim()) {
      toast.error("Please enter the Amazon URL");
      inputRef.current?.focus();
      return;
    }

    // // Save URL for after signup/login
    // localStorage.setItem("pendingAmazonUrl", url);

    // // Redirect to signup page
    // window.location.href = "/sign-up";

    localStorage.removeItem("opsellResult");
    localStorage.setItem("pendingAmazonUrl", url);
    // In UrlCard's handleSubmit:
    window.location.href = `/competitor-analysis?asin=${extractAsin(url)}`;

  };


  return (
    /* Card matches image: light grey bg, subtle border, generous padding */
    <div
      className="w-full max-w-[1000px] bg-[#F8F9FA] border border-[#E2E4E8] rounded-2xl p-4 sm:p-5 shadow-[0_2px_8px_rgba(15,17,20,0.08),0_1px_2px_rgba(15,17,20,0.04)] animate-[fadeUp_0.5s_ease_both]"
      style={{ animationDelay: "0.3s" }}
    >
      {/* Input: white bg, border, placeholder centred on desktop */}
      <input
        ref={inputRef}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="https://www.amazon.in/your-product..."
        className="w-full bg-white border border-[#E2E4E8] rounded-xl px-5 py-[14px] text-[15px] leading-none text-[#0F1114] placeholder:text-[#8C919A] placeholder:text-center focus:outline-none focus:ring-2 focus:ring-[#5046E5]/25 focus:border-[#5046E5] transition-all duration-150 mb-3 text-center"
      />

      {/* CTA button: full-width, brand, 16px semibold */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="relative w-full font-sans overflow-hidden bg-[#5046E5] hover:bg-[#3B32C4] disabled:opacity-60 text-white text-[16px] font-semibold leading-none py-[14px] rounded-xl shadow-[0_2px_8px_rgba(80,70,229,0.25)] hover:shadow-[0_8px_24px_rgba(80,70,229,0.30)] transition-all duration-150 active:scale-[0.99] group"
      >
        <span className="absolute  top-0 h-full w-16 bg-white/15 skew-x-[-20deg] -translate-x-20 group-hover:translate-x-[800px] transition-transform duration-700 pointer-events-none" />
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Analyzing listing…
          </span>
        ) : (
          "Score It Free "
        )}
      </button>

      {/* Fine print: 12px, muted */}
      <div className="mt-3 space-y-0.5">
        <p className="text-[12px] leading-[1.4] text-[#8C919A]">
          No seller account needed · result in ~few seconds
        </p>
        <p className="text-[12px] leading-[1.4] text-[#8C919A]">
          We show your result instantly. No spam, ever.
        </p>
      </div>
    </div>
  );
}

// -- Score badges --------------------------------------------------------------
const BADGES = [
  { key: "A9", label: "Amazon ranking", bg: "#5046E5" },
  { key: "Rufus", label: "AI buyer intent", bg: "#5046E5" },
  { key: "LQS", label: "Listing quality", bg: "#3B32C4" },
];

function ScoreBadges() {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 animate-[fadeUp_0.5s_ease_both]"
      style={{ animationDelay: "0.42s" }}
    >
      {BADGES.map(({ key, label, bg }) => (
        <div key={key} className="flex items-center gap-[7px]">
          <span
            className="inline-block w-[13px] h-[13px] rounded-[3px] shrink-0"
            style={{ backgroundColor: bg }}
          />
          {/* Badge text: 13px */}
          <span className="text-[13px] leading-none text-[#4A4F57]">
            <span className="font-semibold text-[#0F1114]">{key}</span>{" "}
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

// -- Hero ----------------------------------------------------------------------
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-[80px] pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Soft radial tint matching image */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse 80% 55% at 50% 25%, #EEEEFF 0%, transparent 65%)",
        }}
      />

      <div className="flex flex-col items-center text-center w-full max-w-[860px] mx-auto gap-5 sm:gap-6">

        {/* Live pill */}
        <LivePill />

        {/* Tag: 14px, semibold, brand colour, not uppercase in image */}
        <p
          className="text-[14px] font-semibold leading-none text-[#5046E5] animate-[fadeUp_0.5s_ease_both]"
          style={{ animationDelay: "0.08s" }}
        >
          Your AI growth agent
        </p>

        {/* H1 — pixel-matched to image:
             Desktop  ~64–68px, weight 800, tight tracking
             Tablet   ~48px
             Mobile   ~34px                                    */}
        <h1
          className="
            font-extrabold text-[#0F1114] tracking-[-0.03em] leading-[1.04]
            text-[34px]
            sm:text-[48px]
            md:text-[60px]
            lg:text-[62px]
            animate-[fadeUp_0.5s_ease_both]
          "
          style={{ animationDelay: "0.14s" }}
        >
          See exactly how much money
          <br className="hidden sm:block" />
          {" "}your listings are{" "}
          <span className="text-[#5046E5]">losing</span>
          <span className="text-[#5046E5]">.</span>
        </h1>

        {/* Sub — 16px, normal weight, muted */}
        <p
          className="text-[15px] sm:text-[16px] leading-[1.6] text-[#6B707A] max-w-[850px] animate-[fadeUp_0.5s_ease_both]"
          style={{ animationDelay: "0.20s" }}
        >
          Paste Amazon listing URL and get a triple-algorithm score, a ranked fix
          list, and the revenue left on the table before you connect anything.
        </p>

        {/* CTA card */}
        <UrlCard />

        {/* Badges */}
        <ScoreBadges />
      </div>
    </section>
  );
}

// -- Page root -----------------------------------------------------------------
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#0F1114] antialiased">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "12px",
            fontSize: "14px",
          },
        }}
      />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Hero />
    </div>
  );
}