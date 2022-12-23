import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { MyTextInput, Myselect, MyCheckbox } from "../components/";

export const FormikAbtract = () => {
  return (
    <div>
      <h1>FormikPage Abtract</h1>
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
            <MyTextInput label="first Name" name="firstName" />

            <MyTextInput label="Last Name" name="LastName" />

            <MyTextInput label="Email Address" name="email" type="email" />

            <Myselect name="jobTypes" label="Job Types">
              <option value="option1">option1</option>
              <option value="option2">option2</option>
              <option value="option3">option3</option>
              <option value="option4">option4</option>
            </Myselect>
            <ErrorMessage name="jobTypes" component="span" />

            <MyCheckbox label="terminos y condicioned" name="termins" />

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
