import { FC } from "react";
import "./ProductListPage.scss";
import { ProductList } from "../../Containers";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/configureStore";
import { Title } from "../../Components";

interface IProductListPage {}

const ProductListPage: FC<IProductListPage> = () => {
  const products = useSelector((state: RootState) => state.products.items);
  //   const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="productListPage">
      <Title level={1}>Product page</Title>
      <>{console.log("products", products)}</>
      <ProductList cartItems={products} />
    </div>
  );
};

export default ProductListPage;
