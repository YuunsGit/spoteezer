"use client";

import React, { Suspense, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SearchIcon from "@/assets/icons/search.svg";
import CrossIcon from "@/assets/icons/close.svg";

export default function SearchBar() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const queryParam = params.get("q");

  useEffect(() => {
    if (query.length < 4) return;
    router.push(`/search?q=${query}`);
  }, [query, router]);

  useEffect(() => {
    if (!pathname.startsWith("/search")) setQuery("");
  }, [pathname]);

  useEffect(() => {
    if (queryParam) setQuery(queryParam);
  }, [queryParam]);

  if (!pathname.startsWith("/search")) return null;

  return (
    <Suspense>
      <form
        aria-label="Search for playlists"
        onSubmit={(e) => e.preventDefault()}
        className="relative mr-auto flex-shrink flex-grow-0 basis-[364px]"
      >
        <SearchIcon
          role="img"
          aria-hidden
          className="absolute left-3 top-2 size-6 text-black"
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoCorrect="off"
          autoCapitalize="off"
          maxLength={40}
          spellCheck="false"
          placeholder="What do you want to listen to?"
          className="h-10 w-full transform-none text-ellipsis rounded-full px-12 py-1.5 text-sm text-black"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            type="reset"
            aria-label="Clear search"
            className="absolute right-3.5 top-2.5 text-black"
          >
            <CrossIcon role="img" aria-hidden className="size-5" />
          </button>
        )}
      </form>
    </Suspense>
  );
}
