import { FC, ReactNode } from "react";
import "./Footer.scss";

import { useSelector } from "react-redux";
import { RootState } from "../../Store/configureStore";

interface IFooter {
  children?: ReactNode;
}

const Footer: FC<IFooter> = ({ children }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    cartItems.length && (
      <footer className="footer">
        <p className="footer__text">{children}</p>
      </footer>
    )
  );
};

export default Footer;
