import React, { ReactNode } from "react";
import "./Box.scss";

interface IBox {
  children: ReactNode;
}
//S.O.L.I.D - SRP - Single Responsibility Principle
const Box: React.FC<IBox> = ({ children }) => (
  <div className="box">{children}</div>
);

export default Box;
