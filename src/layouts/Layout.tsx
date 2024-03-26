import { ReactElement } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Main from "../pages/Main";

// 리액트에서 children 속성은 ReactNode 또는 ReactElement 이다.
type Props = {
  children: ReactElement;
};

const Layout = ({ children }:Props) => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="inner">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;