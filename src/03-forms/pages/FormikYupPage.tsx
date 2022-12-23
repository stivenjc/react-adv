import * as Yup from "yup";
import { useFormik } from "formik";

export const FormikYupPage = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(newSchame()),
    validateOnChange: false,
    onSubmit: (formValues) => {
      console.log(formValues);
    },
  });

  const getfields = formik.getFieldProps;

  return (
    <div>
      <h1>FormikPage yup</h1>
      <form noValidate onSubmit={formik.handleSubmit}>
        <label>first Name</label>
        <input type="text" {...getfields("firstName")} />
        {formik.errors.firstName && <span>{formik.errors.firstName}</span>}

        <label>Last Name</label>
        <input type="text" {...getfields("LastName")} />
        {formik.errors.LastName && <span>{formik.errors.LastName}</span>}

        <label>Email Address</label>
        <input type="text" {...getfields("email")} />
        {formik.errors.email && <span>{formik.errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

function initialValues() {
  return {
    firstName: "",
    LastName: "",
    email: "",
  };
}

function newSchame() {
  return {
    firstName: Yup.string()
      .max(15, "debe tener 15 carecteres o menos")
      .required("Requerido"),
    LastName: Yup.string().required("requeridoooo"),
    email: Yup.string().email("no tien un formato valido").required(),
  };
}
