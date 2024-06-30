
import Button from "../../../../components/form/Button";
import InputWithIcon from "../../../../components/form/Input";
// import * as Yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import HelpText from "./help-text";

const Register = () => {

  // const schema = Yup.object().shape({
  //   username: Yup.string(),
  //   password: Yup.string(),
  // });

  const [registerViewModel, setLoginViewModel] = useState({
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrors({ username: "", password: "", passwordRepeat: "", email: "" });

    setLoginViewModel({
      ...registerViewModel,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ username: "", password: "", passwordRepeat: "", email: "" });

    const values = registerViewModel;
    // const values = await schema.validate(registerViewModel);

    if (values.password === "" || values.username === "" || values.passwordRepeat === "") {
      let password = "", passwordRepeat = "", email = "", username = "";
      if (values.password === "") password = "Ce champ est requis";
      if (values.username === "") username = "Ce champ est requis";
      if (values.passwordRepeat === "") passwordRepeat = "Ce champ est requis";
      if (values.email === "") email = "Ce champ est requis";

      setErrors({ username: username, password: password, passwordRepeat: passwordRepeat, email: email });
    } else {
      console.log("Login data: ", registerViewModel);
    }
  };


  return (
    <div className="flex flex-row justify-between items-center h-[94vh]">
      <HelpText />
      <div className="register flex flex-col mx-auto">
        <h1 className="text-xl text-center">Creer un compte</h1>
        <form className="form flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <InputWithIcon
              type={"text"}
              name={"email"}
              id={"email"}
              value={registerViewModel.email}
              icon="user-8icon-"
              placeholder="E-mail"
              onChange={handleChange}
            />
            {errors.email && (
              <div className="error">{errors.email.toString()}</div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <InputWithIcon
              type={"text"}
              name={"username"}
              id={"username"}
              value={registerViewModel.username}
              icon="user-8icon-"
              placeholder="Nom d'utilisateur"
              onChange={handleChange}
            />
            {errors.username && (
              <div className="error">{errors.username.toString()}</div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <InputWithIcon
              type={"password"}
              name={"password"}
              id={"password"}
              value={registerViewModel.password}
              icon="lock-1icon-"
              placeholder="Mot de passe"
              onChange={handleChange}
            />
            {errors.password && (
              <div className="error">{errors.password.toString()}</div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <InputWithIcon
              type={"password"}
              name={"passwordRepeat"}
              id={"passwordRepeat"}
              value={registerViewModel.passwordRepeat}
              icon="lock-1icon-"
              placeholder="Repeter le mot de passe"
              onChange={handleChange}
            />
            {errors.passwordRepeat && (
              <div className="error">{errors.passwordRepeat.toString()}</div>
            )}
          </div>
          <Button
            param={{
              type: "submit",
              name: "Creer un compte",
              css: "mx-auto register-btn",
            }}
          />
        </form>
        <div className="no-account my-4">Vous avez deja un compte? <Link to={"/login"}>Connectez-vous</Link> </div>

      </div>
    </div>
  )
}

export default Register