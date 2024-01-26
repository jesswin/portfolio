import classes from "./Contact.module.css";

function gotoLink(link) {
  window.open(link, "_blank");
}

function gotoMail(mail) {
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=email@${mail}`,
    "_blank"
  );
}

const social = [
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/jesswin-chetnani-249a461a6/",
  },
  {
    platform: "gmail",
    url: "jesswinchetnani@gmail.com",
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/jesswinchetnani/",
  },
];

let links = social.map((social) => {
  return (
    <div className={classes.social}>
      <div className={classes.starting}>{"{"}</div>
      <div className={classes.platform}>
        {"platform : "}{" "}
        <span className={classes["plat-text"]}> {social.platform} </span> {","}
      </div>
      <div className={classes.url}>
        {"url : "}{" "}
        <span
          className={classes["url-text"]}
          onClick={() => {
            social.platform !== "gmail"
              ? gotoLink(social.url)
              : gotoMail(social.url);
          }}
        >
          {social.url}
        </span>
      </div>
      <div className={classes.closing}> {"}"}</div>
    </div>
  );
});

export default function Contact() {
  return (
    <div className={classes.contact}>
      <div className={classes.touch}>{"/* get_in_touch */"}</div>
      <div className={classes.title}>
        got something on your mind? jesswin is just a call or text away.
      </div>
      <div className={classes.const}> {"const socials = ["}</div>
      <div className={classes.links}> {links} </div>
      <div className={classes.ends}>{"]"} </div>
    </div>
  );
}
