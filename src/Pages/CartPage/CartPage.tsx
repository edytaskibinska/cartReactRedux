import { FC } from "react";
import "./CartPage.scss";
import { useSelector } from "react-redux";
import { CartList } from "../../Containers";
import { Title } from "../../Components";
import { RootState } from "../../Store/configureStore";
import {ICartElement} from "../../Interfaces/ICartElement"

interface ICartPage {}

const CartPage: FC<ICartPage> = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  // const products = useSelector((state: RootState) => state.products.items);

  const mergeCartItems = (cartItems: ICartElement[]) => {
    const mergedItems: any[] = [];
  
    cartItems.forEach((item) => {
      const existingItem = mergedItems.find((mergedItem) => mergedItem.id === item.id);
  
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        mergedItems.push({ ...item });
      }
    });
  
    return mergedItems;
  };

  const mergedItems = mergeCartItems(cartItems); // Fusionner les objets avec le même ID


  return (
    <div className="cartPage">
      <Title level={2}>Panier</Title>
      <>{console.log("cartItems", cartItems)}</>
      <>{console.log("mergedItems", mergedItems)}</>
      <CartList cartItems={mergedItems} />
      
      {mergedItems.length <= 0 &&  <div className="emptyBacket">Le panier est vide</div>}
     
    </div>
  );
};

export default CartPage;
