import { Industries, Popular, Resources, Services } from "../Data/data";
import classes from "./Navbar.module.css";
export { Services} from "../Data/data";

const Navbar = () => {
  return (
    <>
      <div className={`collapse `} id="navbarToggleExternalContent">
        <div className={`${classes.nav} p-4`}>
          <div className="row">
            <div className="col-md-3">
              <h3 className={classes.H3}>Popular</h3>
              <ul className={classes.ul}>
                {Popular.map((s) => {
                  return (
                    <li key={s.id} className={classes.Li}>
                      <div>{s.title}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-md-3">
            <h3 className={classes.H3}>Services</h3>
              <ul className={classes.ul}>
                {Services.map((s) => {
                  return (
                    <li key={s.id} className={classes.Li}>
                      <div>{s.title}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-md-3">
            <h3 className={classes.H3}>Industries</h3>
              <ul className={classes.ul}>
                {Industries.map((s) => {
                  return (
                    <li key={s.id} className={classes.Li}>
                      <div>{s.title}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-md-3">
            <h3 className={classes.H3}>Resources</h3>
              <ul className={classes.ul}>
                {Resources.map((s) => {
                  return (
                    <li key={s.id} className={classes.Li}>
                      <div>{s.title}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className={`${classes.navDiv}  navbar navbar-dark `}>
        <div className={`container-fluid  ${classes.navContainer}`}>
          <button
            className={`navbar-toggler ${classes.icon}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className={classes.gradient}></div>
      </nav>
    </>
  );
};

export default Navbar;
