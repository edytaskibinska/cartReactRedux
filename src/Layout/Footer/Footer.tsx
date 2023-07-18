import { FC, ReactNode } from "react";
import "./Footer.scss"

interface IFooter {
  children?: ReactNode;
}

const Footer: FC<IFooter> = ({ children }) => {
  return (
    <footer className="footer">
      <p className="footer__text">{children}</p>
    </footer>
  );
};

export default Footer;
