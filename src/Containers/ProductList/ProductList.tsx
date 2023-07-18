import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartElement, Button } from "../../Components";
import { ICartElement } from "../../Interfaces/ICartElement";
import { RootState } from "../../Store/configureStore";

//store actions
import { addItem } from "../../Store/reducers/cartSlice";
import { addToCart } from "../../Store/reducers/productSlice";

interface IProductList {
  cartItems: ICartElement[];
}
const ProductList: FC<IProductList> = ({ cartItems }) => {
  const dispatch = useDispatch();
  //const products = useSelector((state: RootState) => state.products.items);
  const productsInCart = useSelector((state: RootState) => state.cart.items);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product.id));
    dispatch(addItem(product));
  };

  return (
    <div className="TODO-replaceitByInfiniteScroll">
      {cartItems.map((item: ICartElement) => (
        <div key={item.id}>
          <>{console.log("item.id", item.id)}</>
          <>{console.log("item.quantity", item.quantity)}</>

          <CartElement
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            quantity={item.quantity}
            contentAfter={
              <Button
                id={item.id}
                onClick={() => handleAddToCart(item)}
                disabled={productsInCart.some(
                  (cartItem) => cartItem.id === item.id
                )}
              >
                {productsInCart.some((cartItem) => cartItem.id === item.id)
                  ? "Déjà dans le panier"
                  : "Ajouter au panier"}
              </Button>
            }
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
