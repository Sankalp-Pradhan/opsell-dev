"use client";


import { useState, CSSProperties, ReactNode } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────
interface IconProps {
  d: string;
  size?: number;
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
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

interface Competitor {
  name: string;
  val: string;
}

// ── Icons ─────────────────────────────────────────────────────────────────────
const Icon = ({
  d,
  size = 16,
  stroke = "currentColor",
  fill = "none",
  strokeWidth = 1.7,
}: IconProps) => (
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

const HomeIcon = () => (
  <Icon d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
);
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
const TrendUpIcon = () => (
  <Icon d="M22 7l-9.5 9.5-4-4L2 19M22 7h-6M22 7v6" />
);
const DiamondIcon = () => <Icon d="M12 2l10 10-10 10L2 12z" />;
const EditIcon = () => (
  <Icon d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
);
const BarChartIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);
const CreditCardIcon = () => <Icon d="M1 4h22v16H1zM1 10h22" />;
const SettingsIcon = () => (
  <Icon d="M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
);
const BellIcon = () => (
  <Icon d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
);
const SearchIcon = () => (
  <Icon d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" />
);
const ChevronLeftIcon = () => <Icon d="M15 18l-6-6 6-6" />;
const ChevronRightIcon = () => <Icon d="M9 18l6-6-6-6" />;
const GridIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);
const CloseIcon = () => <Icon d="M18 6L6 18M6 6l12 12" />;
const LockIcon = () => (
  <Icon d="M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 11V7a5 5 0 0110 0v4" />
);

// ── Data ──────────────────────────────────────────────────────────────────────
const barData: number[] = [38, 55, 42, 68, 72, 85, 60, 91, 78, 95, 65, 80];

const competitors: Competitor[] = [
  { name: "Competitor A", val: "—" },
  { name: "Competitor B", val: "—" },
  { name: "Competitor C", val: "—" },
  { name: "Competitor D", val: "—" },
];

