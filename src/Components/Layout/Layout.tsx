import React from "react";
import Navbar from "../Navbar/Navbar";

type LayoutProps = {
  children: React.ReactElement | React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
};
export default Layout;
