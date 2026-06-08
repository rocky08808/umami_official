import Image from "next/image";

type ScreenshotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

export function Screenshot({ src, alt, width, height, priority }: ScreenshotProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}
