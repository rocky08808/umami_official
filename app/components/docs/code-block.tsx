type CodeBlockProps = {
  label: string;
  code: string;
};

export function CodeBlock({ label, code }: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface-raised/80">
      <div className="border-b border-border px-4 py-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted">
          {label}
        </span>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code className="font-mono text-foreground">{code}</code>
      </pre>
    </div>
  );
}
