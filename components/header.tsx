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
    <section className="sticky top-0 flex items-center justify-between px-10 py-5">
      <div className="flex gap-5">
        <button
          aria-label="Go back"
          onClick={() => router.back()}
          className="transition-colors hover:text-white"
        >
          <ArrowIcon className="size-10 rotate-180" />
        </button>
        <button
          aria-label="Go forward"
          onClick={() => router.forward()}
          className="transition-colors hover:text-white"
        >
          <ArrowIcon className="size-10" />
        </button>
      </div>
      {children}
      <div>
        <button
          aria-label="Profile"
          onClick={() => router.push("/")}
          className="flex items-center gap-2.5 rounded-full bg-black p-[3px] pr-3 transition-colors hover:text-white"
        >
          <Image
            src="https://e-cdns-images.dzcdn.net/images/user/5e40ab22a9b07220c29f4519b16c0866/56x56-000000-80-0-0.jpg"
            alt="User profile"
            className="rounded-full"
            width={34}
            height={34}
          />
          <span className="font-bold">Yuuns</span>
          <ExpandIcon className="size-4" />
        </button>
      </div>
    </section>
  );
}
