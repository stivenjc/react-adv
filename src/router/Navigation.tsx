import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { router } from "./router";
import moduleLogo from "../logo.svg";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={<span style={{ color: "red" }}>Loading</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={moduleLogo} alt="React Logo" />
            <ul>
              {router.map(({ name, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {router.map((item) => (
              <>
                <Route path={item.path} element={<item.Component />} />
                <Route path="/*" element={<Navigate to="lazy1" replace />} />
              </>
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
