interface WebscountTracker {
  track: (
    event: string | ((props: Record<string, unknown>) => Record<string, unknown>),
    data?: Record<string, unknown>,
  ) => void;
}

declare global {
  interface Window {
    webscount?: WebscountTracker;
  }
}

export {};
