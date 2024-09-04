// types/global.d.ts
declare global {
  interface Window {
    sa_event: (event: string) => void;
  }
}

export {};
