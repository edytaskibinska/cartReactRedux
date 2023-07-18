import { FC } from "react";
import "./ProductListPage.scss";
import { CartList } from "../../Containers";

interface IProductListPage {}

const ProductListPage: FC<IProductListPage> = () => {
  return (
    <div className="productListPage">
      <h1>Product page</h1>
      <CartList />
    </div>
  );
};

export default ProductListPage;
