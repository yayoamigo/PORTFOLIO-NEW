import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/MySkills";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";
import Testimonials from "./scenes/Testimonials";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';
import { tooglePage, toogleTop } from "./redux/ducks/slice";

function App() {

  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        dispatch(tooglePage("home"));
        dispatch(toogleTop(true))
      }
      if (window.scrollY !== 0) dispatch(toogleTop(false))
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup/>
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => dispatch(tooglePage("home"))}
        >
          <Landing  />
        </motion.div>
      </div>
      <br/>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => dispatch(tooglePage("skills"))}
        >
          <MySkills />
        </motion.div>
      </div>
      <br/>
      <br/>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => dispatch(tooglePage("projects"))}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => dispatch(tooglePage("testimonials"))}
        >
          <Testimonials />
        </motion.div>
      </div>
      <br/>
      <br/>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => dispatch(tooglePage("contact"))}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;