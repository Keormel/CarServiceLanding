"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SkeletonImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function SkeletonImage({
  src,
  alt,
  className,
  imageClassName,
  sizes,
  priority,
  fill,
  width = 900,
  height = 650
}: SkeletonImageProps) {
  const [loaded, setLoaded] = useState(false);

  const imageClasses = cn(
    "duration-700 ease-out",
    loaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
    imageClassName
  );

  return (
    <div className={cn("relative overflow-hidden rounded-lg bg-white/5", className)}>
      {!loaded ? (
        <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
      ) : null}
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={imageClasses}
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={cn("h-auto w-full", imageClasses)}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}
