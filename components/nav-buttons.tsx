"use client";

import ArrowIcon from "@/assets/icons/arrow.svg";
import React from "react";
import { useRouter } from "next/navigation";

export default function NavButtons() {
  const router = useRouter();

  return (
    <div className="flex gap-4">
      <button
        aria-label="Go back"
        onClick={() => router.back()}
        className="flex size-8 items-center justify-center rounded-full bg-black bg-opacity-70 hover:text-white"
      >
        <ArrowIcon aria-hidden role="img" className="size-6 rotate-180" />
      </button>
      <button
        aria-label="Go forward"
        onClick={() => router.forward()}
        className="hidden size-8 items-center justify-center rounded-full bg-black bg-opacity-70 hover:text-white lg:flex"
      >
        <ArrowIcon aria-hidden role="img" className="size-6" />
      </button>
    </div>
  );
}
