import Link from "next/link";

type LogoProps = {
  className?: string;
  showText?: boolean;
};

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <span className="flex size-5 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="currentColor"
          stroke="currentColor"
          viewBox="0 0 428 389.11"
          aria-hidden
        >
          <circle
            cx={214.15}
            cy={181}
            r={171}
            fill="none"
            strokeMiterlimit={10}
            strokeWidth={20}
          />
          <path d="M413 134.11H15.29a15 15 0 0 0-15 15v15.3C.12 168 0 171.52 0 175.11c0 118.19 95.81 214 214 214 116.4 0 211.1-92.94 213.93-208.67 0-.44.07-.88.07-1.33v-30a15 15 0 0 0-15-15Z" />
        </svg>
      </span>
      {showText && (
        <span className="text-lg font-bold tracking-tight">webscount</span>
      )}
    </Link>
  );
}
