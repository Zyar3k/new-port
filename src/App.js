import { useContext } from "react";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

import { AppContext } from "./context/AppContext";

const App = () => {
  const { theme, setTheme } = useContext(AppContext);
  return (
    <>
      <div className={`${theme}`}>
        <div className="background text">
          <Header />
          <Nav />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
