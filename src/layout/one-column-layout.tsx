import { Header } from '@components/header/header';
import { Footer } from '@components/footer/footer';
import { ReactNode } from 'react';

export function OneColumnLayout(props: { children: ReactNode; mainClassName?: string }) {
  const { children, mainClassName = '' } = props;
  return (
    <>
      <Header />
      <main className={`base-container ${mainClassName}`}>{children}</main>
      <Footer />
    </>
  );
}
