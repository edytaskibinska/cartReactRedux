import { FC } from "react";
import { ICartElement } from "../../Interfaces/ICartElement";
import { useDispatch } from "react-redux";
import { resetQuantity, increaseQuantity, decreaseQuantity } from "../../Store/cartSlice";

const CartElement: FC<ICartElement> = ({
  id,
  title,
  description,
  quantity,
}) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(id));
  };
  const handleDecrease = () => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = () => {
    dispatch(resetQuantity(id));
  };

  return (
    <div id={`${id}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Quantité dans le panier : {quantity}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleRemove}>Supprimer</button>
    </div>
  );
};

export default CartElement;
