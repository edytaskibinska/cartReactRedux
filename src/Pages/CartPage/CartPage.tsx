import { FC } from "react";
import "./CartPage.scss";
import { useSelector } from "react-redux";
import { CartList } from "../../Containers";
import { Box, Title } from "../../Components";
import { RootState } from "../../Store/configureStore";

interface ICartPage {}

const CartPage: FC<ICartPage> = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="cartPage">
      <Box>
        <Title level={2}>Panier</Title>
        {/* DONE : updatitg card page, removin LazyScroll, adding state from store : */}
        <CartList cartItems={cartItems} />
        {cartItems.length <= 0 && (
          <div className="emptyBacket">Le panier est vide</div>
        )}
      </Box>
    </div>
  );
};

export default CartPage;
