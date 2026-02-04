import { Navigate, Route, Routes } from "react-router-dom";
import GuardRoute from "../components/GuardRoute";
import GuestOnlyRoute from "../components/GuestOnlyRoute";
import SignInPage from "../pages/signin";
import { HomeRoute } from "./HomeRoute";
import SNavbar from "../components/Navbar";
import { CategoriesRoute } from "./CategoriesRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <GuestOnlyRoute>
            <SignInPage />
          </GuestOnlyRoute>
        }
      />
      <Route
        path="/"
        element={
          <>
            <SNavbar />
            <GuardRoute />
          </>
        }
      >
        <Route path="dashboard/*" element={<HomeRoute />} />
        <Route path="categories/*" element={<CategoriesRoute />} />
        <Route path="" element={<Navigate to="/dashboard" replace="true" />} />
      </Route>
    </Routes>
  );
}
