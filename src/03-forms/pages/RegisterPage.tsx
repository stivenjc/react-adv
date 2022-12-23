import { FormEvent } from "react";
import { useForm } from "../hooks/useForms";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    formData,
    onChange,
    email,
    name,
    password1,
    password2,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>RegisterPage</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
          name="name"
          className={`${name.length <= 0 && "has-error"}`}
        />
        {name.length <= 0 && <span>este campo e snecesario</span>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          name="email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no es validao</span>}
        <input
          type="password"
          placeholder="password"
          value={password1}
          onChange={onChange}
          name="password1"
        />
        {password1.length <= 0 && <span>este campo e snecesario</span>}
        {password1.length < 6 && password1.length > 0 && (
          <span>deve de ser mayor a 6 catectheres</span>
        )}
        <input
          type="password"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
          name="password2"
        />
        {password2.length <= 0 && <span>este campo e snecesario</span>}

        {password1 !== password2 && password1.length > 0 && (
          <span>las contraseñas deben se iguales</span>
        )}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Resetear
        </button>
      </form>
    </div>
  );
};
