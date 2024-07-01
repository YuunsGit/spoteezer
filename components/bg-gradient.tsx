"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function BackgroundGradient() {
  const pathname = usePathname();

  return (
    <div
      aria-hidden
      className={cn(
        "absolute inset-0 -z-10 bg-gradient-to-b from-[#3333A3] from-[16%] bg-[length:100%_500px] bg-no-repeat",
        pathname !== "/" && "hidden",
      )}
    />
  );
}
