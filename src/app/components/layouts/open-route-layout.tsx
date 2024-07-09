import { NavLink, useOutlet } from "react-router-dom";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import "../../styles/components/layout/_app-core-layout.scss";

export default function OpenRouteLayout() {
  const outlet = useOutlet();
  // const commonLocalizer = useLocalizer("Common-ResCommon");

  return (
    <>
      <KindeProvider
        clientId="42f6b4eec5c84e28aa3cc18e94154d63"
        domain="https://hindra98.kinde.com"
        redirectUri="http://localhost:5173"
        logoutUri="http://localhost:5173"
      >
        <div className="afrochic flex flex-col gap-0 w-full">
          <header className="w-full">
            <nav className="flex flex-row w-full justify-between items-center p-2">
              <div className="actions flex flex-row items-center justify-start gap-4">
                <NavLink to={"/"}>AfroChic</NavLink>
                <NavLink to={"/contact"}>contact</NavLink>
              </div>
              <div className="user flex flex-row items-center justify-end gap-4">
                <NavLink to={"/admin"}>Administrateur</NavLink>
                <NavLink to={"/shop"}>Boutique</NavLink>
                <NavLink to={"/login"}>Login</NavLink>
                <NavLink to={"/register"}>Register</NavLink>
              </div>
            </nav>
          </header>

          <div className="outlet w-full open-layout">
            <div>{outlet}</div>
          {/* <Footer /> */}
          </div>
        </div>
      </KindeProvider>
    </>
  );
}
