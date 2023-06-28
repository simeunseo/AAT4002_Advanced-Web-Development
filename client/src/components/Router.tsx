import { BrowserRouter, Route, Routes } from "react-router-dom";

import Create from "@src/pages/Create";
import Home from "@src/pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
