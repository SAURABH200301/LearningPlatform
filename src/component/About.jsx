import classes from "./About.module.css";

function About() {
  return (
    <>
        <div
        className={`${classes.gradientBorder} ${classes.gradientColor1}`}
      ></div>
      <div className={`${classes.main} ${classes.footerTop}`}>
        <div className={classes.footerAbout}>
          <h3>ABCD Labs Pvt. Ltd.</h3>
          <p className={classes.txtJustify}>
            ABCD provides a diverse array of services that enable both
            businesses and individuals to bring their vision to life . Our
            specialties include software development, website design and SEO,
            cloud services, robotics and automation, 3D printing and
            prototyping, data science and analytics, AI and machine learning,
            IOT, AR and VR, blockchain, and other tech-related services. Our
            team of experienced professionals is available to assist with the
            design and development of new products, exploration of robotics and
            automation possibilities, or any other requirements.
          </p>
          <p>
            {" "}
            <b>Registered Address </b>: jankpuri, delhi
          </p>
          <p>
            {" "}
            <b>CIN</b>: UT121232328942*******
          </p>
          <p>
            {" "}
            <b>GST</b>: 07AHGU*********
          </p>
        </div>
      </div>
    </>
  )
}

export default About