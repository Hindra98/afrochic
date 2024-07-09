import { MenuComponent, MenuItemModel, MenuEventArgs } from "@syncfusion/ej2-react-navigations";
import { DropDownButtonComponent, ItemModel } from "@syncfusion/ej2-react-splitbuttons";
import { useNavigate } from "react-router-dom";
import { useGlobalAppContext } from "src/app/core/hooks/use-app-context";
import { isEmpty } from "src/app/core/text/is-empty";
import { useAppDispatch } from "src/app/core/hooks/core-hooks";
import { signOut } from "src/app/store-management/actions/oauth/oauth-actions";
import { useLocalizer } from "src/app/core/Localization";

const User = (prop: { colorClass: string }) => {
  const commonLocalizer = useLocalizer("Common-ResCommon");
  const { claims } = useGlobalAppContext();
  const fullName = claims?.get("fullname");
  let userProfileName = !isEmpty(fullName) ? fullName : claims?.get("name");

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const dropdownMenuEvent = () => {
    document.getElementById("logout")?.addEventListener("click", () => {

      if (window.confirm("Voulez-vous vraiment vous deconnecter ?")) {
        dispatch(signOut());
        setTimeout(() => navigate("/login", { replace: true }), 300);
      }
    });
  };

  const userDropDownButtonItems: ItemModel[] = [
    {
      text: commonLocalizer("MODULE_COMMON_NAVBAR_MY_PROFILE"),
      url: "/my-profile",
      iconCss: "e-icons e-user",
      id: "profile",
    },
    {
      text: commonLocalizer("MODULE_COMMON_NAVBAR_CHANGE_PASSWORD"),
      url: "/change-password",
      iconCss: "e-icons e-lock",
    },
    { separator: true },
    {
      text: commonLocalizer("MODULE_COMMON_NAVBAR_SETTINGS"),
      url: "/my-settings",
      iconCss: "e-icons e-settings",
    },
    { separator: true },
    {
      text: commonLocalizer("MODULE_COMMON_NAVBAR_HELP"),
      url: "/help",
      iconCss: "helpicon-",
    },
    {
      text: commonLocalizer("MODULE_COMMON_NAVBAR_LOGOUT"),
      iconCss: "e-icons e-export",
      id: "logout",
    },
  ];

  const verticalMenuItems: MenuItemModel[] = [
    {
      iconCss: "e-icons e-menu",
      items: [
        {
          text: userProfileName,
          items: userDropDownButtonItems,
          id: "user",
        },
      ],
    },
  ];

  const beforeItemRender = (args: MenuEventArgs): void => {
    if (
      args.element.children.length > 0 &&
      args.element.children[0].classList.contains("e-menu")
    ) {
      args.element.setAttribute("aria-label", "more vertical");
    }
  };

  return (
    <>
      <DropDownButtonComponent
        open={dropdownMenuEvent}
        iconCss={"e-icons user-8icon- text-2xl font-medium"}
        cssClass={"e-inherit e-appbar-menu " + prop.colorClass}
        items={userDropDownButtonItems}
      >
        {userProfileName}
      </DropDownButtonComponent>
      <MenuComponent
        cssClass={"e-inherit e-appbar-icon-menu text-black"}
        onOpen={dropdownMenuEvent}
        items={verticalMenuItems}
        beforeItemRender={beforeItemRender}
      ></MenuComponent>
    </>
  );
};

export default User;
