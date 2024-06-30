import { MouseEventHandler, useState } from "react";
import { AppBarComponent, MenuComponent, MenuItemModel, MenuEventArgs } from "@syncfusion/ej2-react-navigations";
import { DropDownButtonComponent, ItemModel } from "@syncfusion/ej2-react-splitbuttons";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import octopusfx from "../../assets/octopusfx.png";
import "../../styles/common.scss";
import "../../styles/_header.scss";
import Image from "../form/Image";
import { useAppDispatch } from "src/app/core/hooks/core-hooks";
import { signOut } from "src/app/store-management/actions/oauth/oauth-actions";
import { useLocalizer } from "src/app/core/Localization";
import { Link } from "react-router-dom";
import { getStorage } from "src/app/core/storage/storage";
import { AuthenticationConstants } from "src/app/core/constants/authentication-contants";
import { jwtDecode } from "jwt-decode";
import { getClaim } from "src/app/store-management/sagas";

type Props = { id: string, clicked: MouseEventHandler<HTMLSpanElement> }

const Header = ({id, clicked}: Props) => {
    
  const commonLocalizer = useLocalizer("Common-ResCommon");
  
  const token = getStorage(AuthenticationConstants.ACCESS_TOKEN);
  const decodedToken = jwtDecode(token);
  const username = getClaim(JSON.stringify(decodedToken), "fullName".toLowerCase()) || getClaim(JSON.stringify(decodedToken), "name".toLowerCase());

  const dispatch = useAppDispatch();
  
  const dropdownMenuEvent = () => {
    document.getElementById("logout")?.addEventListener("click", async () => {
      dispatch( await signOut() );
    })
  }

  const userDropDownButtonItems: ItemModel[] = [
    { text: commonLocalizer("MODULE_COMMON_NAVBAR_MY_PROFILE"), url: "/my-profile/view", iconCss: "e-icons e-user" },
    { text: commonLocalizer("MODULE_COMMON_NAVBAR_CHANGE_PASSWORD"), url: "/change-password", iconCss: "e-icons e-lock" },
    { separator: true },
    { text: commonLocalizer("MODULE_COMMON_NAVBAR_CHANGE_LANGUAGE"), url: "/change-language", iconCss: "e-icons e-time-zone" },
    { text: commonLocalizer("MODULE_COMMON_NAVBAR_SETTINGS"), url: "/my-settings", iconCss: "e-icons e-settings" },
    { separator: true },
    { text: commonLocalizer("MODULE_COMMON_NAVBAR_HELP"), url: "/help", iconCss: "helpicon-" },
    { text: commonLocalizer("MODULE_COMMON_NAVBAR_LOGOUT"), iconCss: "e-icons e-export", id: "logout" },
  ];

  const verticalMenuItems: MenuItemModel[] = [
    {
      iconCss: "e-icons e-menu",
      items: [
        {
          text: username,
          iconCss: "e-icons e-user",
          items: userDropDownButtonItems,
        }
      ],
    },
  ];
  const props: any = 
    {
      colorMode: "Dark",
      colorClass: "e-dark",
      isPrimary: "false",
      loginClass: "e-inherit login",
    }

  const beforeItemRender = (args: MenuEventArgs): void => {
    if (args.element.children.length > 0 && args.element.children[0].classList.contains("e-menu")) {
      args.element.setAttribute("aria-label", "more vertical");
    }
  };

  const [headerViewModel, setHeaderViewModel] = useState({
    search: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setHeaderViewModel({
      ...headerViewModel,
      [name]: value,
    });
  };

  return (
    <div className="control-section color-appbar-section">
      <div className="row">
        <div className="col-md-12">
          <AppBarComponent colorMode={props.colorMode}>
            <ButtonComponent cssClass="e-inherit logo e-appbar-menu">
              <span className={"e-icons e-menu text-3xl text-black font-black"} id={id} onClick={clicked}></span>
            </ButtonComponent>
            <ButtonComponent cssClass="e-inherit logo e-appbar-menu">
              
              <Link to={"/dashboard"}><Image src={octopusfx} alt="OCTOPUSFX" title="" className="w-44 p-0 m-0" /></Link>
            </ButtonComponent>
            <div className="e-appbar-spacer"></div>
            <div className="me-3 text-md flex flex-row gap-0 items-center pe-1 search">
              <input
                type="search"
                id="search"
                name="search"
                placeholder={commonLocalizer("MODULE_COMMON_NAVBAR_SEARCH")}
                className="search-input w-full outline-none border-none"
                value={headerViewModel.search}
                autoComplete="off"
                onChange={handleChange}
              />
              <span className={"e-icons e-search text-2xl font-medium"}></span>
            </div>
            <div className="e-appbar-separator"></div>
            <span className={"e-icons bell-alticon- text-xl font-medium"} title={commonLocalizer("MODULE_COMMON_NAVBAR_NOTIFICATIONS")}></span>
            <DropDownButtonComponent open={dropdownMenuEvent} iconCss={"e-icons user-8icon- text-2xl font-medium"} cssClass={"e-inherit e-appbar-menu " + props.colorClass} items={userDropDownButtonItems}>
              {username}
            </DropDownButtonComponent>
            <MenuComponent cssClass={ "e-inherit e-appbar-icon-menu text-black" } onOpen={dropdownMenuEvent} items={verticalMenuItems} beforeItemRender={beforeItemRender}></MenuComponent>
          </AppBarComponent>
        </div>
      </div>
    </div>
  );
};
export default Header;
