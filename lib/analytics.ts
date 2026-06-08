import { cloudUrl } from "./site";

export const CLOUD_REDIRECT_EVENT = "cloud-redirect";

export function isCloudUrl(href: string | undefined): boolean {
  if (!href) return false;
  return href.startsWith(cloudUrl) || href.includes("cloud.webscount.com");
}

export function trackCloudRedirect(source: string): void {
  if (typeof window === "undefined") return;

  window.umami?.track(CLOUD_REDIRECT_EVENT, { source });
}
