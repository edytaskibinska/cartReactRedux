import React from "react";
import { useSelector } from "react-redux";
import { CartElement } from "../../Components";
import { ICartElement } from "../../Interfaces/ICartElement";
import { RootState } from "../../Store/configureStore";

//store actions
import { useDispatch } from "react-redux";
import { resetQuantity, increaseQuantity, decreaseQuantity } from "../../Store/cartSlice";


const CartList: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  //   const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleIncrease = (id:any) => {
    dispatch(increaseQuantity(id));
  };
  const handleDecrease = (id:any) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id:any) => {
    dispatch(resetQuantity(id));
  };



  return (
    <div className="TODO-replaceitByInfiniteScroll">
      <>{console.log("cartItems", cartItems)}</>
      {cartItems.map((item: ICartElement) => (
        <CartElement
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          quantity={item.quantity}
          handleIncrease={()=> handleIncrease(item.id)}
          handleDecrease={()=> handleDecrease(item.id)}
          handleRemove={()=> handleRemove(item.id)}
        />
      ))}
    </div>
  );
};

export default CartList;
