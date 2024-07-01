export default function Loading() {
  return (
    <section className="mt-6 pb-4">
      <div className="flex items-center justify-between">
        <div className="h-7 w-52 animate-pulse rounded-full bg-gray-400" />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-[18px] overflow-y-hidden @3xl:gap-6 @3col:grid-cols-3 @4col:grid-cols-4 @5col:grid-cols-5 @6col:grid-cols-6 @7col:grid-cols-7 @8col:grid-cols-8 @9col:grid-cols-9">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-md bg-gray-500 bg-opacity-20 p-4 transition-colors duration-300"
            >
              <div className="relative mb-4 aspect-square w-full animate-pulse overflow-hidden rounded bg-gray-400 shadow-[0_8px_24px_rgb(0_0_0_/_50%)]" />
              <div>
                <div className="h-5 w-full animate-pulse rounded-full bg-gray-400" />
                <div className="mt-2 h-5 w-3/5 animate-pulse rounded-full bg-gray-400" />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
