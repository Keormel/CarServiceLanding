"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 680);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Sus"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "focus-ring fixed bottom-24 right-4 z-40 grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/10 text-white shadow-panel backdrop-blur-xl transition duration-300 hover:border-signal hover:bg-signal sm:right-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
