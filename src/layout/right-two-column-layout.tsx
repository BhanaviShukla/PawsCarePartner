import { Header } from '@components/header/header';
import { Footer } from '@components/footer/footer';
import { ReactNode } from 'react';

type RightTwoColumnLayoutProps = {
  children: ReactNode;
  mainClassName?: string;
  sideBar: ReactNode;
  sideBarClassName?: string;
};

export function RightTwoColumnLayout(props: RightTwoColumnLayoutProps) {
  const { children, mainClassName = '', sideBar, sideBarClassName = '' } = props;
  return (
    <>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <main className={`base-container ${mainClassName}`}>{children}</main>
        <div className={sideBarClassName}>{sideBar}</div>
      </div>

      <Footer />
    </>
  );
}
