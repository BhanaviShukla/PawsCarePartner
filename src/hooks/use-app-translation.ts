import { useTranslation } from 'next-i18next';
import { ReactNode } from 'react';

type TranslationFiles = 'common' | 'home-page';

export function useAppTranslation(transFile: TranslationFiles = 'common') {
  const { t, ready } = useTranslation(transFile);

  return (key: string, fallback: ReactNode = '') => {
    return ready ? t(key) : fallback;
  };
}
