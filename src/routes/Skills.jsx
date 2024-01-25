import classes from "./Skills.module.css";

const skills = [
  {
    skill: "HTML",
    rating: 9,
  },

  {
    skill: "CSS",
    rating: 9,
  },

  {
    skill: "javascript",
    rating: 8,
  },

  {
    skill: "React",
    rating: 8,
  },

  {
    skill: "Vue",
    rating: 8,
  },

  {
    skill: "Nuxt",
    rating: 7,
  },

  {
    skill: "Flutter",
    rating: 6,
  },
  {
    skill: "Git",
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
