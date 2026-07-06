import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase text-signal">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-black text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-7 text-white/[0.68] sm:text-lg">{text}</p>
      ) : null}
    </div>
  );
}
