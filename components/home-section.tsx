import PlaylistCard from "@/components/playlist-card";
import Link from "next/link";

interface Props {
  title: string;
}

export default function HomeSection({ title }: Props) {
  return (
    <section className="mt-6 pb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold leading-tight">{title}</h2>
        <Link
          href=""
          className="text-xs font-bold uppercase tracking-widest text-foreground hover:underline"
        >
          See all
        </Link>
      </div>
      <div className="@3xl:gap-y-6 mt-5 flex gap-x-[18px]">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <PlaylistCard key={i} />
          ))}
      </div>
    </section>
  );
}
