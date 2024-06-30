import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import OpenRouteLayout from "./app/components/layouts/open-route-layout";
import ErrorPage from "./app/core/error-handling/error-page";
import "./app/assets/fontello/css/fontello.css";
import Authentication from "./app/features/common/identity/oauth/login";
import Register from "./app/features/common/identity/oauth/register";
import Dashboard from "./app/features/management/dashboards/dashboard";
import Contact from "./app/features/common/identity/contacts/contact";
import AdminDashboard from "./app/features/management/products/dashboard";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<ErrorPage />} />
      <Route element={<OpenRouteLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>
    </>
  )
);
