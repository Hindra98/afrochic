import { createContext, useContext, useMemo, useState } from "react";
import { getStorage } from "../storage/storage";

export type GlobalContent = {
  languages: Language[];
  accessToken: string;
}

const AuthContext = createContext<GlobalContent>({
  languages: [],
  accessToken: "",
});

export const AuthenticationProvider = ({ children, languages }) => {

  const [accessToken, setAccessToken] = useState(getStorage("access_token"));
  //const accessToken = getStorage("access_token");
  // const navigate = useNavigate();

  // const login = async (data) => {

  //   setAccessToken(data);
  //   navigate("/profile");
  // };

  // const logout = () => {

  //   setAccessToken(null);
  //   setStorage("access_token", null);
  //   navigate("/", { replace: true });
  // };

  const value = useMemo(
      () => ({
        languages: languages,
        accessToken: accessToken,
      }),
      [languages, accessToken]
    );

  // const value = {
  //   access_token: accessToken,
  //   login,
  //   logout,
  // }
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useFxContext = () => {
  return useContext(AuthContext);
};