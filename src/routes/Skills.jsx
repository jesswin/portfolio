import classes from "./Skills.module.css";

const skills = [
  {
    skill: "javascript",
    rating: 8,
  },
  {
    skill: "react",
    rating: 8,
  },
  {
    skill: "Ant Design, Material UI",
    rating: 7,
  },

  {
    skill: "vue",
    rating: 8,
  },

  {
    skill: "nuxt",
    rating: 7,
  },
  {
    skill: "git",
    rating: 6,
  },
  {
    skill: "html",
    rating: 9,
  },

  {
    skill: "css",
    rating: 9,
  },

  {
    skill: "flutter",
    rating: 5,
  },
];

export default function Skills() {
  return (
    <div className={classes.skills}>
      {skills.map((skill, index) => {
        return (
          <div key={skill.skill} className={`${classes["skill-parent"]}`}>
            {skill.skill}
            <div className={classes.skill}>
              {Array.from({ length: skill.rating }, (_, index) => (
                <div key={index} className={classes["skill-indi"]}></div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
