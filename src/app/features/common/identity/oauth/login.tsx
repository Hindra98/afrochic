import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Button from "../../../../components/form/Button";
import InputWithIcon from "../../../../components/form/Input";
// import * as Yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import HelpText from "./help-text";

const Authentication = () => {
  const { login, register } = useKindeAuth();

  // const schema = Yup.object().shape({
  //   username: Yup.string(),
  //   password: Yup.string(),
  // });

  const [loginViewModel, setLoginViewModel] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrors({ username: "", password: "" });

    setLoginViewModel({
      ...loginViewModel,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ username: "", password: "" });

    const values = loginViewModel;
    // const values = await schema.validate(loginViewModel);

    if (values.password === "" || values.username === "") {
      let password = "",
        username = "";
      if (values.password === "") password = "Ce champ est requis";
      if (values.username === "") username = "Ce champ est requis";

      setErrors({ username: username, password: password });
    } else {
      console.log("Login data: ", loginViewModel);
    }
  };

  return (
    <div className="flex flex-row justify-between items-center h-[94vh]">
      <HelpText />
      <div className="login flex flex-col mx-auto">
        <h1 className="text-xl text-center">Log in</h1>
        <form className="form flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <InputWithIcon
              type={"text"}
              name={"username"}
              id={"username"}
              value={loginViewModel.username}
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
              value={loginViewModel.password}
              icon="lock-1icon-"
              placeholder="Mot de passe"
              onChange={handleChange}
            />
            {errors.password && (
              <div className="error">{errors.password.toString()}</div>
            )}
          </div>
          <Button
            param={{
              type: "submit",
              name: "Se connecter",
              css: "mx-auto login-btn",
            }}
          />
        </form>
        <div className="no-account my-4">Vous n'avez pas encore compte? <Link to={"/register"}>Creer un compte</Link> </div>

        <div className="flex flex-row mx-auto gap-2 justify-between items-center">
          <Button
            param={{
              type: "button",
              name: "Login with google",
              handleClick: login,
            }}
          />
          <Button
            param={{
              type: "button",
              name: "Register with google",
              handleClick: register,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
