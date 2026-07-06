export default function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-carbon text-white">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-lg border border-white/[0.15]" />
          <div className="absolute inset-2 animate-spin rounded-lg border-2 border-transparent border-t-signal" />
          <div className="absolute inset-5 rounded bg-signal" />
        </div>
        <p className="text-sm font-semibold text-white/70">Загружаем сервис</p>
      </div>
    </div>
  );
}
