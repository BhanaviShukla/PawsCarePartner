import { Header } from '@components/header/header';
import { Footer } from '@components/footer/footer';
import { ReactNode } from 'react';

type LeftTwoColumnLayoutProps = {
  children: ReactNode;
  mainClassName?: string;
  sideBar: ReactNode;
  sideBarClassName?: string;
};

export function LeftTwoColumnLayout(props: LeftTwoColumnLayoutProps) {
  const { children, mainClassName = '', sideBar, sideBarClassName = '' } = props;
  return (
    <>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <div className={sideBarClassName}>{sideBar}</div>
        <main className={`base-container ${mainClassName}`}>{children}</main>
      </div>

      <Footer />
    </>
  );
}
