import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
        {description}
        </p>
      </div>
      <img className="max-h-[300px]" src={`assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-40 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        I've completed more than 40 projects,including front-end,full-stack,back-end,games.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              min-w-[420px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Space-Travelrs" description="is a web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions. 
          The application works with real live data from the SpaceX API." />
          <Project title="Air-Polution" description="Mobile web application to check a list of metrics (numeric values) that were created by making use of React and Redux. An API (OpenWeahter) was chosen to provide 
          numeric data and then build the web app around it." />

          {/* ROW 2 */}
          <Project title="toma" description="This game was inspired by my dog tomatito, his farts and his fear for stairs" />
          <Project title="Math-Magicians" description="is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make a simple calculations and read a random math-related quote.
           Built with React, Sass and JavaScript."/>
          <Project title="Pokedex-app" description="I've selected an API that provides data about pokemons and then build the webapp for it. The webapp has two interfaces, the home page showing a list of items that you can like, and the popup window with 
          more data about an item that you can use to comment on."/>

          {/* ROW 3 */}
          <Project title="Nassa-Missions" description="Welcome to the NASA Exoplanet Mission Simulator, a full stack application that allows users to launch and abort 
          simulated missions to exoplanets using real data from NASA." />
          <Project title="Bookstore-CMS" description="It is a MVP version of it that allows you to display a list of books, add a book and remove a selected book. Built with React, Sass and JavaScript." />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              min-w-[420px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
