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
          style={{ width: "auto", height: "2rem" }}
          className="shrink-0 opacity-35 grayscale transition-opacity duration-300 hover:opacity-60"
        />
      ))}
    </>
  );
}

export function TrustedBy() {
  return (
    <div className="flex flex-col items-center gap-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        受到数千家公司的信赖
      </p>
      <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max items-center gap-16 animate-scroll md:gap-24">
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </div>
  );
}
