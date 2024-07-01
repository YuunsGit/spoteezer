"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type props = {
  children: React.ReactNode;
};

export default function HeaderWrapper({ children }: props) {
  const pathname = usePathname();

  return (
    <header
      aria-label="Header bar and user profile"
      className={cn(
        "z-40 flex h-16 items-center justify-between gap-4 px-4 py-4 [grid-area:header] lg:px-8",
        pathname === "/" ? "bg-[#3333A3]" : "bg-background",
      )}
    >
      {children}
    </header>
  );
}
