import Image from "next/image";

const companies = [
  { name: "accenture", title: "Accenture" },
  { name: "amd", title: "AMD" },
  { name: "espn", title: "ESPN" },
  { name: "gm", title: "GM" },
  { name: "hulu", title: "Hulu" },
  { name: "intel", title: "Intel" },
  { name: "siemens", title: "Siemens" },
  { name: "vsp", title: "VSP" },
];

type TrustedByProps = {
  label: string;
};

function LogoRow() {
  return (
    <>
      {companies.map(({ name, title }) => (
        <Image
          key={name}
          src={`/images/logo-${name}.png`}
          alt={title}
          width={120}
          height={40}
          style={{ width: "auto", height: "1.75rem" }}
          className="shrink-0 opacity-35 grayscale transition-opacity duration-300 hover:opacity-60 sm:[height:2rem]"
        />
      ))}
    </>
  );
}

export function TrustedBy({ label }: TrustedByProps) {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-8">
      <p className="px-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted sm:text-xs sm:tracking-[0.2em]">
        {label}
      </p>
      <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max items-center gap-10 animate-scroll sm:gap-16 md:gap-24">
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </div>
  );
}
