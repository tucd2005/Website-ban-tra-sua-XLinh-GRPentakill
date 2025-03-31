import {  Outlet, Route, Routes } from "react-router-dom";
import LayoutAdmin from "./admin/components/LayoutAdmin";
import ProductList from "../src/admin/pages/products/list";
import ProductEdit from "./admin/pages/products/edit";
import ProductCart from "./admin/pages/products/cart";

function App() {
  return (
    <>
      {/* <Counter /> */}
      <Routes>
        <Route
          path="admin"
          element={
            <LayoutAdmin>
              <Outlet />
            </LayoutAdmin>
          }
        >
          {/* <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<h1>Dashboard</h1>} /> */}
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path="edit/:id" element={<ProductEdit/>}/>
            <Route path="cart" element={<ProductCart/>}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
