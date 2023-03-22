type GtagCommandType = 'config' | 'set' | 'js' | 'event';

interface Window extends Window {
  gtag: (command: GtagCommandType, targetId: string, eventParams?: unknown) => void;
  gaData: unknown;
  dataLayer: unknown[];
  isClientSideReady: boolean;
}
