import config from "../../lib/Config.json";
import { motion } from "framer-motion";
import { InToView } from "../../lib";

export const Projects = () => {
  return (
    <section id="projects" className="projects-container item">
      <div className="projects-wrapper">
        <motion.div
          viewport={{
            once: true,
            amount: 1,
          }}
          variants={InToView(0)}
          initial="initial"
          whileInView={"inView"}>
          <p className="title">My Projects</p>
          <h1 className="title main">What projects have I worked on?</h1>
        </motion.div>
        <div className="projects">
          {config.projects.map((data, key) => (
            <motion.div
              viewport={{
                once: true,
                amount: 0.1,
              }}
              variants={InToView(key)}
              initial="initial"
              whileInView={"inView"}
              className="project"
              style={{ flexDirection: data.position ? "row-reverse" : "row" }}
              key={key}>
              <img src={data.image} alt="" />
              <div style={data.position ? { left: 0 } : { right: 0 }}>
                <h1>{data.item}</h1>
                <h3>{data.subTitle}</h3>
                <p>{data.description}</p>
                <div>
                  {data.buttons.map((data, key) => (
                    <a href={data.link} key={key}>
                      <i className={`${data.icon} button`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
