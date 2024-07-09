// import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Button from "../../../../components/form/Button";
import InputWithIcon from "../../../../components/form/Input";
import * as Yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import appStore from "../../../../assets/appstore.png";
import HelpText from "./help-text";
import { isEmail } from "../../../../core/text/regex";

const Authentication = () => {
  // const { login, register } = useKindeAuth();

  const schema = Yup.object().shape({
    email: Yup.string(),
    password: Yup.string(),
  });

  const [loginViewModel, setLoginViewModel] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrors({ ...errors, [name]: "" });

    setLoginViewModel({
      ...loginViewModel,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });

    // const values = loginViewModel;
    const values = await schema.validate(loginViewModel);

    if (values.password === "" || !isEmail(values.email) || values.email === "") {
      let password = "",
        email = "";
      if (values.password === "") password = "Ce champ est requis";
      if (values.email === "") email = "Ce champ est requis";
      if (!isEmail(values.email)) email = "Doit être un e-mail";

      setErrors({ email: email, password: password });
    } else {
      console.log("Login data: ", loginViewModel);
    }
  };

  return (
    <section className="min-h-full">
      <div className="lg:grid lg:min-h-[calc(100vh-41px)] lg:grid-cols-12">
        <HelpText />

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <Link
                to={"/"}
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
              >
                <span className="sr-only">Home</span>
                <img
                  alt="App Store Logo"
                  className="h-8 sm:h-10"
                  src={appStore}
                />
              </Link>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Bienvenue chez AfroChic
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>

            <form
              action="#"
              className="mt-8 grid grid-cols-6 gap-6"
              onSubmit={handleSubmit}
            >
              <div className="col-span-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-mail
                </label>

                <InputWithIcon
                  type={"email"}
                  name={"email"}
                  id={"email"}
                  className="mt-1"
                  value={loginViewModel.email}
                  icon="mail-alticon-"
                  placeholder="E-mail"
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="error">{errors.email.toString()}</div>
                )}
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mot de passe
                </label>

                <InputWithIcon
                  type={"password"}
                  name={"password"}
                  id={"password"}
                  className="mt-1"
                  value={loginViewModel.password}
                  icon="lock-1icon-"
                  placeholder="Mot de passe"
                  onChange={handleChange}
                  eye
                />
                {errors.password && (
                  <div className="error">{errors.password.toString()}</div>
                )}
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button
                  param={{
                    type: "submit",
                    name: "Se connecter",
                    css: "mx-auto login-btn inline-block shrink-0 rounded-md",
                  }}
                />

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Vous n'avez pas encore un compte?{" "}
                  <Link to={"/register"} className="text-gray-700 underline">
                    Créer un compte
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Authentication;
