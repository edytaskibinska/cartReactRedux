import { FC, MouseEvent, ReactNode, useState, useRef } from "react";
import { InterfaceCartElement } from "../../Interfaces/InterfaceCartElement";
import { Title, Button } from "../";
import "./CartElement.scss";

interface ICartElemWithActions extends InterfaceCartElement {
  showQuantity?: boolean;
  contentBefore?: ReactNode;
  contentAfter?: ReactNode;
  swippable?: boolean;
  handleConfirmDelete?: (event: MouseEvent<any>) => void;
}

// S.O.L.I.D - SRP - Single Responsibility Principle
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
  //SWIPE:
  //state to control the display of content before on swipe
  const [showContentBefore, setShowContentBefore] = useState(false);
  //reference to store the initial touch position during swipe
  const touchStartXRef = useRef<number | null>(null);
  //handle the initial touch during swipe
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0].clientX;//returns the x coord of the touch point relative to the viewport
  };

  //handle the touch release during swipe
  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current !== null) {
      const touchEndX = event.changedTouches[0].clientX;//defining touch end
      const touchDistance = touchEndX - touchStartXRef.current;

      //if the swipe exceeds 100 pixels, show the content before
      if (touchDistance > 100) {
        setShowContentBefore(true);
      } else {
        setShowContentBefore(false);
      }

      touchStartXRef.current = null;
    }
  };

  //handle click during swipe on non-touch devices
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
      {/* display content before (if defined) on swipe */}
      {contentBefore && (
        <div className={`contentBefore ${showContentBefore ? "show" : ""}`}>
          {contentBefore}
        </div>
      )}

      <div className={`contentStatic ${showContentBefore ? "swipe" : ""}`}>
        {swippable && (
          // hidden button that handles swipe on non-touch devices
          <div
            className="swipeDesktopHiddenButton"
            onClick={swippable && handleClickSwipe}
          ></div>
        )}
        {/* display title and description */}
        <Title level={2}>{title}</Title>
        <p>{description}</p>

        {/* display product quantity or a delete confirmation button */}
        {showQuantity && (
          <>
            {quantity !== undefined && quantity > 0 ? (
              <p className="smallText">Quantity: {quantity}</p>
            ) : (
              <>
                <Button onClick={handleConfirmDelete} className="confirmDelete">
                  Confirm Delete?
                </Button>
              </>
            )}
          </>
        )}

        {/* S.O.L.I.D - OCP - Open-Closed Principle */}
        {/* display content after (if defined) */}
        {contentAfter && <div className="contentAfter">{contentAfter}</div>}
      </div>
    </div>
  );
};

export default CartElement;
