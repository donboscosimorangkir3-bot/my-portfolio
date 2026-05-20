import { useParams, Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

import delcafe from "../assets/projects/delcafe.png"
import kopitiam from "../assets/projects/kopitiam.png"
import portfolio from "../assets/projects/portfolio.png"
import ecommerce from "../assets/projects/ecommerce.png"

const projects = {
  delcafe: {
    title: "DelCafe Website",
    image: delcafe,
    description:
      "Modern cafe website with elegant UI design, responsive layout, and smooth user experience.",
    fullDescription:
      "This project was developed to provide a modern digital presence for a cafe business. The website focuses on responsive design, clean user experience, and visually appealing layouts using React and Tailwind CSS.",
    tech: ["MySQL", "UI/UX Design", "Tailwind CSS", "Laravel"],
  },

  kopitiam: {
    title: "Kopitiam33 App",
    image: kopitiam,
    description:
      "Cafe and restaurant ordering application with responsive UI and modern design.",
    fullDescription:
      "Kopitiam33 is a restaurant ordering application designed to simplify customer orders and improve cafe management workflows. It includes responsive layouts, menu systems, and modern UI interactions.",
    tech: ["Flutter", "Laravel", "MySQL", "Figma"],
  },

  portfolio: {
    title: "Personal Portfolio",
    image: portfolio,
    description:
      "Modern responsive portfolio website built using React and Tailwind CSS.",
    fullDescription:
      "A modern developer portfolio focused on clean UI, responsive layouts, dark mode support, animations, and professional project presentation.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },

  ecommerce: {
    title: "E-Commerce App",
    image: ecommerce,
    description:
      "Responsive e-commerce platform with product management and modern user interface.",
    fullDescription:
      "An e-commerce platform featuring responsive product pages, clean UI design, and modern frontend architecture for scalable online shopping experiences.",
    tech: ["Laravel","Flutter", "Node.js", "PostgreSQL"],
  },
}

const ProjectDetail = () => {

  const { id } = useParams()

  const project = projects[id]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Project not found
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-white dark:bg-slate-950 px-6 py-20 transition duration-500">

      <div className="max-w-7xl mx-auto">

        {/* BACK BUTTON */}
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 mb-14 transition duration-300"
        >
          <FaArrowLeft />
          Back to portfolio
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              {project.title}
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {project.description}
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {project.fullDescription}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-4">

              {project.tech.map((item, index) => (

                <span
                  key={index}
                  className="px-5 py-3 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-medium"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl shadow-2xl p-6 flex items-center justify-center group">

  <img
    src={project.image}
    alt={project.title}
    className="w-full max-h-[600px] object-contain group-hover:scale-105 transition duration-500"
  />

</div>

        </div>

      </div>

    </section>
  )
}

export default ProjectDetail