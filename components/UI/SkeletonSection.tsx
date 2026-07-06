export default function SkeletonSection() {
  return (
    <section className="section-pad border-t border-white/10 bg-carbon">
      <div className="container-px">
        <div className="h-4 w-28 animate-pulse rounded bg-white/10" />
        <div className="mt-5 h-10 w-full max-w-xl animate-pulse rounded bg-white/10" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-56 animate-pulse rounded-lg border border-white/10 bg-white/5"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
