import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import OpenRouteLayout from "./app/components/layouts/open-route-layout";
import ErrorPage from "./app/core/error-handling/error-page";
import "./app/assets/fontello/css/fontello.css";
import Authentication from "./app/features/common/identity/oauth/login";
import Register from "./app/features/common/identity/oauth/register";
import Home from "./app/features/home/home";
import Dashboard from "./app/features/management/dashboards/dashboard";
import Contact from "./app/features/common/identity/contacts/contact";
import AdminDashboard from "./app/features/management/products/dashboard";
import Product from "./app/features/management/products/product";
import Shop from "./app/features/management/shop/shop";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<ErrorPage />} />
      <Route element={<OpenRouteLayout />} errorElement={<h2 className="mx-auto font-extrabold text-6xl">Oppp</h2>}>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/shop" element={<Shop/>} errorElement={<h1> Erreur dans le composant shop</h1>}>
        <Route path="" element={<Shop/>} />
        <Route path="product" element={<Product/>} />
        </Route>
      </Route>
    </>
  )
);
