import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(newSchame()),
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const getfields = formik.getFieldProps;

  return (
    <div>
      <h1>Register Formik Pageee</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          {...getfields("name")}
          className={`${formik.errors.name && "has-error"}`}
        />
        {formik.errors.name && <span>{formik.errors.name}</span>}
        <input
          type="email"
          placeholder="Email"
          {...getfields("email")}
          className={`${formik.errors.email && "has-error"}`}
        />
        {formik.errors.email && <span>{formik.errors.email}</span>}
        <input
          type="password"
          placeholder="password"
          {...getfields("password1")}
          className={`${formik.errors.password1 && "has-error"}`}
        />
        {formik.errors.password1 && <span>{formik.errors.password1}</span>}
        <input
          type="password"
          placeholder="Repeat Password"
          {...getfields("password2")}
          className={`${formik.errors.password2 && "has-error"}`}
        />
        {formik.errors.password2 && <span>{formik.errors.password2}</span>}
        <button type="submit">Create</button>
        <button type="button">Resetear</button>
      </form>
    </div>
  );
};

function initialValues() {
  return {
    name: "",
    email: "",
    password1: "",
    password2: "",
  };
}

function newSchame() {
  return {
    name: Yup.string()
      .max(15, "menor o igual a 15 caracteres")
      .min(2, "mayor o igual a 2 carateres")
      .required("Requerido"),
    email: Yup.string()
      .email("no es un formato dew email?!!?")
      .required("Requerido"),
    password1: Yup.string()
      .typeError("solo se puede letras")
      .min(6, "mayor o igual a 6 caracteres")
      .required("Requerido"),
    password2: Yup.string()
      .min(6, "mayor o igual a 6 caracteres")
      .oneOf([Yup.ref("password1")], "las contraseñas deben coincidir")
      .required("Requerido")
      .typeError("solo se puede letras"),
  };
}
