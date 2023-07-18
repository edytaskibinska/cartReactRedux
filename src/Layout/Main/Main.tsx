import { FC, ReactNode } from "react";
import "./Main.scss";

interface IMain {
  children: ReactNode;
}

const Main: FC<IMain> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;
