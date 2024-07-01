import React from "react";
import ExpandIcon from "@/assets/icons/expand.svg";
import UserIcon from "@/assets/icons/user.svg";
import Image from "next/image";
import NavButtons from "@/components/nav-buttons";
import { UserResponse } from "@/app/types";

interface Props {
  children: React.ReactNode;
}

export default async function Header({ children }: Props) {
  let user: UserResponse | null = null;

  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/user/6136710981",
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    user = await res.json();
  } catch (e) {
    console.error("An error occurred while fetching the user data.", e);
  }

  return (
    <header
      aria-label="Header bar and user profile"
      className="z-40 flex h-16 items-center justify-between px-4 py-4 [grid-area:header] lg:px-8"
    >
      <NavButtons />
      {children}
      <button
        aria-label="User profile"
        type="button"
        className="flex items-center gap-2 rounded-full bg-black p-0.5 text-white hover:bg-secondary lg:pr-1.5"
      >
        <figure title="Yunus Emre Kepenek">
          {user && user.picture_small ? (
            <Image
              src={user.picture_small}
              alt="User profile"
              className="rounded-full"
              width={28}
              height={28}
            />
          ) : (
            <div className="flex size-[28px] items-center justify-center rounded-full bg-[#535353]">
              <UserIcon role="img" aria-hidden className="size-4" />
            </div>
          )}
        </figure>
        <span className="hidden max-w-28 overflow-hidden break-all text-sm font-bold lg:line-clamp-1">
          {(user && user.name) || "Guest"}
        </span>
        <ExpandIcon role="img" aria-hidden className="hidden size-4 lg:block" />
      </button>
    </header>
  );
}
