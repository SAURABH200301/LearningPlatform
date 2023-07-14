import classes from "./FooterServices.module.css";

function FooterServices(prop) {
  return (
    <>
      <div
        className={`${classes.gradientBorder} ${classes.gradientColor1}`}
      ></div>
      <div className={classes.footerServices}>
        <h3 className={classes.H3}>{prop.head}</h3>
        <ul className={classes.ul}>
          {prop.data.map((s) => {
            return (
              <li key={s.id} className={classes.Li}>
                <div>{s.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default FooterServices;
