"use client";

import AddFriendIcon from "@/assets/icons/add-friend.svg";
import CloseIcon from "@/assets/icons/close.svg";
import AnonFriend from "@/assets/icons/anon-friend.svg";
import Link from "next/link";
import { useState } from "react";

export default function RightSidebar() {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);

  if (!rightSidebarOpen) {
    return null;
  }

  return (
    <aside
      aria-label="Right sidebar"
      className="w-[270px] overflow-hidden bg-black [grid-area:right-sidebar]"
    >
      <div className="flex items-center justify-between p-2 pl-4">
        <h2 className="font-bold text-white">Friend activity</h2>
        <button
          aria-label="Add friend"
          className="ml-auto flex size-8 items-center justify-center rounded-full bg-transparent transition-colors hover:bg-[hsla(0,0%,100%,.1)] hover:text-white active:opacity-50"
        >
          <AddFriendIcon role="img" aria-hidden className="size-4" />
        </button>
        <button
          aria-label="Close"
          onClick={() => setRightSidebarOpen(false)}
          className="flex size-8 items-center justify-center rounded-full bg-transparent transition-colors hover:bg-[hsla(0,0%,100%,.1)] hover:text-white active:opacity-50"
        >
          <CloseIcon role="img" aria-hidden className="size-4" />
        </button>
      </div>
      <div className="mt-4 space-y-4 px-4 py-2 text-sm">
        <p>
          Let friends and followers on Spotify see what you&apos;re listening
          to.
        </p>
        <AnonFriend role="img" aria-hidden />
        <AnonFriend role="img" aria-hidden />
        <AnonFriend role="img" aria-hidden />
        <p>
          Go to Settings &gt; Social and enable &apos;Share my listening
          activity on Spotify.&apos; You can turn this off at any time.
        </p>
        <Link
          href=""
          className="mx-auto block w-fit rounded-full bg-white px-8 py-3.5 font-bold text-black hover:scale-105 hover:bg-gray-50 active:scale-100 active:opacity-50"
        >
          Settings
        </Link>
      </div>
    </aside>
  );
}
