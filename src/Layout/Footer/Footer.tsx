import { FC, ReactNode, useState } from "react";
import "./Footer.scss";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/configureStore";
import {} from "react-redux";
import { emptyCart } from "../../Store/reducers/cartSlice";

//Modal from npm @e-skibinska/proton-design-system
import { Modal } from "@e-skibinska/proton-design-system";

interface IFooter {
  children?: ReactNode;
}

//S.O.L.I.D - SRP - Single Responsibility Principle
const Footer: FC<IFooter> = ({ children }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [confirmation, setConfirmation] = useState(false);

  const handleEmptyCart = (stateArray: any) => {
    dispatch(emptyCart(stateArray));
    setConfirmation(true);
  };
  return (
    <>
      {cartItems.length && (
        <footer onClick={() => handleEmptyCart(cartItems)} className="footer">
          <p className="footer__text">{children}</p>
        </footer>
      )}
      <Modal
        onClick={() => setConfirmation(false)}
        isOpen={confirmation}
        className="modal"
        modalTitle="Le panier est vide"
        buttonText="OK"
        buttoncolor="#7861c1"
        modaltextcolor="#dd3d62"
        withButtonClose
      >
        Votre panier a été vidé, merci pour votre visite.
      </Modal>
    </>
  );
};

export default Footer;
