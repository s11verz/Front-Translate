import { Routes, Route } from "react-router-dom";
import Register from "./register/Register";

export default function Router() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
