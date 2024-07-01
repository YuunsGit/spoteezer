import Link from "next/link";

export default function NotFound() {
  return (
    <section className="absolute inset-0 flex items-center justify-center">
      <div>
        <h2 className="text-2xl">
          The page you&apos;re looking for doesn&apos;t exist.
        </h2>
        <Link
          href="/"
          className="mx-auto mt-4 block w-fit rounded-full bg-white px-8 py-3.5 font-bold text-black hover:scale-105 hover:bg-gray-50 active:scale-100 active:opacity-50"
        >
          Take me home
        </Link>
      </div>
    </section>
  );
}
