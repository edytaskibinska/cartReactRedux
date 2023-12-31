import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartElement, Button } from "../../Components";
import { InterfaceCartElement } from "../../Interfaces/InterfaceCartElement";
import { RootState } from "../../Store/configureStore";
import "./ProductList.scss";
//store actions
import { addItem } from "../../Store/reducers/cartSlice";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../Store/reducers/cartSlice";

interface IProductList {
  cartItems: InterfaceCartElement[];
}
const ProductList: FC<IProductList> = ({ cartItems }) => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state: RootState) => state.cart.items);

  const getProductQuantityFromCart = (productId: number) => {
    const cartItem = productsInCart.find((item:InterfaceCartElement) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddToCart = (product: InterfaceCartElement) => {
    dispatch(addItem(product));
  };
  const handleIncrease = (id: number) => {
    dispatch(increaseQuantity(id));
  };
  const handleDecrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <>
      {cartItems && cartItems?.map((item: InterfaceCartElement) => (
        <div key={item.id} className={`listItem`}>
          <CartElement
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            quantity={item.quantity}
            contentAfter={
              <>
                <Button
                  id={item.id}
                  onClick={() => handleAddToCart(item)}
                  disabled={productsInCart.some(
                    (cartItem:InterfaceCartElement) => cartItem.id === item.id
                  )}
                >
                  {productsInCart.some((cartItem:InterfaceCartElement) => cartItem.id === item.id)
                    ? `Déjà dans le panier`
                    : "Ajouter au panier"}
                </Button>
                {productsInCart.some((cartItem:InterfaceCartElement) => cartItem.id === item.id) && (
                  <>
                    <Button onClick={() => handleDecrease(item.id)}>-</Button>

                    <div className="qteblock">
                      {getProductQuantityFromCart(item.id)}
                    </div>
                    <Button onClick={() => handleIncrease(item.id)}>+</Button>
                  </>
                )}
              </>
            }
          />
        </div>
      ))}
    </>
  );
};

export default ProductList;
