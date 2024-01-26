import { useEffect } from "react";
import classes from "./Experience.module.css";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function Experience() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/experience/industry");
  }, []);

  const links = (
    <>
      <div
        className={`${classes["company-text"]}
    `}
      >
        <Link
          className={
            location.pathname.includes("industry") ? classes.active : ""
          }
          to="/experience/industry"
        >
          industry
        </Link>
      </div>
      <div
        className={`${classes["project-text"]}
    `}
      >
        <Link
          className={
            location.pathname.includes("projects") ? classes.active : ""
          }
          to="/experience/projects"
        >
          projects
        </Link>
      </div>
    </>
  );

  return (
    <>
      <div className={classes.experience}>
        <div className={classes.sidebar}>
          <aside>
            <div className={classes["proj-exp"]}>{links}</div>
          </aside>
        </div>

        <div className={classes["top-bar"]}>{links}</div>

        <Outlet />
      </div>
    </>
  );
}
