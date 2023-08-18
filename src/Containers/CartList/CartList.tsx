import { FC } from "react";
import { CartElement, Button } from "../../Components";
import IconRemove from "../../Assets/IconRemove/IconRemove";
import { InterfaceCartElement } from "../../Interfaces/InterfaceCartElement";
import "./CartList.scss";
//store actions
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../../Store/reducers/cartSlice";

interface ICartList {
  cartItems: InterfaceCartElement[];
}
const CartList: FC<ICartList> = ({ cartItems }) => {
  const dispatch = useDispatch();

  const handleIncrease = (id: number) => {
    dispatch(increaseQuantity(id));
  };
  const handleDecrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItem(itemId));
  };

  return (
    <>
      {cartItems && cartItems?.map((item: InterfaceCartElement, index: number) => (
        <div key={item.id} className={`listItem`}>
          <CartElement
            swippable
            contentBefore={
              <div className="pushSwipable">
                <Button onClick={() => handleRemoveItem(item.id)}>
                  <IconRemove scale="40" fill="#FFF" />
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
                <Button
                  role="button"
                  name="decrease"
                  className="decrease"
                  onClick={() => handleDecrease(item.id)}
                >
                  -
                </Button>

                <div className="qteblock">{item.quantity}</div>
                <Button
                  role="button"
                  name="increase"
                  className="increase"
                  onClick={() => handleIncrease(item.id)}
                >
                  +
                </Button>
              </>
            }
          />
        </div>
      ))}
    </>
  );
};

export default CartList;
