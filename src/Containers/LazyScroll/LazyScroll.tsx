import { FC, useEffect, useState } from "react";

interface ILazyScroll<T> {
  items: T[];
  component: FC<{ cartItems: T[] }>;
  initialVisibleElement: number;
  numberOfAddedElementOnScroll: number;
}

const LazyScroll = <T extends any>({
  items,
  component: Component,
  initialVisibleElement,
  numberOfAddedElementOnScroll,
}: ILazyScroll<T>) => {
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const [visibleCount, setVisibleCount] = useState(initialVisibleElement);
  const totalItems = items.length;

  useEffect(() => {
    if (visibleCount < totalItems) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [visibleCount, totalItems]);

  useEffect(() => {
    // set the visible elements - based on visibleCount
    setVisibleItems(items.slice(0, visibleCount));
  }, [items, visibleCount]);

  const handleScroll = () => {
    const totalPageHeight = document.body.scrollHeight;
    const currentPosition = window.innerHeight + window.scrollY;
    // checking if user reached the bottom of the page :
    if (totalPageHeight - currentPosition < 100) {
      // loading a defined number of elemnts on scroll
      setVisibleCount((prevCount) => prevCount + numberOfAddedElementOnScroll);
    }
  };

  return (
    <div className="lazyScroll">
      {/* S.O.L.I.D - OCP - Open-Closed Principle */}
      <Component cartItems={visibleItems} />
    </div>
  );
};

export default LazyScroll;
