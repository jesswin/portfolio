import classes from "./Experience.module.css";

import { Outlet } from "react-router-dom";

export default function Experience() {
  return (
    <>
      <div className={classes.experience}>
        <div className={classes.sidebar}>
          <aside>
            <div className={classes["proj-exp"]}>
              <div className={classes["company-text"]}>company</div>
              <div className={`${classes["project-text"]} ${classes.active}`}>
                projects
              </div>
            </div>
          </aside>
        </div>

        <div className={classes["top-bar"]}>
          <div className={classes["company-text"]}>company</div>
          <div className={`${classes["project-text"]} ${classes.active}`}>
            projects
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
}
