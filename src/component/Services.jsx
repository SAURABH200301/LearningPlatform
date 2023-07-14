import ServiceCard from "./ServiceCard";
import classes from "./Services.module.css";
import { Data } from "../Data/data";

function Services() {
  return (
    <div className={classes.service}>
      <div className={classes.serviceH2}>
        <h2>Customised Solutions for All Your Business Needs</h2>
      </div>
      <div className={classes.sectionP}>
        <p>
          Take Your Business to the Next Level with Our Industry-Leading
          Services
        </p>
      </div>
      <div className={classes.serviceList}>
        {Data.map((d) => {
          return (
            <div key={d.id}>
              <ServiceCard link={d.imgLink} head={d.Head} para={d.para} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
