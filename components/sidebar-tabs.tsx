"use client";

import React, { SVGProps } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import HomeIcon from "@/assets/icons/home.svg";
import HomeActiveIcon from "@/assets/icons/home-active.svg";
import SearchIcon from "@/assets/icons/search.svg";
import SearchActiveIcon from "@/assets/icons/search-active.svg";
import LibraryIcon from "@/assets/icons/library.svg";
import LibraryActiveIcon from "@/assets/icons/library-active.svg";

interface Props {
  children: React.ReactNode;
  pathname: string;
  icon: React.FC<SVGProps<SVGElement>>;
  activeIcon: React.FC<SVGProps<SVGElement>>;
}

function Tab({
  children,
  pathname,
  icon: Icon,
  activeIcon: ActiveIcon,
}: Props) {
  const currentPathname = usePathname();

  return (
    <Link
      href={pathname}
      draggable={false}
      className={cn(
        "flex h-10 items-center gap-4 px-4 text-sm font-bold leading-normal transition-colors hover:text-white",
        currentPathname === pathname && "text-white",
      )}
      {...(currentPathname === pathname && { "aria-current": "page" })}
    >
      <Icon
        role="img"
        aria-hidden
        className={cn(
          "size-6",
          currentPathname === pathname ? "hidden" : "block",
        )}
      />
      <ActiveIcon
        role="img"
        aria-hidden
        className={cn(
          "size-6",
          currentPathname === pathname ? "block" : "hidden",
        )}
      />
      {children}
    </Link>
  );
}

export default function SidebarTabs() {
  return (
    <nav>
      <ul>
        <li className="px-2">
          <Tab icon={HomeIcon} activeIcon={HomeActiveIcon} pathname="/">
            Home
          </Tab>
        </li>
        <li className="px-2">
          <Tab
            icon={SearchIcon}
            activeIcon={SearchActiveIcon}
            pathname="/search"
          >
            Search
          </Tab>
        </li>
        <li className="px-2">
          <Tab icon={LibraryIcon} activeIcon={LibraryActiveIcon} pathname="/">
            Library
          </Tab>
        </li>
      </ul>
    </nav>
  );
}
