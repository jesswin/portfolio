import classes from "./Skills.module.css";

const skills = [
  {
    skill: "html",
    rating: 9,
  },

  {
    skill: "css",
    rating: 9,
  },

  {
    skill: "javascript",
    rating: 8,
  },

  {
    skill: "react",
    rating: 8,
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
    skill: "flutter",
    rating: 6,
  },
  {
    skill: "git",
    rating: 6,
  },
];

export default function Skills() {
  return (
    <div className={classes.skills}>
      {skills.map((skill) => {
        return (
          <div key={skill.skill}>
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
