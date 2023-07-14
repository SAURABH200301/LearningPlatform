import classes from "./TechStack.module.css";
import { TechStacks } from "../Data/data";

function TechStack() {
  return (
    <div className={classes.main}>
      <h2 className={classes.sectionH2}>
        Leverage our software & hardware expertise
      </h2>
      <p className={classes.sectionP}>
        Use our services and tech expertise to create disruptive products &
        solutions that can revolutionize your business and stay ahead with
        evolving technological advancements.
      </p>
      <div className={classes.techTool}>
        {TechStacks.map((tech) => {
          return (
            <div key={tech.id} className={classes.ttCard}>
              <div className={classes.ttCardImage}>
                <img src={tech.imgLink} alt="tech icon" />
              </div>
              <div className={classes.ttCardTitle}>{tech.cardTitle}</div>
            </div>
          );
        })}
      </div>
      <div className={classes.viewAll}>
        <div className={`${classes.btn} ${classes.allStack}`}>Explore Our Entire Tech Stack</div>
      </div>
    </div>
  );
}

export default TechStack;
