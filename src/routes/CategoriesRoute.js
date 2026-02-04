import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPage from "../pages/categories";
import CategoriesCreate from "../pages/categories/create";
import CategoriesEdit from "../pages/categories/edit";

export function CategoriesRoute() {
  return (
    <Routes>
      <Route path="/" element={<CategoriesPage />} />
      <Route path="/create" element={<CategoriesCreate />} />
      <Route path="/edit/:categoryId" element={<CategoriesEdit />} />
    </Routes>
  );
}
