"use client";

import { startTransition, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  const refreshAndReset = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <section className="absolute inset-0 flex items-center justify-center">
      <div>
        <h2 className="text-2xl">Something went wrong!</h2>
        <button
          onClick={refreshAndReset}
          className="mx-auto mt-4 block w-fit rounded-full bg-white px-8 py-3.5 font-bold text-black hover:scale-105 hover:bg-gray-50 active:scale-100 active:opacity-50"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
