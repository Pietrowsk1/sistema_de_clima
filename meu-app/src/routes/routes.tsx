import { Route, Routes } from "react-router";
import AppLayout from "../components/AppLayout";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}