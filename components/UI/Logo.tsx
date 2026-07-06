import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  markClassName?: string;
  textClassName?: string;
}

export default function Logo({
  className,
  markClassName,
  textClassName
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)} aria-label="Aleks-Blitz">
      <svg
        className={cn("h-10 w-10 shrink-0", markClassName)}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="48" height="48" rx="8" fill="#0B0B0B" />
        <path
          d="M9 27.9h30l-3.2-8.4a4.5 4.5 0 0 0-4.2-2.9H16.4a4.5 4.5 0 0 0-4.2 2.9L9 27.9Z"
          fill="#E11D2E"
        />
        <path
          d="M13.2 27.9h21.9a4.4 4.4 0 0 1 4.4 4.4v2.1h-31v-2.1a4.7 4.7 0 0 1 4.7-4.4Z"
          fill="#F7F7F7"
        />
        <path
          d="M16.8 36.4a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM31.2 36.4a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z"
          fill="#1A1A1A"
        />
        <path d="M17.2 20.4h13.6l1.4 4H15.8l1.4-4Z" fill="#0B0B0B" />
      </svg>
      <div className={cn("leading-none", textClassName)}>
        <span className="block text-lg font-black text-white">Aleks</span>
        <span className="block text-xs font-semibold text-steel">Blitz</span>
      </div>
    </div>
  );
}
