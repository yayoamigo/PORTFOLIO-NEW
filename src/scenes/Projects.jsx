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

const Project = ({ title, link, h }) => {
  const overlayStyles = `opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title;
  const projectLink = link;
  const goToExternalUrl = (url) => {
    window.open(url, "_blank");
  };
  return (
    <motion.div variants={projectVariant} className="relative">
       <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <button className="absolute bottom-5 right-50% bg-red text-white p-2 " onClick={() => goToExternalUrl(projectLink)}> see more </button>
      </div>
      <img className={`max-h-[${h}px] max-w-[500px] object-cover`} src={`assets/${projectTitle}.png`} alt={projectTitle} />

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
        I've completed more than 40 projects, including front-end, full-stack, back-end, games...
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[500px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project h={250} link="https://github.com/yayoamigo?tab=repositories" title="Space-Travelrs" />
          <Project h={250} link="https://github.com/yayoamigo?tab=repositories" title="Air-Polution" />

          {/* ROW 2 */}
          <Project h={250} link="https://github.com/yayoamigo?tab=repositories" title="Bookstore-CMS" />
          <Project h={250} link="https://github.com/yayoamigo?tab=repositories" title="Math-Magicians" />
          <Project h={250} link="https://github.com/yayoamigo?tab=repositories" title="Pokedex-app" />

          {/* ROW 3 */}
          <Project h={250} link="https://github.com/yayoamigo?tab=repositories" title="Nassa-Missions" />
          <Project h={333} link="https://github.com/yayoamigo?tab=repositories" title="Tomatito-VS-Stairs" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[500px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;


