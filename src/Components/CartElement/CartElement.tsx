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
  title,
  description,
  quantity,
  showQuantity,
  contentBefore,
  contentAfter,
  handleConfirmDelete,
}) => {
  return (
    <div className="cartElement">
      {/* S.O.L.I.D - OCP - Open-Closed Principle */}

      {contentBefore && <div className="contentBefore">{contentBefore}</div>}
      <div className="contentStatic">
        <Title level={2}>{title}</Title>
        <p>{description}</p>

        {showQuantity && (
          <>
            {quantity !== undefined && quantity > 0 ? (
              <p>Quantité :{quantity}</p>
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
        {contentAfter && <div className="contentAfter">{contentAfter}</div>}
      </div>
    </div>
  );
};

export default CartElement;
