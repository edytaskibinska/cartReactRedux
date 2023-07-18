import { FC, MouseEvent, ReactNode } from "react";
import { ICartElement } from "../../Interfaces/ICartElement";
import { Title, Button } from "../";
import "./CartElement.scss";

interface ICartElemWithActions extends ICartElement {
  showQuantity?: boolean;
  contentBefore?: ReactNode;
  contentAfter?: ReactNode;
  handleConfirmDelete?: (
    event: MouseEvent<HTMLElement, MouseEvent>
  ) => void | undefined;
}
const CartElement: FC<ICartElemWithActions> = ({
  id,
  title,
  description,
  quantity,
  showQuantity,
  contentBefore,
  contentAfter,
  handleConfirmDelete,
}) => {
  return (
    <div id={`${id}`}>
      {/* S.O.L.I.D - OCP - Open-Closed Principle */}
      <div className="contentBefore">{contentBefore}</div>
      <div className="contentStatic">
        <Title level={2}>{title}</Title>
        <p>{description}</p>

        {showQuantity && (
          <>
            {quantity !== undefined && quantity > 0 ? (
              <p>Quantité : {quantity}</p>
            ) : (
              <>
                {/* @ts-ignore */}
                <Button onClick={handleConfirmDelete} className="confirmDelete">
                  Confirmer la suppression?
                </Button>
              </>
            )}
          </>
        )}

        {/* S.O.L.I.D - OCP - Open-Closed Principle */}
        <div className="contentAfter">{contentAfter}</div>
      </div>
    </div>
  );
};

export default CartElement;
