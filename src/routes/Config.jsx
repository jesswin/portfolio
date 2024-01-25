import classes from "./Config.module.css";

export default function Config() {
  return (
    <>
      <div className={classes.numbers}>
        {Array.from({ length: 11 }, (_, index) => (
          <div key={index}>{++index}</div>
        ))}
      </div>

      <div className={classes["about-wrapper"]}>
        <div className={classes.about}>
          <div className={classes.intro}>{"<intro>"}</div>
          <div className={`${classes.line1} ${classes.line}`}>
            hi, i'm <span className={classes.name}>{'{ jesswin() }'}</span>,
          </div>
          <div className={`${classes.line2} ${classes.line}`}>
            experienced <span className={classes.years}> 2-year </span>{" "}
            front-end specialist with
          </div>
          <div className={`${classes.line3} ${classes.line}`}>
            a knack for user-friendly interfaces that
          </div>
          <div className={`${classes.line4} ${classes.line}`}>
            <span className={classes.business}> elevate business outcomes</span>
            . comfortable in
          </div>
          <div className={`${classes.line5} ${classes.line}`}>
            the intersection of{" "}
            <span className={classes.special}> design and business</span>
          </div>
          <div className={`${classes.line6} ${classes.line}`}>
            dynamics, perfectly suited for{" "}
            <span className={classes.complex}> complex </span>
          </div>
          <div className={`${classes.line7} ${classes.line}`}>projects.</div>
          <div className={classes.intro}>{"<intro>"}</div>
        </div>
        <div className={classes["my-tag"]}>
          <div>
            <div>{"<Jesswin"} </div>
            <div> {" Chetnani/>"}</div>
          </div>
          <div className={classes.comment}>
            // Web and Mobile App Developer
          </div>
        </div>
      </div>
    </>
  );
}
