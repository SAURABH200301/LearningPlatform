import About from "./About";
import FooterServices from "./FooterServices";
import { services, Industries, Resources } from "../Data/data";

function MainFooter() {
  return (
    <div className="row">
      <div className="col-md-4">
        <About />
      </div>
      <div className="col-md-3">
        <FooterServices head="Services" data={services} />
      </div>
      <div className="col-md-3">
        <FooterServices head="Industries" data={Industries} />
      </div>
      <div className="col-md-2">
        <FooterServices head="Resources" data={Resources} />
      </div>
    </div>
  );
}

export default MainFooter;