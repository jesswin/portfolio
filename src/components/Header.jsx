import classes from "./Header.module.css";

export default function Header() {
  const colors = ["red", "yellow", "green"];

  const tabs = [
    {
      text: "myConfig.jsx",
      route: "my-config",
    },
    {
      text: "skills.js",
      route: "skills",
    },
    {
      text: "experience.jsx",
      route: "experience",
    },
    {
      text: "contact.jsx",
      route: "contact",
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
            <div
              key={tab.route}
              className={`${classes.tab} ${
                tab.route == "skills" ? classes.active : ""
              }`}
            >
              {tab.text}
            </div>
          );
        })}
      </div>
    </>
  );
}
