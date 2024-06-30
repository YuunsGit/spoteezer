"use client";

import React from "react";
import ArrowIcon from "@/assets/icons/arrow.svg";
import ExpandIcon from "@/assets/icons/expand.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

export default function Header({ children }: Props) {
  const router = useRouter();

  return (
    <header
      aria-label="Header bar and user profile"
      className="sticky top-0 flex h-16 items-center justify-between px-8 py-4"
    >
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
          className="flex size-8 items-center justify-center rounded-full bg-black bg-opacity-70 hover:text-white"
        >
          <ArrowIcon aria-hidden role="img" className="size-6" />
        </button>
      </div>
      {children}
      <button
        aria-label="User profile"
        type="button"
        className="hover:bg-secondary flex items-center gap-2 rounded-full bg-black p-0.5 pr-3 text-white"
      >
        <figure title="Yunus Emre Kepenek">
          <Image
            src="https://e-cdns-images.dzcdn.net/images/user/5e40ab22a9b07220c29f4519b16c0866/56x56-000000-80-0-0.jpg"
            alt="User profile"
            className="rounded-full"
            width={28}
            height={28}
          />
        </figure>
        <span className="line-clamp-1 max-w-28 overflow-hidden break-all text-sm font-bold">
          Yunus Emre Kepenek
        </span>
        <ExpandIcon role="img" aria-hidden className="size-4" />
      </button>
    </header>
  );
}
