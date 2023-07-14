import classes from "./About.module.css";

function About() {
  return (
    <>
        <div
        className={`${classes.gradientBorder} ${classes.gradientColor1}`}
      ></div>
      <div className={`${classes.main} ${classes.footerTop}`}>
        <div className={classes.footerAbout}>
          <h3>Xzect Labs Pvt. Ltd.</h3>
          <p className={classes.txtJustify}>
            Xzect provides a diverse array of services that enable both
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
            <b>Registered Address </b>: 203, 2-A/3, Asaf Ali Road, Delhi -
            110002
          </p>
          <p>
            {" "}
            <b>CIN</b>: U72200DL2022PTC408714
          </p>
          <p>
            {" "}
            <b>GST</b>: 07AAACX4373J1Z2
          </p>
        </div>
      </div>
    </>
  )
}

export default About