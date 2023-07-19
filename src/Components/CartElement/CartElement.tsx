import { FC, MouseEvent, ReactNode, useState, useRef } from "react";
import { ICartElement } from "../../Interfaces/ICartElement";
import { Title, Button } from "../";
import "./CartElement.scss";

interface ICartElemWithActions extends ICartElement {
  showQuantity?: boolean;
  contentBefore?: ReactNode;
  contentAfter?: ReactNode;
  swippable?: boolean;
  handleConfirmDelete?: (event: MouseEvent<any>) => void;
}

const CartElement: FC<ICartElemWithActions> = ({
  title,
  description,
  quantity,
  showQuantity,
  contentBefore,
  contentAfter,
  swippable,
  handleConfirmDelete,
}) => {
  const [showContentBefore, setShowContentBefore] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current !== null) {
      const touchEndX = event.changedTouches[0].clientX;
      const touchDistance = touchEndX - touchStartXRef.current;

      if (touchDistance > 100) {
        setShowContentBefore(true);
      } else {
        setShowContentBefore(false);
      }

      touchStartXRef.current = null;
    }
  };

  const handleClickSwipe = () => {
    setShowContentBefore(!showContentBefore);
  };

  return (
    <div
      className="cartElement"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* S.O.L.I.D - OCP - Open-Closed Principle */}
      {contentBefore && (
        <div className={`contentBefore ${showContentBefore ? "show" : ""}`}>
          {contentBefore}
        </div>
      )}
      <div className={`contentStatic ${showContentBefore ? "swipe" : ""}`}>
        {swippable && (
          <div
            className="swipeDesktopHiddenButton"
            onClick={swippable && handleClickSwipe}
          ></div>
        )}
        <Title level={2}>{title}</Title>
        <p>{description}</p>

        {showQuantity && (
          <>
            {quantity !== undefined && quantity > 0 ? (
              <p>Quantité :{quantity}</p>
            ) : (
              <>
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
