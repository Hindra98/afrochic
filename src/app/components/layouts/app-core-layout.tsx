import { Link, Navigate, useLocation, useOutlet } from "react-router-dom";
import { getStorage } from "src/app/core/storage/storage";
import Sidebar from "../shared/side-bar";
import { useAppSelector } from "src/app/core/hooks/core-hooks";
import { loadTranslationResources } from "src/app/core/Localization/load-language-resource";
import "../../styles/_app-core-layout.scss";
import FooterAuth from "../form/FooterAuth";
import { useLocalizer } from "src/app/core/Localization";

export const AppCoreLayout = () => {
  const token = getStorage("access_token");
  const outlet = useOutlet();
  const commonLocalizer = useLocalizer("Common-ResCommon");
  const token_redux = useAppSelector((state) => state.authenticatedUser.value);
  const {pathname} = useLocation();
  if(!pathname.includes("change-password")) {
    getStorage("is_verified", true);
  }

  const classTarget = "main-menu-content"

  loadTranslationResources();

  if (!token || !token_redux.token) {
    return <Navigate to="/" />
  }
  return (
    <>
      <div id="menu-wrapper" className="control-section h-screen">
        <div id="sidebarmenu" className="h-full">
            <Sidebar classTarget={classTarget} />
            <div className={classTarget} id="maintext">
              <div className="menu-content px-1">
                {outlet}
                {/*                 
                  <FooterAuth className=""
                    itemLeft={[
                      { name: <><i className={"e-icons copyrighticon- font-medium"}></i> OctopusFX</>, },
                      { name: <><i className={"e-icons trademarkicon- font-medium"}></i> 2024</>, },
                      { name: <i className={"e-icons copyrighticon- font-medium"}></i>, },
                    ]}
                    itemCenter={[]}
                    itemRight={[
                      { name: <Link to={"/privacy"}>{ commonLocalizer("MODULE_COMMON_AUTHENTICATION_LAYOUT_PRIVACY_AND_COOKIES") }</Link> },
                      { name: <Link to={"/cookies"}>{ commonLocalizer("MODULE_COMMON_AUTHENTICATION_LAYOUT_TERMS_OF_USE") }</Link> },
                  ]} /> 
                */}

              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default AppCoreLayout;
