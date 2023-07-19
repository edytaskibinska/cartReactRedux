import { FC, ReactNode } from "react";
import "./Main.scss";

interface IMain {
  children: ReactNode;
}
//S.O.L.I.D - SRP - Single Responsibility Principle
const Main: FC<IMain> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;
