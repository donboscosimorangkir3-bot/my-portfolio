import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

import delcafe from "../assets/projects/delcafe.png"
import kopitiam from "../assets/projects/kopitiam.png"
import portfolio from "../assets/projects/portfolio.png"
import ecommerce from "../assets/projects/ecommerce.png"
import { Link } from "react-router-dom"

const projects = [
  {
    title: "DelCafe Website",
    id: "delcafe",
    description:
      "Modern cafe website with elegant UI design, responsive layout, and smooth user experience.",
    image: delcafe,
    tech: ["MySQL", "UI/UX Design", "Tailwind CSS", "Laravel"],
    github: "#",
    live: "#",
  },

  {
    title: "Kopitiam33 App",
    id: "kopitiam",
    description:
      "Cafe and restaurant ordering application with responsive UI and modern design.",
    image: kopitiam,
    tech: ["Flutter", "Laravel", "MySQL", "Figma"],
    github: "#",
    live: "#",
  },

  {
    title: "Personal Portfolio",
    id: "portfolio",
    description:
      "Modern responsive portfolio website built using React and Tailwind CSS.",
    image: portfolio,
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
  },

  {
    title: "E-Commerce App",
    id: "ecommerce",
    description:
      "Responsive e-commerce platform with product management and modern user interface.",
    image: ecommerce,
    tech: ["Laravel","Flutter", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white dark:bg-slate-900 transition duration-500"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white">
            My Projects
          </h2>

          <p className="mt-5 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Some projects I have worked on using modern
            frontend and backend technologies.
          </p>

        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover hover:scale-105 transition duration-500"                />

              </div>

              {/* CONTENT */}
              <div className="p-7">

                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mb-6">

                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">

                  <Link
                  to={`/project/${project.id}`}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition duration-300"
                >
                  View Details
                </Link>


                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects