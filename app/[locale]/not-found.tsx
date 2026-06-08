import Link from "next/link";
import { defaultLocale } from "@/lib/i18n/config";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-bold">404</h1>
      <p className="text-muted">Page not found</p>
      <Link
        href={`/${defaultLocale}`}
        className="text-sm font-medium underline underline-offset-4"
      >
        Back to home
      </Link>
    </div>
  );
}
