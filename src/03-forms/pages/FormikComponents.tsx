import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

export const FormikComponents = () => {
  return (
    <div>
      <h1>FormikPage Components</h1>
      <Formik
        initialValues={initialValues()}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object(newSchame())}
        validateOnChange={false}
      >
        {(formit) => (
          <Form>
            <label>first Name</label>
            <Field name="firstName" type="text" placeholder="first name" />
            <ErrorMessage name="firstName" component="span" />

            <label>Last Name</label>
            <Field name="LastName" type="text" />
            <ErrorMessage name="LastName" component="span" />

            <label>Email Address</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />

            <label>Image</label>
            <Field name="image" type="image" />
            <ErrorMessage name="image" component="span" />

            <label>JOb Types</label>
            <Field name="jobTypes" as="select">
              <option value="option1">option1</option>
              <option value="option2">option2</option>
              <option value="option3">option3</option>
              <option value="option4">option4</option>
            </Field>
            <ErrorMessage name="jobTypes" component="span" />

            <label>
              <Field name="termins" type="checkbox" />
              Terminos
            </label>
            <ErrorMessage name="termins" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
// retorna lols valores iniciales

function initialValues() {
  return {
    firstName: "",
    LastName: "",
    email: "",
    termins: false,
    jobTypes: "",
    image: "",
  };
}

function newSchame() {
  return {
    firstName: Yup.string()
      .max(15, "debe tener 15 carecteres o menos")
      .required("Requerido"),
    LastName: Yup.string().required("requeridoooo"),
    email: Yup.string().email("no tien un formato valido").required("required"),
    termins: Yup.boolean().oneOf([true], "debe de aceptar las condiciones"),
    jobTypes: Yup.string().required(),
  };
}
