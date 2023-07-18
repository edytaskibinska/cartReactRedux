import React from "react";
import { useSelector } from "react-redux";
import { CartElement } from "../../Components";
import { ICartElement } from "../../Interfaces/ICartElement";
import { RootState } from "../../Store/configureStore";

const CartList: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  //   const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="TODO-replaceitByInfiniteScroll">
      <>{console.log("cartItems", cartItems)}</>
      {cartItems.map((item: ICartElement) => (
        <>
          {item?.quantity > 0 && (
            <CartElement
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              quantity={item.quantity}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default CartList;
