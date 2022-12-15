import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { LaziPage1, LaziPage2, LaziPage3 } from "../01-lazyload/pages";
import moduleLogo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={moduleLogo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/lazy1"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                lazy1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                lazy2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                lazy3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/lazy1" element={<LaziPage1 />} />
          <Route path="/lazy2" element={<LaziPage2 />} />
          <Route path="/lazy3" element={<LaziPage3 />} />
          <Route path="/*" element={<Navigate to="/lazy1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
