"use client";

import { SearchResponse } from "@/app/types";
import PlaylistCard from "@/components/playlist-card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { getSearchResults } from "@/app/actions";
import { cn } from "@/lib/utils";

export default function Search() {
  const [results, setResults] = useState<SearchResponse | null>();

  const params = useSearchParams();
  const query = params.get("q");
  const page = params.get("p") || "0";

  useEffect(() => {
    if (!query) return;
    getSearchResults(query, page).then(setResults);
  }, [query, page]);

  if (!query || !results?.data) return null;

  return (
    <Suspense>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold leading-tight">Top results</h2>
        <div className="flex items-center justify-end gap-4">
          <Link
            href={
              !!results.prev
                ? `/search?q=${query}${parseInt(page) - 1 !== 0 ? `&p=${parseInt(page) - 1}` : ""}`
                : ""
            }
            draggable="false"
            aria-disabled={!results.prev}
            className={cn(
              "block w-fit rounded-full bg-white px-6 py-2 font-bold text-black hover:bg-opacity-70 active:scale-100 active:opacity-50",
              !results.prev && "cursor-not-allowed opacity-50",
            )}
          >
            Previous Page
          </Link>
          <Link
            href={
              !!results.next ? `/search?q=${query}&p=${parseInt(page) + 1}` : ""
            }
            draggable="false"
            aria-disabled={!results.next}
            className={cn(
              "block w-fit rounded-full bg-white px-6 py-2 font-bold text-black hover:bg-opacity-70 active:scale-100 active:opacity-50",
              !results.next && "cursor-not-allowed opacity-50",
            )}
          >
            Next Page
          </Link>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-[18px] @3xl:gap-6 @3col:grid-cols-3 @4col:grid-cols-4 @5col:grid-cols-5 @6col:grid-cols-6 @7col:grid-cols-7 @8col:grid-cols-8 @9col:grid-cols-9">
        {results.data.map((pl) => (
          <PlaylistCard playlist={pl} key={pl.id} />
        ))}
      </div>
    </Suspense>
  );
}
