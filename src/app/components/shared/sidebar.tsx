import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/sidebar.scss";

const Sidebar = () => {
  const menus = [
    {
      name: "Dashboard",
      link: "/",
      title: true,
      icon: "title-icons e-title D",
      id: "dashboard",
    },
    { name: "Overview", link: "detail/5", icon: "e-icons chart-baricon-" },

    { name: "", link: "/", icon: "", separate: true, css: "separate" },

    {
      name: "Management",
      link: "/",
      title: true,
      icon: "e-icons e-title M",
      id: "management",
    },
    {
      name: "Tenants",
      icon: "e-icons user-1icon- icon",
      items: [
        {
          name: "Add tenatnt",
          icon: "e-icons user-plusicon- icon",
        },
        {
          name: "Manage Agencies",
          icon: "e-icons buildingicon-",
        },
      ],
    },
    {
      name: "Users",
      icon: "e-icons usersicon- icon",
      items: [
        {
          name: "Add user",
          icon: "e-icons user-addicon- icon",
        },
        { name: "Manage Roles", icon: "e-icons key-4icon- icon" },
      ],
    },
    { name: "History", icon: "e-icons historyicon- icon" },
    { name: "Status", icon: "e-icons eye-2icon- icon" },

    { name: "", link: "/", icon: "", separate: true, css: "separate" },

    {
      name: "Packages",
      link: "/",
      title: true,
      icon: "title-icons e-title P",
      id: "packages",
    },
    { name: "Transactions", link: "/", icon: "e-icons sort-alt-upicon- icon" },
    { name: "Maintenance", link: "/", icon: "e-icons cogsicon- icon" },

    {
      name: "Setting",
      link: "getAll",
      icon: "e-icons cog-5icon- icon",
      css: "setting",
      id: "setting",
    },
  ];
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`bg-[#0e0e0e] ${
        open ? "open w-[250px]" : "close w-[50px]"
      } text-gray-100 sidebar`}
    >
      <div className="mt-4 flex relative flex-col ">
        <div className="py-3 flex justify-end">
          <span className="cursor-pointer" onClick={() => setOpen(!open)}>
            ico
          </span>
        </div>
        <div className={`sidebar-menu fixed top-24 w-full ${open? "": "w-[50px]"}`}>
          {menus.map((menu, key) => (
            <Link
              to={menu?.link}
              key={key}
              className={`${menu?.css} group flex items-center justify-between text-sm w-full  gap-3.5 font-medium`}
              id={menu?.id}
            >
              <div className="flex gap-3.5 items-center justify-start">
                <span className={`icon ${menu?.icon}`}></span>
                <div
                  className={`menu-item whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </div>
              </div>
              <div className="arrow">{menu.items && <span className={`icon right-open-5icon-`}></span>}ffr</div>
              {menu?.items?.length > 0 && (
                <div
                  className={`${
                    open
                      ? "group-hover:left-[250px]"
                      : "group-hover:left-[50px]"
                  } absolute bg-red-950 top-auto text-white font-semibold whitespace-pre rounded-md drop-shdow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:duration-300 group-hover:w-fit`}
                >
                  {menu?.items?.map((item, key) => (
                    <Link
                      to={item?.name}
                      key={key}
                      className={` group-item flex items-center text-sm  gap-3.5`}
                    >
                      <span className={`icon ${item?.icon}`}></span>
                      <h2 className={`whitespace-pre duration-500`}>
                        {item?.name}
                      </h2>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
