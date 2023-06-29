import { BrowserRouter, Route, Routes } from "react-router-dom";

import Create from "@src/pages/Create";
import Home from "@src/pages/Home";
import Read from "@src/pages/Read";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/message/:id" element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
