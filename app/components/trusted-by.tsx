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
          className="h-8 w-auto shrink-0 opacity-40 grayscale transition-opacity hover:opacity-70"
        />
      ))}
    </>
  );
}

export function TrustedBy() {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-sm text-muted">受到数千家公司的信赖</p>
      <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max items-center gap-[100px] animate-scroll">
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </div>
  );
}
