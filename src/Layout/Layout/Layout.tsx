import { FC, ReactNode } from "react";
import { navList } from "../../Routes/RoutesList";

import Footer from "../Footer/Footer";
import { Header, Nav, Main } from "../";
import "./Layout.scss";

interface ILayout {
  content?: ReactNode;
}

const Layout: FC<ILayout> = ({ content }) => {
  return (
    <div className="layout">
      <Header>
        <Nav navList={navList} />
      </Header>
      <Main>{content}</Main>
      <Footer>Vider le panier</Footer>
    </div>
  );
};

export default Layout;
