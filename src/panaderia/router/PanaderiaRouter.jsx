import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage";
import { ShopPage } from "../pages/ShopPage";
import { CartPage } from "../pages/CartPage";
import { Header } from "../components/Header";

export function PanaderiaRouter() {


  return (

    <>
      <Header />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<Navigate to="/" />} />

      </Routes>

    </>
  );
};