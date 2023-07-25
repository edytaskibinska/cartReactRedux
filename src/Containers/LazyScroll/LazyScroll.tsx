import { FC, useEffect, useState } from "react";

export interface ILazyScroll<T> {
  items: T[];
  component: FC<{ cartItems: T[] }>;
  initialVisibleElement?: number;
  numberOfAddedElementOnScroll: number;
}

// S.O.L.I.D - SRP - Single Responsibility Principle
const LazyScroll = <T extends ILazyScroll<T>>({
  items,
  component: Component,
  initialVisibleElement,
  numberOfAddedElementOnScroll,
}: ILazyScroll<T>) => {
  const totalItems = items.length;
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const [visibleCount, setVisibleCount] = useState(
    initialVisibleElement || totalItems
  );

  useEffect(() => {
    //add event listener for scroll if there are more items to load
    if (visibleCount < totalItems) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);//cleanup function for better performance
      };
    }
  }, [visibleCount, totalItems]);

  useEffect(() => {
    //set the visible elements based on visibleCount
    setVisibleItems(items.slice(0, visibleCount));
  }, [items, visibleCount]);

  const handleScroll = () => {
    const totalPageHeight = document.body.scrollHeight;
    console.log("totalPageHeight", totalPageHeight);
    const currentPosition = window.innerHeight + window.scrollY;
    //check if the user reached the bottom of the page
    if (totalPageHeight - currentPosition < 100) {
      //load a defined number of elements on scroll
      setVisibleCount((prevCount) => prevCount + numberOfAddedElementOnScroll);
    }
  };

  return (
    <div className="lazyScroll">
      {/* S.O.L.I.D - OCP - Open-Closed Principle */}
      {/* this pattern allow to insert whatever component we want with visibele itemps we can set in it's props */}
      <Component cartItems={visibleItems} />
    </div>
  );
};

export default LazyScroll;
