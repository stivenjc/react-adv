import React, { lazy } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { LaziPage1, LaziPage2, LaziPage3 } from "../pages";

const Tests = lazy(
  () => import(/* webpackChunkName: 'lazyPage1' */ "../pages/Tests")
);

export const LazyLayout = () => {
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>Lazy Layout</h1>
      <ul>
        <li>
          <NavLink to="lazy11">Lazy1</NavLink>
        </li>
        <li>
          <NavLink to="lazy22">Lazy2</NavLink>
        </li>
        <li>
          <NavLink to="lazy33">Lazy3</NavLink>
        </li>
        <li>
          <NavLink to="test">Lazy3</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy11" element={<LaziPage1 />} />
        <Route path="lazy22" element={<LaziPage2 />} />
        <Route path="lazy33" element={<LaziPage3 />} />
        <Route path="test" element={<Tests />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
