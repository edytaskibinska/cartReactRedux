import { FC } from "react";
import { NavLink } from "react-router-dom";
import { INavLink } from "../../Routes/RoutesList";
import "./Nav.scss";

interface INav {
  navList: INavLink[];
}

//S.O.L.I.D - SRP - Single Responsibility Principle
const Nav: FC<INav> = ({ navList }) => {
  return (
    <nav className="mainNav">
      {navList &&
        navList.map((item: INavLink, index: number) => {
          return (
            <NavLink
              className="mainNav__item"
              to={item.navLinkRoute}//S.O.L.I.D - DIP - Dependency Inversion principle
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
