type CellValueProps = {
  value: string;
};

export function CellValue({ value }: CellValueProps) {
  if (value === "yes") {
    return (
      <svg
        className="mx-auto size-4 text-foreground"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden
      >
        <path d="M5 13l4 4L19 7" />
      </svg>
    );
  }

  if (value === "-") {
    return <span className="text-muted">-</span>;
  }

  return <span>{value}</span>;
}
