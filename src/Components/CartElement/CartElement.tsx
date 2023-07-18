import { FC } from "react";
import { ICartElement } from "../../Interfaces/ICartElement";
import { useDispatch } from "react-redux";
import { removeProduct, addProduct } from "../../Store/cartSlice";

const CartElement: FC<ICartElement> = ({
  id,
  title,
  description,
  quantity,
}) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addProduct(id));
  };

  const handleRemove = () => {
    dispatch(removeProduct(id));
  };

  return (
    <div id={`${id}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Quantité dans le panier : {quantity}</p>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleRemove}>Supprimer</button>
    </div>
  );
};

export default CartElement;
