import classes from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <h2 className={`${classes.H2}`}>Innovate. Validate. Launch</h2>
      <p
        className={`${classes.P} ${classes.gradientText} ${classes.gradientColor1}`}
      >
        Let &apos;s transform your idea into reality with our MVP development
        services.
      </p>
      <div className={`${classes.gradientBtn1} ${classes.gradientColor2} ${classes.btn}`}>Book a free consultation!</div>
    </div>
  );
}

export default Footer;
