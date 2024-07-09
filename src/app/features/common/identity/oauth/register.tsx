import Button from "../../../../components/form/Button";
import InputWithIcon from "../../../../components/form/Input";
import * as Yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import appStore from "../../../../assets/appstore.png";
import HelpText from "./help-text";
import { isEmail } from "../../../../core/text/regex";

const Register = () => {
  const schema = Yup.object().shape({
    firstname: Yup.string(),
    lastname: Yup.string(),
    email: Yup.string(),
    password: Yup.string(),
    passwordRepeat: Yup.string(),
  });

  const [registerViewModel, setLoginViewModel] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrors({ ...errors, [name]: "" });

    setLoginViewModel({
      ...registerViewModel,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({
      firstname: "",
      lastname: "",
      password: "",
      passwordRepeat: "",
      email: "",
    });

    // const values = registerViewModel;
    const values = await schema.validate(registerViewModel);

    if (
      values.password === "" ||
      values.password !== values.passwordRepeat ||
      values.firstname === "" ||
      values.lastname === "" ||
      !isEmail(values.email) ||
      values.password.length < 8
    ) {
      let password = "",
        passwordRepeat = "",
        email = "",
        lastname = "",
        firstname = "";
      if (values.password === "") password = "Ce champ est requis";
      if (values.firstname === "") firstname = "Ce champ est requis";
      if (values.lastname === "") lastname = "Ce champ est requis";
      if (values.password.length < 8)
        password = "Doit contenir au moins huit(08) caractères";
      if (values.email === "") email = "Ce champ est requis";
      if (!isEmail(values.email)) email = "Doit être un e-mail";
      if (values.password !== values.passwordRepeat)
        passwordRepeat = "Les mots de passe ne correspondent pas";

      setErrors({
        ...errors,
        firstname: firstname,
        lastname: lastname,
        password: password,
        email: email,
        passwordRepeat: passwordRepeat,
      });
    } else {
      console.log("Login data: ", registerViewModel);
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
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Prénoms
                </label>
                <InputWithIcon
                  type={"text"}
                  name={"firstname"}
                  id={"firstname"}
                  value={registerViewModel.firstname}
                  icon="user-8icon-"
                  placeholder="Prénoms"
                  onChange={handleChange}
                />
                {errors.firstname && (
                  <div className="error">{errors.firstname.toString()}</div>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Noms
                </label>

                <InputWithIcon
                  type={"text"}
                  name={"lastname"}
                  id={"lastname"}
                  value={registerViewModel.lastname}
                  icon="user-8icon-"
                  placeholder="Noms"
                  onChange={handleChange}
                />
                {errors.lastname && (
                  <div className="error">{errors.lastname.toString()}</div>
                )}
              </div>

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
                  value={registerViewModel.email}
                  icon="mail-alticon-"
                  placeholder="E-mail"
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="error">{errors.email.toString()}</div>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
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
                  value={registerViewModel.password}
                  icon="lock-1icon-"
                  placeholder="Mot de passe"
                  onChange={handleChange}
                  eye
                />
                {errors.password && (
                  <div className="error">{errors.password.toString()}</div>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="passwordRepeat"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirmation de mot de passe
                </label>
                <InputWithIcon
                  type={"password"}
                  name={"passwordRepeat"}
                  id={"passwordRepeat"}
                  value={registerViewModel.passwordRepeat}
                  icon="lock-1icon-"
                  placeholder="Repeter le mot de passe"
                  onChange={handleChange}
                  eye
                />
                {errors.passwordRepeat && (
                  <div className="error">
                    {errors.passwordRepeat.toString()}
                  </div>
                )}
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    Je voudrais recevoir les mails en rapport aux mises à jour
                    des produits et autres annonces de AfroChic.
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  En créant votre compte, vous acceptez avoir lu {" "}
                  <Link to={""} className="text-gray-700 underline">
                    les termes et conditions
                  </Link>{" "}
                  de {" "}
                  <Link to={""} className="text-gray-700 underline">
                    notre politique de confidentialité
                  </Link>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button
                  param={{
                    type: "submit",
                    name: "Creer un compte",
                    css: "mx-auto register-btn inline-block shrink-0 rounded-md",
                  }}
                />

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Vous avez deja un compte? {" "}
                  <Link to={"/login"} className="text-gray-700 underline">
                    Connectez-vous
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

export default Register;
