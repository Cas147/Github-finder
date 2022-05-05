import { render } from "react-dom";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Repositories } from "./pages/Repositories";
import { Home } from "./pages/Home";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repositories" element={<Repositories />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
