import { Header } from '@components/header/header';
import { Footer } from '@components/footer/footer';
import { ReactNode } from 'react';

type ThreeColumnLayoutProps = {
  children: ReactNode;
  mainClassName?: string;
  startSideBar: ReactNode;
  endSideBar: ReactNode;
  startSideBarClassName?: string;
  endSideBarClassName?: string;
};

export function ThreeColumnLayout(props: ThreeColumnLayoutProps) {
  const {
    children,
    mainClassName = '',
    startSideBar,
    endSideBar,
    startSideBarClassName = '',
    endSideBarClassName = ''
  } = props;
  return (
    <>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <div className={startSideBarClassName}>{startSideBar}</div>
        <main className={`base-container ${mainClassName}`}>{children}</main>
        <div className={endSideBarClassName}>{endSideBar}</div>
      </div>

      <Footer />
    </>
  );
}
