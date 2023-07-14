import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import TechStack from "./component/TechStack";
import classes from './App.module.css';
import Footer from "./component/Footer";
import MainFooter from "./component/MainFooter";

function App() {
  return (
    <div>
      <Navbar />
      <div >
        <section >
          <Hero />
        </section>
        <section >
          <Services />
        </section>
        <section className={classes.techStack}>
          <TechStack />
        </section>
        <section className={classes.footer}>
          <div className={classes.main}>
            <Footer/>
          </div>
        </section>
        <footer>
            <MainFooter/>
        </footer>
      </div>
    </div>
  );
}

export default App;
