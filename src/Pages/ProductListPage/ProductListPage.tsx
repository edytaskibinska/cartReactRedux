import { FC } from "react";
import "./ProductListPage.scss";
import { ProductList, LazyScroll } from "../../Containers";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/configureStore";
import { Banner, Box, Title } from "../../Components";
import image from "../../Assets/banner.png";
import { InterfaceCartElement } from "../../Interfaces/InterfaceCartElement";

interface IProductListPage {}

const ProductListPage: FC<IProductListPage> = () => {
  const products = useSelector((state: RootState) => state.products.items);

  return (
    <div className="productListPage">
      <Banner alt="banner" src={image} />
      <Box>
        <Title level={1}>Produits:</Title>
        <LazyScroll<InterfaceCartElement >
          items={products}
          component={ProductList}
          initialVisibleElement={4}
          numberOfAddedElementOnScroll={2}
        />
      </Box>
    </div>
  );
};

export default ProductListPage;
