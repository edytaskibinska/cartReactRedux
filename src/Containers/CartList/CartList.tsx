import { FC } from "react";
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
    dispatch(removeItem(itemId));
  };

  return (
    <div className="TODO-replaceitByInfiniteScroll">
      <>{console.log("cartItems", cartItems)}</>
      {cartItems.map((item: ICartElement, index: any) => (
        <div key={item.id}>
          <CartElement
            contentBefore={
              <>
                <Button onClick={() => handleRemoveItem(item.id)}>
                  Supprimer
                </Button>
              </>
            }
            key={index}
            id={item.id}
            title={item.title}
            description={item.description}
            quantity={item.quantity}
            showQuantity
            handleConfirmDelete={() => handleRemoveItem(item.id)}
            contentAfter={
              <>
                <Button onClick={() => handleIncrease(item.id)}>+</Button>
                <Button onClick={() => handleDecrease(item.id)}>-</Button>
              </>
            }
          />
        </div>
      ))}
    </div>
  );
};

export default CartList;
