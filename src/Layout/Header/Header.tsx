import { FC, ReactNode } from "react";
import "./Header.scss";

interface IHeader {
  children: ReactNode;
}

//S.O.L.I.D - SRP - Single Responsibility Principle
const Header: FC<IHeader> = ({ children }) => {
  return <header className="header">{children}</header>;
};

export default Header;
