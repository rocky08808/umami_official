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
    <div className="overflow-hidden rounded-xl border border-border shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
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