// ── StatCard ──────────────────────────────────────────────────────────────────
function StatCard({ locked = false, value, label, trend }: StatCardProps) {
  const cardStyle: CSSProperties = {
    background: "#fff",
    border: "1px solid #E2E4E8",
    borderRadius: 12,
    padding: "20px 20px 16px",
    flex: 1,
    minWidth: 0,
    position: "relative",
    boxShadow: "0 1px 2px rgba(15,17,20,0.06)",
  };

  return (
    <div style={cardStyle}>
      {locked ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ height: 14, width: "55%", borderRadius: 6, background: "#E2E4E8" }} />
          <div style={{ height: 28, width: "70%", borderRadius: 6, background: "#E2E4E8" }} />
          <div style={{ height: 12, width: "40%", borderRadius: 6, background: "#E2E4E8" }} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              background: "#1C1F24",
              color: "#fff",
              fontSize: 12,
              fontWeight: 600,
              padding: "6px 14px",
              borderRadius: 999,
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <LockIcon /> Unlocks after connection
          </div>
        </div>
      ) : (
        <>
          <p style={{ fontSize: 12, color: "#6B707A", marginBottom: 6, letterSpacing: "0.01em" }}>
            {label}
          </p>
          <p style={{ fontSize: 26, fontWeight: 700, color: "#0F1114", lineHeight: 1.1 }}>
            {value}
          </p>
          {trend && (
            <span
              style={{
                fontSize: 12,
                color: "#16A34A",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 3,
                marginTop: 6,
              }}
            >
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

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#F8F9FA",
        fontFamily: "'DM Sans', system-ui, sans-serif",
        fontSize: 14,
        color: "#1C1F24",
      }}
    >
      {/* ── Sidebar ── */}
      <aside
        style={{
          width: 240,
          minWidth: 240,
          background: "#fff",
          borderRight: "1px solid #E2E4E8",
          display: "flex",
          flexDirection: "column",
          padding: "0 0 16px",
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <div style={{ padding: "18px 20px 14px", display: "flex", alignItems: "center", gap: 6 }}>
          <div
            style={{
              width: 28,
              height: 28,
              background: "#5046E5",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width={14} height={14} viewBox="0 0 24 24" fill="white">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="5" fill="#5046E5" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 17, color: "#0F1114", letterSpacing: "-0.3px" }}>
            opsell
          </span>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#5046E5",
              marginLeft: 1,
              marginTop: 2,
              display: "inline-block",
            }}
          />
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "0 10px", overflowY: "auto" }}>
          {navGroups.map((group) => (
            <div key={group.label} style={{ marginBottom: 24 }}>
              <p
                style={{
                  fontSize: 10.5,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#8C919A",
                  padding: "0 10px",
                  marginBottom: 4,
                }}
              >
                {group.label}
              </p>
              {group.items.map((item) => {
                const active = activeNav === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveNav(item.name)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 10px",
                      borderRadius: 8,
                      border: "none",
                      cursor: "pointer",
                      background: active ? "#F0EFFF" : "transparent",
                      color: active ? "#5046E5" : "#4A4F57",
                      fontWeight: active ? 600 : 400,
                      fontSize: 14,
                      textAlign: "left",
                      transition: "background 0.15s",
                    }}
                  >
                    <span style={{ opacity: active ? 1 : 0.7 }}>{item.icon}</span>
                    {item.name}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Free score pill */}
        <div
          style={{
            margin: "0 12px",
            background: "#F8F9FA",
            border: "1px solid #E2E4E8",
            borderRadius: 10,
            padding: "12px 14px",
          }}
        >
          <p style={{ fontWeight: 600, fontSize: 13, color: "#0F1114", marginBottom: 2 }}>Free score</p>
          <p style={{ fontSize: 12, color: "#6B707A", marginBottom: 8 }}>1 listing scored</p>
          <div style={{ height: 4, borderRadius: 99, background: "#E2E4E8", overflow: "hidden" }}>
            <div style={{ width: "20%", height: "100%", background: "#5046E5", borderRadius: 99 }} />
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, overflow: "hidden" }}>
        {/* Topbar */}
        <header
          style={{
            height: 56,
            background: "#fff",
            borderBottom: "1px solid #E2E4E8",
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            gap: 16,
            flexShrink: 0,
          }}
        >
          <h1 style={{ fontSize: 16, fontWeight: 600, color: "#0F1114", flex: "none" }}>Dashboard</h1>
          <div style={{ flex: 1 }} />
          {/* Search */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#F8F9FA",
              border: "1px solid #E2E4E8",
              borderRadius: 8,
              padding: "0 12px",
              height: 36,
              width: 220,
            }}
          >
            <span style={{ color: "#8C919A" }}>
              <SearchIcon />
            </span>
            <input
              placeholder="Search SKUs, keywords…"
              style={{
                border: "none",
                background: "transparent",
                outline: "none",
                fontSize: 13,
                color: "#4A4F57",
                width: "100%",
              }}
            />
          </div>
          {/* Bell */}
          <button
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              border: "1px solid #E2E4E8",
              background: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#4A4F57",
            }}
          >
            <BellIcon />
          </button>
          {/* Avatar */}
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "#5046E5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            RK
          </div>
        </header>

        {/* Banner */}
        {bannerVisible && (
          <div
            style={{
              background: "#5046E5",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              padding: "10px 24px",
              gap: 16,
              flexShrink: 0,
            }}
          >
            <p style={{ fontWeight: 600, fontSize: 13.5, flex: 1 }}>Welcome to Opsell.</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 12.5, opacity: 0.85 }}>
                Step 1 of 2: Connect your marketplace
              </span>
              <div
                style={{
                  width: 100,
                  height: 4,
                  borderRadius: 99,
                  background: "rgba(255,255,255,0.25)",
                  overflow: "hidden",
                }}
              >
                <div style={{ width: "25%", height: "100%", background: "#fff", borderRadius: 99 }} />
              </div>
            </div>
            <button
              onClick={() => setBannerVisible(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                opacity: 0.7,
                display: "flex",
              }}
            >
              <CloseIcon />
            </button>
          </div>
        )}

        {/* Content */}
        <main style={{ flex: 1, overflowY: "auto", padding: "28px 28px 100px" }}>
          {/* Greeting */}
          <div style={{ marginBottom: 24 }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#0F1114",
                letterSpacing: "-0.5px",
                marginBottom: 4,
              }}
            >
              Good morning, Ravi
            </h2>
            <p style={{ fontSize: 13.5, color: "#6B707A" }}>
              Glow Theory · connect a marketplace to bring this workspace to life
            </p>
          </div>

          {/* Stat cards */}
          <div style={{ display: "flex", gap: 14, marginBottom: 20 }}>
            <StatCard value="$742.80" label="Total Revenue" trend="+12.4% vs last week" />
            <StatCard locked />
            <StatCard value="$1.28" label="Avg. Price" trend="+0.8%" />
            <StatCard value="$4.09" label="Avg. CPC" trend="-5.1%" />
          </div>

          {/* Lower panels */}
          <div style={{ display: "flex", gap: 14 }}>
            {/* Revenue chart */}
            <div
              style={{
                flex: 2,
                background: "#fff",
                border: "1px solid #E2E4E8",
                borderRadius: 12,
                padding: "20px 20px 16px",
                boxShadow: "0 1px 2px rgba(15,17,20,0.06)",
                position: "relative",
                minHeight: 300,
              }}
            >
              <div style={{ height: 14, width: 180, borderRadius: 6, background: "#E2E4E8", marginBottom: 20 }} />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 8,
                  height: 200,
                  padding: "0 4px",
                  filter: "blur(3px)",
                  opacity: 0.7,
                }}
              >
                {barData.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      borderRadius: "4px 4px 0 0",
                      background:
                        i === barData.length - 1 || i === barData.length - 4
                          ? "#5046E5"
                          : "#B5B0FF",
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "55%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  background: "#1C1F24",
                  color: "#fff",
                  fontSize: 12.5,
                  fontWeight: 600,
                  padding: "8px 18px",
                  borderRadius: 999,
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  boxShadow: "0 4px 16px rgba(15,17,20,0.2)",
                }}
              >
                <LockIcon /> Unlocks after marketplace connection
              </div>
            </div>

            {/* Competitor pricing */}
            <div
              style={{
                flex: 1,
                background: "#fff",
                border: "1px solid #E2E4E8",
                borderRadius: 12,
                padding: "20px",
                boxShadow: "0 1px 2px rgba(15,17,20,0.06)",
                position: "relative",
              }}
            >
              <div style={{ height: 14, width: 150, borderRadius: 6, background: "#E2E4E8", marginBottom: 20 }} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  filter: "blur(3px)",
                  opacity: 0.6,
                }}
              >
                {[...competitors, ...competitors].map((_, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <div style={{ height: 12, width: i % 2 === 0 ? 110 : 90, borderRadius: 4, background: "#E2E4E8" }} />
                    <div style={{ height: 12, width: 50, borderRadius: 4, background: "#E2E4E8" }} />
                  </div>
                ))}
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "55%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  background: "#1C1F24",
                  color: "#fff",
                  fontSize: 12.5,
                  fontWeight: 600,
                  padding: "8px 18px",
                  borderRadius: 999,
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 16px rgba(15,17,20,0.2)",
                }}
              >
                Live competitor pricing
              </div>
            </div>
          </div>
        </main>

        {/* Bottom stepper pill */}
        <div
          style={{
            position: "fixed",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#1C1F24",
              borderRadius: 999,
              padding: "8px 6px 8px 14px",
              gap: 12,
              boxShadow: "0 8px 24px rgba(15,17,20,0.22)",
            }}
          >
            <button
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "none",
                cursor: "pointer",
                color: "#fff",
                borderRadius: "50%",
                width: 28,
                height: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ChevronLeftIcon />
            </button>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "#fff", fontWeight: 600, fontSize: 13.5 }}>Empty dashboard</p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, letterSpacing: "0.05em", marginTop: 1 }}>
                04 / 5 · Free Score flow
              </p>
            </div>
            <button
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "none",
                cursor: "pointer",
                color: "#fff",
                borderRadius: "50%",
                width: 28,
                height: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ChevronRightIcon />
            </button>
            <button
              style={{
                background: "#5046E5",
                border: "none",
                cursor: "pointer",
                color: "#fff",
                borderRadius: "50%",
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(80,70,229,0.4)",
              }}
            >
              <GridIcon />
            </button>
          </div>
        </div>

        {/* Connect Amazon CTA */}
        <div style={{ position: "fixed", bottom: 24, right: 28, zIndex: 50 }}>
          <button
            style={{
              background: "#5046E5",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "12px 22px",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(80,70,229,0.35)",
              fontFamily: "inherit",
            }}
          >
            Connect Amazon
          </button>
        </div>

        {/* Bottom ticker */}
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 240,
            right: 0,
            background: "#fff",
            borderTop: "1px solid #E2E4E8",
            padding: "10px 24px",
            display: "flex",
            alignItems: "center",
            zIndex: 40,
          }}
        >
          <span style={{ fontSize: 12.5, color: "#6B707A" }}>
            Your listing was scored. Connect a marketplace to unlock full analytics and competitor insights.
          </span>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button:hover { filter: brightness(0.96); }
      `}</style>
    </div>
  );
}