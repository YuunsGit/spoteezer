import ArrowIcon from "@/assets/icons/arrow.svg";

export default function Header() {
  return (
    <section className="sticky px-10 py-5">
      <div className="flex gap-5">
        <button className="disabled:cursor-not-allowed disabled:opacity-75">
          <ArrowIcon className="size-10 rotate-180" />
        </button>
        <button className="disabled:cursor-not-allowed disabled:opacity-75">
          <ArrowIcon className="size-10" />
        </button>
      </div>
    </section>
  );
}
