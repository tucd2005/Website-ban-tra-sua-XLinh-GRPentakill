import { Outlet, Route, Routes } from "react-router-dom";
import LayoutAdmin from "./admin/components/LayoutAdmin";
import ProductList from "../src/admin/pages/products/list";
import ProductEdit from "./admin/pages/products/edit";
import ProductCart from "./admin/pages/products/cart";
import ProductAdd from "./admin/pages/products/create";
import Layout from "./component/layout";
import Home from "./component/layout/home";
import Login from "./component/layout/login";
import Create from "./admin/pages/products/create";

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

            <Route path="edit/:id" element={<ProductEdit />} />
            <Route path="add" element={<Create />} />
            <Route path="cart" element={<ProductCart />}></Route>
          </Route>
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
