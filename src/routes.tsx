import { Routes, Route } from "react-router-dom";
import Home from "./pages/P001-Home";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
