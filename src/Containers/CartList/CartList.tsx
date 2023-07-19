import { FC } from "react";
import { CartElement, Button } from "../../Components";
import { ICartElement } from "../../Interfaces/ICartElement";
import "./CartList.scss";
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
              <div className="pushSwipable">
                <Button onClick={() => handleRemoveItem(item.id)}>
                  Supprimer
                </Button>
              </div>
            }
            key={index}
            id={item.id}
            title={item.title}
            description={item.description}
            showQuantity
            quantity={item.quantity}
            handleConfirmDelete={() => handleRemoveItem(item.id)}
            contentAfter={
              <>
                <div className="quantity">Gerer la quantité : </div>
                <Button onClick={() => handleDecrease(item.id)}>-</Button>

                <div className="qteblock">{item.quantity}</div>
                <Button onClick={() => handleIncrease(item.id)}>+</Button>
              </>
            }
          />
        </div>
      ))}
    </div>
  );
};

export default CartList;
