import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import {
  FormikComponents,
  RegisterPage,
  FormikYupPage,
  FormikPage,
  FormikAbtract,
} from "../03-forms/pages/";
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
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formiik-component"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Component
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formiik-abtract"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abtract
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/formik-basic" element={<FormikPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formiik-component" element={<FormikComponents />} />
          <Route path="/formiik-abtract" element={<FormikAbtract />} />
          <Route path="/*" element={<Navigate to="/register" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
