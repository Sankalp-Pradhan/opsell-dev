"use client";

import { useState } from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

// --- Types -------------------------------------------------------------------

interface TopbarProps {
  /** Page title shown on the left */
  title?: string;
  /** Number of unread notifications */
  notificationCount?: number;
  /** Workspace / account info */
  workspace?: {
    name: string;
    initial: string;
  };
  /** Search placeholder */
  searchPlaceholder?: string;
  /** Called when workspace dropdown is clicked */
  onWorkspaceClick?: () => void;
  /** Called when bell is clicked */
  onNotificationsClick?: () => void;
  /** Called when search value changes */
  onSearch?: (value: string) => void;
}

// --- Component ---------------------------------------------------------------

export function Topbar({
  title = "Dashboard",
  notificationCount = 0,
  workspace = { name: "Acme Beauty Co.", initial: "A" },
  searchPlaceholder = "Search",
  onWorkspaceClick,
  onNotificationsClick,
  onSearch,
}: TopbarProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearch?.(e.target.value);
  };

  const cappedCount = notificationCount > 9 ? "9+" : notificationCount;

  return (
    <header className="
      flex items-center justify-between
      h-14 px-6
      bg-white border-b border-neutral-200
      flex-shrink-0
    ">
      {/* Left: page title */}
      <h1 className="text-lg font-semibold text-neutral-900 whitespace-nowrap">
        {title}
      </h1>

      {/* Right: search + bell + workspace */}
      <div className="flex items-center gap-3">

        {/* Search */}
        {/* <div className="relative">
          <Search
            size={14}
            aria-hidden="true"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
          />
          <input
            type="search"
            value={searchValue}
            onChange={handleSearch}
            placeholder={searchPlaceholder}
            aria-label="Search"
            className="
              h-8 pl-8 pr-3 w-[220px]
              text-sm text-neutral-800 placeholder:text-neutral-400
              bg-neutral-50 border border-neutral-200 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
              transition-colors duration-150
            "
          />
        </div> */}

        {/* Bell */}
        {/* <button
          onClick={onNotificationsClick}
          aria-label={
            notificationCount > 0
              ? `${notificationCount} unread notifications`
              : "Notifications"
          }
          className="
            relative w-8 h-8 flex items-center justify-center
            text-neutral-500 hover:text-neutral-800
            rounded-lg hover:bg-neutral-100
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500
            transition-colors duration-150
          "
        >
          <Bell size={17} aria-hidden="true" />
          {notificationCount > 0 && (
            <span
              aria-hidden="true"
              className="
                absolute top-1 right-1
                min-w-[14px] h-[14px] px-0.5
                bg-red-500 text-white text-[9px] font-semibold
                rounded-full flex items-center justify-center leading-none
              "
            >
              {cappedCount}
            </span>
          )}
        </button> */}

        {/* Workspace switcher */}
        {/* <button
          onClick={onWorkspaceClick}
          aria-label={`Current workspace: ${workspace.name}. Click to switch.`}
          className="
            flex items-center gap-2 h-8 pl-1.5 pr-2.5
            bg-neutral-900 text-white
            rounded-lg
            hover:bg-neutral-800
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500
            transition-colors duration-150
          "
        > */}
          {/* Avatar */}
          {/* <div
            aria-hidden="true"
            className="
              w-5 h-5 rounded-sm bg-white/20
              flex items-center justify-center
              text-[11px] font-semibold text-white
              flex-shrink-0
            "
          >
            {workspace.initial}
          </div>

          <span className="text-[13px] font-medium whitespace-nowrap max-w-[140px] truncate">
            {workspace.name}
          </span>

          <ChevronDown size={13} aria-hidden="true" className="text-white/60 flex-shrink-0" />
        </button> */}

      </div>
    </header>
  );
}