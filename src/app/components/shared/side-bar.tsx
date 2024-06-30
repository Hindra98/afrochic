import { useRef } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { MenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import "../../styles/sidebar.scss";
import Header from './header-dashboard';
import { useLocalizer } from 'src/app/core/Localization';

type props = {classTarget: string}
const Sidebar = ({classTarget} : props) => {
  let sidebarobj = useRef<SidebarComponent>(null);

  const commonLocalizer = useLocalizer("Common-ResCommon");

  let menuItems: MenuItemModel[] = [
    {
      text: commonLocalizer("MODULE_COMMON_SIDEBAR_DASHBOARD"),
      iconCss: "e-icons e-title " + commonLocalizer("MODULE_COMMON_SIDEBAR_DASHBOARD").charAt(0).toLowerCase(),
      id: "dashboard",
    },
    {
      text: commonLocalizer("MODULE_COMMON_SIDEBAR_DASHBOARD_OVERVIEW"),
      iconCss: "e-icons chart-baricon-",
    },
    { separator: true },
    {
      text: commonLocalizer("MODULE_COMMON_SIDEBAR_MANGEMENT"),
      iconCss: "e-icons e-title " + commonLocalizer("MODULE_COMMON_SIDEBAR_MANGEMENT").charAt(0).toLowerCase(),
      id: "management",
    },
    {
      text: commonLocalizer("MODULE_COMMON_SIDEBAR_TENANTS"),
      iconCss: "e-icons icon-user icon",
      items: [
        {
          text: commonLocalizer("MODULE_COMMON_SIDEBAR_TENANTS_ADD_TENANT"),
          iconCss: "user-plusicon-",
        },
        {
          text: commonLocalizer("MODULE_COMMON_SIDEBAR_TENANTS_MANAGE_AGENCIES"),
          iconCss: "e-icons buildingicon-",
        },
      ],
    },
    {
      text: commonLocalizer("MODULE_COMMON_SIDEBAR_USERS"),
      iconCss: "e-icons e-people",
      items: [
        {
          text: commonLocalizer("MODULE_COMMON_SIDEBAR_USERS_ADD_USER"),
          iconCss: "user-addicon-",
        },
        { text: "Manage Roles", iconCss: "key-4icon-" },
      ],
    },
    {
      text: commonLocalizer("MODULE_COMMON_SIDEBAR_HISTORY"),
      iconCss: "e-icons historyicon-",
    },
    {
      text: commonLocalizer("MODULE_COMMON_SIDEBAR_OVERALL_STATUS"),
      iconCss: "e-icons e-eye",
    },
    { separator: true },
    // {
    //     text: commonLocalizer("MODULE_COMMON_SIDEBAR_CONNECTIONS"),
    //     iconCss: 'e-icons e-title ' + commonLocalizer("MODULE_COMMON_SIDEBAR_CONNECTIONS").charAt(0).toLowerCase(),
    //     id: 'connections',
    // },
    // {
    //     text: commonLocalizer("MODULE_COMMON_SIDEBAR_CONNECTIONS_MARKETING_AUTOMATION"),
    //     iconCss: 'e-icons e-bookmark'
    // },
    // {
    //     text: commonLocalizer("MODULE_COMMON_SIDEBAR_CONNECTIONS_EMAIL_INTEGRATION"),
    //     iconCss: 'e-icons e-send'
    // },
    // { separator: true },
    {
      text: commonLocalizer("MODULE_COMMON_SIDEBAR_PACKAGES"),
      iconCss:
        "e-icons e-title " + commonLocalizer("MODULE_COMMON_SIDEBAR_PACKAGES").charAt(0).toLowerCase(),
      id: "package",
    },
    {
      text: commonLocalizer("MODULE_COMMON_SIDEBAR_PACKAGES_TRANSACTIONS"),
      iconCss: "e-icons e-sorting-1",
    },
    {
      text: commonLocalizer("MODULE_COMMON_SIDEBAR_PACKAGES_MAINTENANCE"),
      iconCss: "e-icons e-settings",
    },
    {
      text: commonLocalizer("MODULE_COMMON_NAVBAR_SETTINGS"),
      iconCss: "e-icons e-settings",
      id: "settings",
      url: "hyt",
    },
  ];
  const enableDock: boolean = true;
  const dockSize: string = "50px";
  const width: string = "250px";
  const target: string = "." + classTarget;

  const toolbarCliked = (args) => {
    if (args.target.id === "menuToolbarSideBarOctopusFX") {
      sidebarobj.current.toggle();
    }
  };

  return (
    <>
      <div className="header-sidebar">
        <Header id="menuToolbarSideBarOctopusFX" clicked={toolbarCliked.bind(this)} />
      </div>
      <SidebarComponent id="menuSidebar" className="sidebar-menu text-wrap" ref={sidebarobj} closeOnDocumentClick={false}
        enableDock={enableDock} dockSize={dockSize} width={width} target={target} isOpen={true} type="Auto">
        <div className="main-menu w-full h-full">
          <MenuComponent id="dockMenu" items={menuItems} orientation="Vertical" cssClass="dock-menu"></MenuComponent>
        </div>
      </SidebarComponent>
    </>
  );
}
export default Sidebar;