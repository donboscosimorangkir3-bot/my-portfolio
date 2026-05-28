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
    color: "text-[#61dafb]",
    barColor: "from-[#61dafb] to-[#1a8cd8]",
    glowColor: "shadow-cyan-500/20",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
  },
  {
    name: "Laravel",
    level: "90%",
    icon: <FaLaravel />,
    color: "text-[#ff2d20]",
    barColor: "from-[#ff2d20] to-[#b31b1b]",
    glowColor: "shadow-red-500/20",
    bgColor: "bg-red-50 dark:bg-red-950/30",
  },
  {
    name: "JavaScript",
    level: "85%",
    icon: <SiJavascript />,
    color: "text-[#f7df1e]",
    barColor: "from-[#f7df1e] to-[#c6a300]",
    glowColor: "shadow-yellow-500/20",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/30",
  },
  {
    name: "Tailwind CSS",
    level: "90%",
    icon: <SiTailwindcss />,
    color: "text-[#38bdf8]",
    barColor: "from-[#38bdf8] to-[#0369a1]",
    glowColor: "shadow-sky-500/20",
    bgColor: "bg-sky-50 dark:bg-sky-950/30",
  },
  {
    name: "Flutter",
    level: "90%",
    icon: <SiFlutter />,
    color: "text-[#02569b]",
    barColor: "from-[#02569b] to-[#0175c2]",
    glowColor: "shadow-blue-500/20",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    name: "MySQL",
    level: "90%",
    icon: <SiMysql />,
    color: "text-[#00758f]",
    barColor: "from-[#00758f] to-[#f29111]",
    glowColor: "shadow-orange-500/20",
    bgColor: "bg-orange-50/50 dark:bg-orange-950/20",
  },
  {
    name: "Git & GitHub",
    level: "85%",
    icon: <FaGitAlt />,
    color: "text-[#f05032]",
    barColor: "from-[#f05032] to-[#333333]",
    glowColor: "shadow-orange-600/20",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
  },
  {
    name: "Figma",
    level: "70%",
    icon: <FaFigma />,
    color: "text-[#a259ff]",
    barColor: "from-[#a259ff] to-[#f24e1e]",
    glowColor: "shadow-purple-500/20",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      {/* Visual background details */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-violet-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-pink-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-2">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-pink-500 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Technologies and tools I use to build modern, scalable, and responsive applications.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group glass-panel rounded-3xl p-7 shadow-md hover:shadow-2xl hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-300"
            >

              <div className="flex items-center justify-between mb-6">
                {/* ICON */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 shadow-sm ${skill.bgColor} ${skill.color}`}>
                  {skill.icon}
                </div>
                {/* LEVEL */}
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200/50 dark:border-slate-700/50">
                  {skill.level}
                </span>
              </div>

              {/* NAME */}
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                {skill.name}
              </h3>

              {/* PROGRESS */}
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className={`h-2.5 rounded-full bg-gradient-to-r ${skill.barColor} group-hover:shadow-sm ${skill.glowColor}`}
                />
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills