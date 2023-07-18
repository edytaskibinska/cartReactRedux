import { FC } from "react";
import "./CartPage.scss";
import { useSelector } from "react-redux";
//import { CartList } from "../../Containers";

import { RootState } from "../../Store/configureStore";

interface ICartPage {}

const CartPage: FC<ICartPage> = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="cartPage">
      <>{console.log("STORE cartItems", cartItems)}</>
      {/* <CartList /> */}
    </div>
  );
};

export default CartPage;
