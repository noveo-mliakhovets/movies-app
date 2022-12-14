import * as React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { MovieDetailsPage } from "./pages/movieDetailPage/MovieDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
