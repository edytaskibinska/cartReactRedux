import  { FC } from "react";
import { CartElement, Button } from "../../Components";
import { ICartElement } from "../../Interfaces/ICartElement";

//store actions
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../../Store/reducers/cartSlice";

interface ICartList {
  cartItems: ICartElement[];
}
const CartList: FC<ICartList> = ({ cartItems }) => {
  const dispatch = useDispatch();

  const handleIncrease = (id: any) => {
    dispatch(increaseQuantity(id));
  };
  const handleDecrease = (id: any) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveItem = (itemId: number) => {
    // Dispatch l'action pour supprimer l'élément du tableau items par son ID
    dispatch(removeItem(itemId));
  };

  return (
    <div className="TODO-replaceitByInfiniteScroll">
      <>{console.log("cartItems", cartItems)}</>
      {cartItems.map((item: ICartElement) => (
        <CartElement
          contentBefore={
            <>
              <Button onClick={() => handleRemoveItem(item.id)}>
                Supprimer
              </Button>
            </>
          }
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          quantity={item.quantity}
          contentAfter={
            <>
              <Button onClick={() => handleIncrease(item.id)}>+</Button>
              <Button onClick={() => handleDecrease(item.id)}>-</Button>
              <Button onClick={() => handleRemoveItem(item.id)}>
                Supprimer
              </Button>
            </>
          }
        />
      ))}
    </div>
  );
};

export default CartList;
