import { Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<div>라우터</div>} />
    </Routes>
  );
}
