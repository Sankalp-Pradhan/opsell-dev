"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import {
  LayoutDashboard,
  Box,
  Sparkles,
  Eye,
  PanelLeftClose,
  PanelLeftOpen,
  LogOut,
} from "lucide-react";

// --- Types -------------------------------------------------------------------

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

// --- Nav Config --------------------------------------------------------------

const NAV_SECTIONS: NavSection[] = [
  {
    title: "Workspace",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { label: "LQS", href: "/dashboard/lqs", icon: Box },
      { label: "Listing Intelligence", href: "/dashboard/listings", icon: Sparkles },
      { label: "Competitor Analysis", href: "/dashboard/competitor-analysis", icon: Eye },
    ],
  },
];

// --- Helpers -----------------------------------------------------------------

function getInitials(name: string | null | undefined): string {
  if (!name) return "?";
  return name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// --- Sub-components ----------------------------------------------------------

interface TooltipProps {
  label: string;
  children: React.ReactNode;
  show: boolean;
}

function Tooltip({ label, children, show }: TooltipProps) {
  return (
    <div className="relative group/tip">
      {children}
      {show && (
        <div
          role="tooltip"
          className="
            pointer-events-none absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2
            bg-neutral-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-md
            whitespace-nowrap z-50
            opacity-0 group-hover/tip:opacity-100 transition-opacity duration-150
            before:content-[''] before:absolute before:right-full before:top-1/2
            before:-translate-y-1/2 before:border-4 before:border-transparent
            before:border-r-neutral-900
          "
        >
          {label}
        </div>
      )}
    </div>
  );
}

interface NavLinkProps {
  item: NavItem;
  compact: boolean;
  active: boolean;
}

function NavLink({ item, compact, active }: NavLinkProps) {
  const Icon = item.icon;

  return (
    <Tooltip label={item.label} show={compact}>
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={`
          flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm transition-colors duration-150
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500
          ${active
            ? "bg-violet-50 text-violet-700"
            : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800"
          }
        `}
      >
        <Icon
          size={17}
          aria-hidden="true"
          className={`flex-shrink-0 ${active ? "text-violet-600" : ""}`}
        />

        <span
          className={`
            overflow-hidden whitespace-nowrap transition-all duration-280
            ${compact ? "w-0 opacity-0" : "w-auto opacity-100"}
          `}
        >
          {item.label}
        </span>

        {item.badge !== undefined && (
          <span
            className={`
              ml-auto flex-shrink-0 bg-violet-600 text-white text-[10px] font-medium
              rounded-full px-1.5 py-0.5 leading-none transition-all duration-280
              ${compact ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}
            `}
          >
            {item.badge}
          </span>
        )}
      </Link>
    </Tooltip>
  );
}

// --- User Avatar -------------------------------------------------------------

interface UserAvatarProps {
  image?: string | null;
  initials: string;
}

function UserAvatar({ image, initials }: UserAvatarProps) {
  if (image) {
    return (
      <img
        src={image}
        alt="Profile"
        referrerPolicy="no-referrer"
        className="w-8 h-8 rounded-full object-cover flex-shrink-0 ring-1 ring-neutral-200"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0 text-white text-xs font-medium"
    >
      {initials}
    </div>
  );
}

// --- Main Sidebar -------------------------------------------------------------

interface SidebarProps {
  /** Controlled: pass in from a layout if you need to sync with other UI */
  defaultCompact?: boolean;
}

export function Sidebar({ defaultCompact = false }: SidebarProps) {
  const pathname = usePathname();
  const [compact, setCompact] = useState(defaultCompact);
  const { data: session, status } = useSession();

  // Derive user display values from session
  const name = session?.user?.name ?? "User";
  const email = session?.user?.email ?? "";
  const image = session?.user?.image ?? null;
  // Pull role from a custom session field if you've added it via callbacks,
  // otherwise fall back to "Owner". Example custom field: session?.user?.role
  const role = (session?.user as any)?.role ?? "Owner";
  const initials = getInitials(name);

  const isLoading = status === "loading";

  return (
    <aside
      aria-label="Main navigation"
      data-compact={compact}
      className={`
        flex flex-col h-full bg-white border-r border-neutral-200
        transition-[width,min-width] duration-280 ease-[cubic-bezier(.4,0,.2,1)]
        overflow-hidden flex-shrink-0
        ${compact ? "w-[60px] min-w-[60px]" : "w-[240px] min-w-[240px]"}
      `}
    >
      {/* -- Top: logo + toggle -- */}
      <div className="flex items-center justify-between px-4 pt-[18px] pb-3.5 flex-shrink-0">
        <div className="flex items-center gap-1 overflow-hidden">
          <span
            className={`
              text-[18px] font-bold text-neutral-900 whitespace-nowrap
              transition-all duration-280
              ${compact ? "w-0 opacity-0" : "w-[80px] opacity-100"}
            `}
          >
            opsell<span className="text-violet-600 font-extrabold">.</span>
          </span>
        </div>

        <button
          onClick={() => setCompact((c) => !c)}
          aria-label={compact ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!compact}
          className="
            flex-shrink-0 w-7 h-7 flex items-center justify-center
            rounded-md border border-neutral-200 text-neutral-400
            hover:bg-neutral-100 hover:text-neutral-600
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500
            transition-colors duration-150
          "
        >
          {compact ? (
            <PanelLeftOpen size={15} aria-hidden="true" />
          ) : (
            <PanelLeftClose size={15} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* -- Nav sections -- */}
      <nav
        className="flex-1 overflow-y-auto overflow-x-hidden px-2.5 pb-2 scrollbar-none"
        aria-label="Sidebar navigation"
      >
        {NAV_SECTIONS.map((section) => (
          <div key={section.title}>
            {/* Section label */}
            <p
              aria-hidden={compact}
              className={`
                text-[10px] font-medium tracking-[.08em] uppercase text-neutral-400
                px-1.5 transition-all duration-280 overflow-hidden
                ${compact ? "h-2 opacity-0" : "h-[30px] pt-3 pb-1 opacity-100"}
              `}
            >
              {section.title}
            </p>

            {/* Nav items */}
            <ul role="list" className="space-y-px">
              {section.items.map((item) => (
                <li key={item.href}>
                  <NavLink
                    item={item}
                    compact={compact}
                    active={
                      pathname === item.href ||
                      pathname?.startsWith(item.href + "/")
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Divider */}
        <div className="my-2 border-t border-neutral-100" role="separator" />
      </nav>

      {/* -- Profile -- */}
      <div className="flex-shrink-0 border-t border-neutral-100 p-2.5">
        {isLoading ? (
          /* Loading skeleton */
          <div className="flex items-center gap-2.5 px-2 py-1.5">
            <div className="w-8 h-8 rounded-full bg-neutral-200 animate-pulse flex-shrink-0" />
            {!compact && (
              <div className="flex-1 space-y-1.5">
                <div className="h-3 bg-neutral-200 rounded animate-pulse w-24" />
                <div className="h-2.5 bg-neutral-200 rounded animate-pulse w-16" />
              </div>
            )}
          </div>
        ) : (
          <Tooltip label={email || name} show={compact}>
            <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-neutral-100 transition-colors duration-150 cursor-default group">
              {/* Avatar */}
              <UserAvatar image={image} initials={initials} />

              {/* Info */}
              <div
                className={`
                  overflow-hidden transition-all duration-280 min-w-0
                  ${compact ? "w-0 opacity-0" : "flex-1 opacity-100"}
                `}
              >
                <p
                  className="text-[13px] font-medium text-neutral-900 whitespace-nowrap truncate"
                  title={email || name}
                >
                  {email || name}
                </p>
                <p className="text-[11px] text-neutral-400 whitespace-nowrap truncate">
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="text-violet-600 hover:underline focus-visible:outline-none"
                  >
                    sign out
                  </button>
                </p>
              </div>

              {/* Sign out icon (compact mode only) */}
              {compact && (
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  aria-label="Sign out"
                  className="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-neutral-700 transition-opacity"
                >
                  <LogOut size={14} aria-hidden="true" />
                </button>
              )}
            </div>
          </Tooltip>
        )}
      </div>
    </aside>
  );
}