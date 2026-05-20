import { motion } from "framer-motion"

import {
  FaReact,
  FaLaravel,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa"

import {
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiFlutter,
} from "react-icons/si"

const skills = [
  {
    name: "React",
    level: "85%",
    icon: <FaReact />,
  },
  {
    name: "Laravel",
    level: "90%",
    icon: <FaLaravel />,
  },
  {
    name: "JavaScript",
    level: "85%",
    icon: <SiJavascript />,
  },
  {
    name: "Tailwind CSS",
    level: "90%",
    icon: <SiTailwindcss />,
  },
  {
    name: "Flutter",
    level: "90%",
    icon: <SiFlutter />,
  },
  {
    name: "MySQL",
    level: "90%",
    icon: <SiMysql />,
  },
  {
    name: "Git & GitHub",
    level: "85%",
    icon: <FaGitAlt />,
  },
  {
    name: "Figma",
    level: "70%",
    icon: <FaFigma />,
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition duration-500"
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
            My Skills
          </h2>

          <p className="mt-5 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to build modern,
            scalable, and responsive applications.
          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >

              {/* ICON */}
              <div className="text-5xl text-blue-600 mb-6">
                {skill.icon}
              </div>

              {/* NAME */}
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                {skill.name}
              </h3>

              {/* PROGRESS */}
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                />

              </div>

              {/* LEVEL */}
              <p className="mt-4 text-slate-500 dark:text-slate-300 font-medium">
                {skill.level}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills