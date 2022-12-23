import React from "react";
import "../styles/styles.css";
import { useFormik, FormikErrors } from "formik";

interface FormValues {
  firstName: string;
  LastName: string;
  email: string;
}

export const FormikPage = () => {
  const validate = ({ firstName }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) {
      errors.firstName = "este campo es requerido";
    } else if (firstName.length >= 15) {
      errors.firstName = "no pued econtener mas de 15 caracterres";
    }
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validate,
    onSubmit: (formValues) => {
      console.log(formValues);
    },
  });

  return (
    <div>
      <h1>FormikPage</h1>
      <form noValidate onSubmit={formik.handleSubmit}>
        <label>first Name</label>
        <input
          type="text"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        {formik.errors.firstName && <span>{formik.errors.firstName}</span>}

        <label>Last Name</label>
        <input
          type="text"
          name="LastName"
          value={formik.values.LastName}
          onChange={formik.handleChange}
        />
        <span>Last Name is required</span>

        <label>Email Address</label>
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <span>Email Address is required</span>
        <span>Check for an email format</span>

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
