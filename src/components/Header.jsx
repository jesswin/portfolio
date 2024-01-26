import { NavLink, Outlet, useLocation } from "react-router-dom";
import classes from "./Header.module.css";

export default function Header() {
  const colors = ["red", "yellow", "green"];

  const location = useLocation();

  const tabs = [
    {
      text: "myConfig.jsx",
      route: "/my-config",
    },
    {
      text: "skills.js",
      route: "/skills",
    },
    {
      text: "experience.jsx",
      route: "/experience",
    },
    {
      text: "contact.jsx",
      route: "/contact",
    },
  ];
  return (
    <>
      <div className={classes.header}>
        <div className={classes.dots}>
          {colors.map((color) => {
            return (
              <div key={color} className={`${classes.dot} ${classes[color]}`} />
            );
          })}

          <span className={classes.title}>
            ~ frontend_dev / jesswin_chetnani
          </span>
        </div>
      </div>
      <div className={classes["tab-wrapper"]}>
        {tabs.map((tab) => {
          return (
            <div className={classes.tab} key={tab.route}>
              <NavLink
                to={tab.route}
                className={
                  location.pathname.includes(tab.route)
                    ? classes.active
                    : undefined
                }
              >
                <div>{tab.text}</div>
              </NavLink>
            </div>
          );
        })}
      </div>
      <Outlet />
    </>
  );
}
