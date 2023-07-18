import { FC } from "react";
import "./CartPage.scss";
import { useSelector } from "react-redux";
import { CartList } from "../../Containers";
import { Title } from "../../Components";
import { RootState } from "../../Store/configureStore";

interface ICartPage {}

const CartPage: FC<ICartPage> = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  // const products = useSelector((state: RootState) => state.products.items);

  return (
    <div className="cartPage">
      <Title level={2}>Panier</Title>
      <>{console.log("cartItems", cartItems)}</>
      <CartList cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
