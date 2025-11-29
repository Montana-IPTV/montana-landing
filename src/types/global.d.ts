declare global {
  interface Window {
    Intercom?: (action: string) => void;
  }
}

export {};

