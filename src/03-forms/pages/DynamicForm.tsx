import { Formik, Form } from "formik";
import { MyTextInput } from "../components";
import FormJSON from "../data/custom-form.json";
import * as Yup from "yup";
import { Myselect } from "../components/Myselect";

export const DynamicForm = () => {
  console.log(FormJSON);

  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formit) => (
          <Form>
            {FormJSON.map((field) => {
              if (
                field.type === "input" ||
                field.type === "password" ||
                field.type === "email"
              ) {
                return (
                  <MyTextInput
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    type={field.type as any}
                    placeholder={field.placeholder}
                  />
                );
              } else if (field.type) {
                return (
                  <Myselect
                    key={field.name}
                    label={field.label}
                    name={field.name}
                  >
                    {field?.options?.map((option) => (
                      <option value={option?.id}>{option?.label}</option>
                    ))}
                  </Myselect>
                );
              }
              return <span>el tipo de dato no es soportado</span>;
            })}
            <button>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};
const validationSchema = Yup.object({ ...requiredFields });

for (let input of FormJSON) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (let rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("este campo es requerido");
    }
  }

  requiredFields[input.name] = schema;
}
