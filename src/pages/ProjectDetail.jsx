import { useParams, Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import { motion } from "framer-motion"
import { HiCode, HiTerminal } from "react-icons/hi"

import delcafe from "../assets/projects/delcafe.png"
import kopitiam from "../assets/projects/kopitiam.png"
import portfolio from "../assets/projects/portfolio.png"
import ecommerce from "../assets/projects/ecommerce.png"

const projects = {
  delcafe: {
    title: "DelCafe Website",
    category: "Web Application",
    image: delcafe,
    description:
      "Modern cafe website with elegant UI design, responsive layout, and smooth user experience.",
    fullDescription:
      "This project was developed to provide a modern digital presence for a cafe business. The website focuses on responsive design, clean user experience, and visually appealing layouts using React and Tailwind CSS. Features include user menu browsing, interactive ordering visualization, and a fully functional management backend.",
    tech: ["MySQL", "UI/UX Design", "Tailwind CSS", "Laravel"],
    role: "Fullstack Developer & Designer",
  },

  kopitiam: {
    title: "Kopitiam33 App",
    category: "Mobile Application",
    image: kopitiam,
    description:
      "Cafe and restaurant ordering application with responsive UI and modern design.",
    fullDescription:
      "Kopitiam33 is a restaurant ordering application designed to simplify customer orders and improve cafe management workflows. It includes responsive layouts, real-time menu systems, table management, and modern UI interactions for both customers and cashier operators.",
    tech: ["Flutter", "Laravel", "MySQL", "Figma"],
    role: "Mobile App Developer & Designer",
  },

  portfolio: {
    title: "Personal Portfolio",
    category: "Web Application",
    image: portfolio,
    description:
      "Modern responsive portfolio website built using React and Tailwind CSS.",
    fullDescription:
      "A modern developer portfolio focused on clean UI, responsive layouts, dark mode support, fluid Framer Motion animations, and professional project presentation. Features dynamic project filtering, glassmorphic UI assets, custom HSL styling palettes, and interactive contact triggers.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    role: "Frontend Developer",
  },

  ecommerce: {
    title: "E-Commerce App",
    category: "Mobile Application",
    image: ecommerce,
    description:
      "Responsive e-commerce platform with product management and modern user interface.",
    fullDescription:
      "An e-commerce platform featuring responsive product pages, clean UI design, and modern frontend architecture for scalable online shopping experiences. Integrates customer authentication, dynamic cart calculations, search/filter criteria, and a robust admin dashboard for product management.",
    tech: ["Laravel", "Flutter", "Node.js", "PostgreSQL"],
    role: "Backend & Mobile Developer",
  },
}

const ProjectDetail = () => {

  const { id } = useParams()

  const project = projects[id]

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-905 dark:text-white transition-colors duration-500">
        <h1 className="text-3xl font-extrabold mb-4">Project not found</h1>
        <Link to="/" className="text-violet-600 font-semibold hover:underline">
          Back to portfolio
        </Link>
      </div>
    )
  }

  return (
    <section className="relative min-h-screen bg-slate-50 dark:bg-slate-950 px-6 py-24 transition-colors duration-500 overflow-hidden">
      {/* Background visual components */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-violet-600/5 dark:bg-violet-600/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/5 dark:bg-pink-600/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* BACK BUTTON */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-350 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 hover:shadow-md transition-all duration-300 mb-14 text-sm font-semibold cursor-pointer"
        >
          <FaArrowLeft />
          Back to portfolio
        </Link>

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >

            <div>
              <span className="text-xs font-extrabold text-violet-600 dark:text-violet-400 uppercase tracking-widest bg-violet-50 dark:bg-violet-955/50 border border-violet-100 dark:border-violet-900/50 px-4 py-1.5 rounded-full">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-violet-600 via-purple-650 to-pink-600 bg-clip-text text-transparent mt-4 mb-4 tracking-tight">
                {project.title}
              </h1>
            </div>

            <p className="text-xl text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              {project.description}
            </p>

            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
              {project.fullDescription}
            </p>

            {/* DETAILS METADATA CARD */}
            <div className="grid sm:grid-cols-2 gap-4 p-6 rounded-2xl glass-panel border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="p-2 rounded-xl bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 text-lg shrink-0 mt-0.5">
                  <HiTerminal />
                </span>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Role / Focus</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{project.role || "Developer"}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="p-2 rounded-xl bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 text-lg shrink-0 mt-0.5">
                  <HiCode />
                </span>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Project Scope</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{project.category}</p>
                </div>
              </div>
            </div>

            {/* TECH STACK */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((item, index) => (

                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 text-slate-650 dark:text-slate-300 font-bold text-sm shadow-sm"
                  >
                    {item}
                  </span>

                ))}
              </div>
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative group p-4 rounded-[36px] bg-gradient-to-r from-violet-600/10 via-purple-650/5 to-pink-500/10 dark:from-violet-600/15 dark:to-pink-500/15 border border-slate-200/50 dark:border-slate-800/50 shadow-2xl flex items-center justify-center">
              <div className="relative w-full rounded-[28px] overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-h-[550px] object-contain group-hover:scale-102 transition duration-700"
                />
              </div>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default ProjectDetail