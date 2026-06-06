"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

// ── Types ─────────────────────────────────────────────────────────────────────
interface IconProps {
  d: string;
  size?: number;
  strokeWidth?: number;
  fill?: string;
  stroke?: string;
}

interface StatCardProps {
  locked?: boolean;
  value?: string;
  label?: string;
  trend?: string;
}

interface NavItem {
  name: string;
  icon: ReactNode;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

// ── Icons ─────────────────────────────────────────────────────────────────────
const Icon = ({ d, size = 16, strokeWidth = 1.7, fill = "none", stroke = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={d} />
  </svg>
);

const HomeIcon = () => <Icon d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />;

const ListIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const SparkIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
  </svg>
);

const TrendUpIcon = () => <Icon d="M22 7l-9.5 9.5-4-4L2 19M22 7h-6M22 7v6" />;
const DiamondIcon = () => <Icon d="M12 2l10 10-10 10L2 12z" />;
const EditIcon = () => <Icon d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />;

const BarChartIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const CreditCardIcon = () => <Icon d="M1 4h22v16H1zM1 10h22" />;
const SettingsIcon = () => <Icon d="M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />;
const BellIcon = () => <Icon d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />;
const SearchIcon = () => <Icon d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" />;
const CloseIcon = () => <Icon d="M18 6L6 18M6 6l12 12" />;

const LockIcon = () => (
  <Icon
    d="M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 11V7a5 5 0 0110 0v4"
    size={14}
  />
);



// ── Data ──────────────────────────────────────────────────────────────────────
const barData: number[] = [38, 55, 42, 68, 72, 85, 60, 91, 78, 95, 65, 80];

// ── StatCard ──────────────────────────────────────────────────────────────────
function StatCard({ locked = false, value, label, trend }: StatCardProps) {
  return (
    <div className="relative flex-1 min-w-0 bg-white border border-n-border rounded-lg p-5 shadow-elev-1">
      {locked ? (
        <>
          <div className="flex flex-col gap-2">
            <div className="h-3.5 w-[55%] rounded-md bg-n-border" />
            <div className="h-7 w-[70%] rounded-md bg-n-border" />
            <div className="h-3 w-[40%] rounded-md bg-n-border" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-n-800 text-white text-[12px] font-semibold px-3.5 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5">
            <LockIcon /> Unlocks after connection
          </div>
        </>
      ) : (
        <>
          <p className="text-ds-caption text-n-500 mb-1.5 tracking-wide">{label}</p>
          <p className="text-[26px] font-bold text-n-900 leading-tight">{value}</p>
          {trend && (
            <span className="mt-1.5 text-ds-caption text-success font-semibold flex items-center gap-1">
              <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M18 15l-6-6-6 6" />
              </svg>
              {trend}
            </span>
          )}
        </>
      )}
    </div>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
export default function OpsellDashboard() {
  const [bannerVisible, setBannerVisible] = useState<boolean>(true);
  const [activeNav, setActiveNav] = useState<string>("Dashboard");

  const navGroups: NavGroup[] = [
    {
      label: "WORKSPACE",
      items: [
        { name: "Dashboard", icon: <HomeIcon /> },
        { name: "Catalog", icon: <ListIcon /> },
        { name: "Insights & Actions", icon: <SparkIcon /> },
        { name: "Verified Lift", icon: <TrendUpIcon /> },
      ],
    },
    {
      label: "LISTING INTELLIGENCE",
      items: [
        { name: "Listing Detail", icon: <DiamondIcon /> },
        { name: "Optimiser", icon: <EditIcon /> },
        { name: "Competitor Gap", icon: <BarChartIcon /> },
      ],
    },
    {
      label: "ACCOUNT",
      items: [
        { name: "Billing", icon: <CreditCardIcon /> },
        { name: "Settings", icon: <SettingsIcon /> },
      ],
    },
  ];
  const router = useRouter();


  return (
    <div
      className="flex h-screen bg-n-50 font-body text-ds-body text-n-900 overflow-hidden cursor-pointer"
      onClick={() => router.push("/pricing")}
    >
      {/* ── Sidebar ── */}
      <aside className="w-60 min-w-[240px] bg-white border-r border-n-border flex flex-col pb-4 z-10">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-0 no-underline px-3 py-2"
        >
          <Image
            src="/logo-nb.png"
            alt="Opsell Logo"
            width={50}
            height={50}
            className="shrink-0"
          />
          <span className="font-display text-2xl font-extrabold text-n-900 tracking-[-0.03em]">
            opsell
          </span>
          <span className="font-display text-xl font-extrabold text-brand">.</span>
        </Link>

        {/* Nav */}
        <nav className="flex-1 px-2.5 overflow-y-auto">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-6">
              <p className="text-[10.5px] font-semibold tracking-[0.08em] text-n-400 px-2.5 mb-1">
                {group.label}
              </p>
              {group.items.map((item) => {
                const active = activeNav === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveNav(item.name)}
                    className={`
                      w-full flex items-center gap-2.5 px-2.5 py-2 rounded-md border-none cursor-pointer
                      text-ds-body text-left transition-colors duration-150
                      ${active
                        ? "bg-brand-light text-brand font-semibold"
                        : "bg-transparent text-n-600 font-normal hover:bg-n-100"
                      }
                    `}
                  >
                    <span className={active ? "opacity-100" : "opacity-70"}>
                      {item.icon}
                    </span>
                    {item.name}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Free score pill */}
        <div className="mx-3 bg-n-50 border border-n-border rounded-lg p-3.5">
          <p className="font-semibold text-ds-body-sm text-n-900 mb-0.5">Free score</p>
          <p className="text-ds-caption text-n-500 mb-2">1 listing scored</p>
          <div className="h-1 rounded-full bg-n-border overflow-hidden">
            <div className="w-[20%] h-full bg-brand rounded-full" />
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Topbar */}
        <header className="h-14 bg-white border-b border-n-border flex items-center px-6 gap-4 shrink-0">
          <h1 className="text-ds-h3 font-semibold text-n-900 shrink-0">Dashboard</h1>
          <div className="flex-1" />

          {/* Search */}
          <div className="flex items-center gap-2 bg-n-50 border border-n-border rounded-md px-3 h-9 w-[220px]">
            <span className="text-n-400 shrink-0">
              <SearchIcon />
            </span>
            <input
              placeholder="Search SKUs, keywords…"
              className="border-none bg-transparent outline-none text-ds-body-sm text-n-600 w-full placeholder:text-n-400"
            />
          </div>

          {/* Bell */}
          <button className="w-9 h-9 rounded-md border border-n-border bg-white cursor-pointer flex items-center justify-center text-n-600 hover:bg-n-50 transition-colors">
            <BellIcon />
          </button>

          {/* Avatar */}
          <div className="w-[34px] h-[34px] rounded-full bg-brand flex items-center justify-center text-white text-ds-caption font-bold shrink-0">
            RK
          </div>
        </header>

        {/* Banner */}
        {bannerVisible && (
          <div className="bg-brand text-white flex items-center px-6 py-2.5 gap-4 shrink-0">
            <p className="font-semibold text-[13.5px] flex-1">Welcome to Opsell.</p>
            <div className="flex items-center gap-3">
              <span className="text-[12.5px] opacity-85">Step 1 of 2: Connect your marketplace</span>
              <div className="w-24 h-1 rounded-full bg-white/25 overflow-hidden">
                <div className="w-[25%] h-full bg-white rounded-full" />
              </div>
            </div>
            <button
              onClick={() => setBannerVisible(false)}
              className="bg-transparent border-none text-white cursor-pointer opacity-70 flex items-center hover:opacity-100 transition-opacity"
            >
              <CloseIcon />
            </button>
          </div>
        )}

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-7 pt-7 pb-28">

          {/* Greeting */}
          <div className="mb-6">
            <h2 className="text-[28px] font-bold text-n-900 tracking-[-0.5px] mb-1">
              Good morning, Seller
            </h2>
          </div>

          {/* Stat cards */}
          <div className="flex gap-3.5 mb-5">
            <StatCard locked />
            <StatCard locked />
            <StatCard locked />
            <StatCard locked />
          </div>

          {/* Lower panels */}
          <div className="flex gap-3.5">

            {/* Revenue chart */}
            <div className="flex-[2] bg-white border border-n-border rounded-lg p-5 shadow-elev-1 relative min-h-[300px]">
              <div className="h-3.5 w-44 rounded-md bg-n-border mb-5" />
              <div className="flex items-end gap-2 h-48 px-1 blur-sm opacity-70">
                {barData.map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className={`
                      flex-1 rounded-t-[4px]
                      ${i === barData.length - 1 || i === barData.length - 4
                        ? "bg-brand"
                        : "bg-brand-mid opacity-60"
                      }
                    `}
                  />
                ))}
              </div>
              <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-n-800 text-white text-[12.5px] font-semibold px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-1.5 shadow-elev-3">
                <LockIcon /> Unlocks after marketplace connection
              </div>
            </div>

            {/* Competitor pricing */}
            <div className="flex-1 bg-white border border-n-border rounded-lg p-5 shadow-elev-1 relative">
              <div className="h-3.5 w-36 rounded-md bg-n-border mb-5" />
              <div className="flex flex-col gap-4 blur-sm opacity-60">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div
                      className="h-3 rounded bg-n-border"
                      style={{ width: i % 2 === 0 ? 110 : 90 }}
                    />
                    <div className="h-3 w-12 rounded bg-n-border" />
                  </div>
                ))}
              </div>
              <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-n-800 text-white text-[12.5px] font-semibold px-4 py-2 rounded-full whitespace-nowrap shadow-elev-3">
                Live competitor pricing
              </div>
            </div>
          </div>
        </main>

        {/* Bottom CTA bar */}
        <div className="fixed bottom-0 left-60 right-0 bg-white border-t border-n-border px-6 py-2.5 flex items-center justify-between z-40">
          <span className="text-[12.5px] text-n-500 max-w-[75%]">
            Your listing was scored. Connect a marketplace to unlock full analytics and competitor insights.
          </span>
          <button className="bg-brand text-white border-none rounded-lg px-5 py-3 font-semibold text-ds-body cursor-pointer shadow-[0_4px_16px_rgba(80,70,229,0.35)] font-body shrink-0 hover:bg-brand-dark transition-colors">
            Connect Amazon
          </button>
        </div>
      </div>
    </div>
  );
}