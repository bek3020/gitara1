import React from "react";
import { Route, Routes } from "react-router-dom";
import Leyout from "./components/Leyout";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Like from "./pages/Like";
import Contakt from "./pages/Contakt";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Leyout />}>
          <Route index element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/like" element={<Like />} />
          <Route path="/contakt" element={<Contakt />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
