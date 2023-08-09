import About from "./components/About/About";
import Expertise from "./components/Expertise/Expertise";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";
import css from "./styles/app.module.scss"



function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Expertise />
      <Work />
      <Portfolio />
      {/* <People /> */}
      <About />
      <Footer />
    </div>
  );
}

export default App;
