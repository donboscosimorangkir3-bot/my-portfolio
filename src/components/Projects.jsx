import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa"
import { Link } from "react-router-dom"

import delcafe from "../assets/projects/delcafe.png"
import kopitiam from "../assets/projects/kopitiam.png"
import portfolio from "../assets/projects/portfolio.png"
import ecommerce from "../assets/projects/ecommerce.png"

const projects = [
  {
    title: "DelCafe Website",
    id: "delcafe",
    category: "web",
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
    category: "mobile",
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
    category: "web",
    description:
      "Modern responsive portfolio website built using React and Tailwind CSS.",
    image: portfolio,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce App",
    id: "ecommerce",
    category: "mobile",
    description:
      "Responsive e-commerce platform with product management and modern user interface.",
    image: ecommerce,
    tech: ["Laravel", "Flutter", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
]

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-white dark:bg-slate-900 transition-colors duration-500 overflow-hidden"
    >
      {/* Background graphic elements */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-violet-600/5 dark:bg-violet-600/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-pink-600/5 dark:bg-pink-600/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase">My Work</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-2">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-pink-500 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Some projects I have worked on using modern frontend and backend technologies.
          </p>
        </motion.div>

        {/* FILTER TABS */}
        <div className="flex justify-center gap-3 mb-16">
          {[
            { id: "all", label: "All Projects" },
            { id: "web", label: "Web Apps" },
            { id: "mobile", label: "Mobile Apps" },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                filter === tab.id
                  ? "text-white"
                  : "text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {filter === tab.id && (
                <motion.span
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="glass-panel rounded-3xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden group/img h-72">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/90 text-slate-800 flex items-center justify-center hover:bg-violet-600 hover:text-white transition duration-300 shadow-lg text-lg"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/90 text-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition duration-300 shadow-lg text-lg"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-sm mb-6">
                      {project.description}
                    </p>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((item, i) => (
                        <span
                          key={i}
                          className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-semibold"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="pt-4 border-t border-slate-150 dark:border-slate-800 flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <FaCode className="text-sm" />
                      {project.category === "web" ? "Web Application" : "Mobile App"}
                    </span>
                    <Link
                      to={`/project/${project.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 text-sm font-semibold cursor-pointer"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export default Projects