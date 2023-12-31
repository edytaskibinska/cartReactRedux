import { Layout } from "../Layout";

import { CartPage, PageNotFound, ProductListPage } from "../Pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Outlet } from "react-router-dom";

//S.O.L.I.D - SRP - Single Responsibility Principle
//all routes configuration in one file
const Root = () => {
  return <Layout content={<Outlet />} />
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<ProductListPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default Root;
