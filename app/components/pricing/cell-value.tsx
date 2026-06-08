type CellValueProps = {
  value: string;
};

export function CellValue({ value }: CellValueProps) {
  if (value === "yes") {
    return (
      <span className="mx-auto inline-flex size-6 items-center justify-center rounded-full bg-emerald-500/10">
        <svg
          className="size-3.5 text-emerald-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }

  if (value === "-") {
    return <span className="text-muted/60">—</span>;
  }

  return <span className="text-[13px] leading-snug">{value}</span>;
}
