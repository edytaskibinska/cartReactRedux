import { FC, ReactNode } from "react";
import "./Footer.scss";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/configureStore";
import {} from "react-redux";
import { emptyCart } from "../../Store/reducers/cartSlice";

interface IFooter {
  children?: ReactNode;
}

const Footer: FC<IFooter> = ({ children }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleEmptyCart = (stateArray: any) => {
    dispatch(emptyCart(stateArray));
  };
  return (
    cartItems.length && (
      <footer onClick={() => handleEmptyCart(cartItems)} className="footer">
     
          <p className="footer__text">{children}</p>
      </footer>
    )
  );
};

export default Footer;
