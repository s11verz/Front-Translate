import { Routes, Route } from "react-router-dom";

import Login from "@pages/User/Login";
import KCallback from "@/components/Oauth/KCallback";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<div>라우터</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/oauth/kakaocallback" element={<KCallback />} />
    </Routes>
  );
}
