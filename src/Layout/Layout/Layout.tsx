import { FC, ReactNode } from "react";
import { navList } from "../../Routes/RoutesList";

import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import "./Layout.scss"

interface ILayout {
  content?: ReactNode;
}

const Layout: FC<ILayout> = ({ content }) => {
  return (
    <div className="layout">
      <Nav navList={navList} />
      <Main>{content}</Main>
      <Footer>Copyright 2023 Company name</Footer>
    </div>
  );
};

export default Layout;
