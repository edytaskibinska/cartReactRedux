import { FC, MouseEvent } from "react";
import { ICartElement } from "../../Interfaces/ICartElement";
import { Button } from "../";

interface ICartElemWithActions extends ICartElement {
  handleIncrease: (event: MouseEvent<HTMLElement>) => void;
  handleDecrease: (event: MouseEvent<HTMLElement>) => void;
  handleRemove: (event: MouseEvent<HTMLElement>) => void;
}
const CartElement: FC<ICartElemWithActions> = ({
  id,
  title,
  description,
  quantity,
  handleIncrease,
  handleDecrease,
  handleRemove,
}) => {
  return (
    <div id={`${id}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Quantité dans le panier : {quantity}</p>
      <Button onClick={handleIncrease}>+</Button>
      <Button onClick={handleDecrease}>-</Button>
      <Button onClick={handleRemove}>Supprimer</Button>
    </div>
  );
};

export default CartElement;
