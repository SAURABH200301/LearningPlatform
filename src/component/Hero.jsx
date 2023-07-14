import classes from "./Hero.module.css";
import box from '../assets/box.gif'

function Hero() {
  return (
    <div className={` row  ${classes.main}`}>
      <div className="col-md-6 col-sm-12">
        <div className={classes.heading}>
          <span style={{ color: "#bd1052" }}>Build, </span>
          <span style={{ color: "#545ffd" }}>test, </span>
          <span style={{ color: "#a2a2a2" }}>and </span>
          <span style={{ color: "#019267" }}>execute your ideas </span>
          <span style={{ color: "#a2a2a2" }}>with our </span>
          <span style={{ color: "#f1ae50" }}>innovative solutions</span>
          <span style={{ color: "#545ffd" }}>.</span>
        </div>
        <div className={` row  ${classes.main}`}>
          <div className="col-md-6 col-sm-12">
            <button className={`${classes.btn} ${classes.whatsApp}`}>
              <span className={classes.whatsAppIcon}></span>
              <span className={classes.Text}>Chat now on WhatsApp</span>
            </button>
          </div>
          <div className="col-md-6">
            <button className={`${classes.btn} ${classes.explore}`}>
              <span className={classes.Text}>Explore Our Servies</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6 d-flex justify-content-center ">
        <img className={`  ${classes.img}`} src={box} alt="box"/>
      </div>
    </div>
  );
}

export default Hero;
