import { FC } from "react";
import { NavLink } from "react-router-dom";
import { INavLink } from "../../Routes/RoutesList";
import "./Nav.scss";

interface INav {
  navList: INavLink[];
}

const Nav: FC<INav> = ({ navList }) => {
  return (
    <nav className="mainNav">
      {navList &&
        navList.map((item: INavLink, index: number) => {
          return (
            <NavLink
              className="mainNav__item"
              to={item.navLinkRoute}
              key={index}
            >
              {item.navLinkName}
            </NavLink>
          );
        })}
    </nav>
  );
};

export default Nav;
