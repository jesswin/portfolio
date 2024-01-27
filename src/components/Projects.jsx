import classes from "./Projects.module.css";
import git from "../assets/git.png";
import link from "../assets/link.png";
const projects = [
  {
    title: "color-map",
    desc: `color-map is a solution for people like me who hate to apply
    different colors on the web and check if it's looking good or not. here i have made a preview of a webpage and given a
    color palette to check if it looks good and meets your expectations, if it does, copy that color code and use it in
    your web-app`,
    link: "https://color-map-by-jesswin.netlify.app/",
    git: "https://github.com/jesswin/Color-Map",
    stack: "react",
    date: "dec-20",
  },

  {
    title: "denomination calculator",
    desc: `this calculator helps to calculate the denominations and sum of them. this will save you whenever you go to deposit money in a bank and get confused with denominations and their sum.`,
    link: "https://denomination-calc.web.app/",
    git: "https://github.com/jesswin/denomination-calculator",
    stack: "react, firebase",
    date: "sept-21",
  },

  {
    title: "instagram clone",
    desc: `it's an instagram clone, here people can keep their accounts open or private and follow/request each other to connect. users can upload images, add captions, like and comment on pictures, check notifications, accept user requests, and view their pictures on their timeline as well as on their profile page. unique username validated at the time of authentication.`,
    git: "https://github.com/jesswin/instagram-clone",
    stack: "flutter, firebase",
    date: "oct-20",
  },
];

function gotoLink(link) {
  window.open(link, "_blank");
}

export default function Projects() {
  return (
    //
    <>
      <div className={classes.projects}>
        {projects.map((proj) => {
          return (
            <div className={classes.project} key={proj.title}>
              <div className={classes.title}>//{proj.title}</div>
              {proj.link && (
                <div className={classes.iframe}>
                  <iframe sandbox="allow-scripts allow-forms allow-pointer-lock allow-same-origin" src={proj?.link} frameBorder="0"></iframe>
                </div>
              )}
              <div className={classes.desc}>
                <div className={classes["title-head"]}>what it does?</div>
                {proj.desc}
              </div>
              <div className={classes.links}>
                {proj.link && (
                  <div
                    className={classes.web}
                    onClick={() => gotoLink(proj.link)}
                  >
                    <img src={link} alt="" />
                    {proj.link}
                  </div>
                )}
                <div className={classes.git} onClick={() => gotoLink(proj.git)}>
                  <img src={git} alt="" />
                  {proj.git}
                </div>
              </div>
              <div className={classes["stack-date"]}>
                <div className={classes.stack}>{proj.stack}</div>
                <div className={classes.date}>{proj.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
