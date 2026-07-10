import { motion } from "framer-motion"
import { HiLightningBolt, HiCheckCircle, HiSparkles } from "react-icons/hi"
import profile from "../assets/profile.jpg"

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-white dark:bg-slate-900 transition-colors duration-500 overflow-hidden"
    >
      {/* Background visual element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-violet-500/5 dark:bg-violet-600/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 dark:bg-pink-600/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase">Biography</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-pink-500 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
            A student of software engineering with a burning passion for creating neat, efficient, and visual digital products.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-panel rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200/50 dark:border-slate-800/50"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500" />
                <img
                  src={profile}
                  alt="profile"
                  className="relative w-40 h-40 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-xl mb-6"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Don Bosco Simorangkir
              </h3>

              <p className="text-sm text-violet-600 dark:text-violet-400 mt-2 font-bold tracking-wider uppercase">
                Frontend Developer • UI/UX Enthusiast
              </p>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-6 flex-wrap justify-center">
                <a
                  href="/cvdonbosco.pdf"
                  download
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold shadow-md hover:shadow-lg hover:shadow-violet-500/20 hover:-translate-y-0.5 transition duration-300 text-sm cursor-pointer"
                >
                  Download CV
                </a>

                <button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="px-6 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 dark:text-white hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 hover:-translate-y-0.5 transition duration-300 text-sm cursor-pointer"
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-3 mt-10">
              {[
                { val: "10+", label: "Projects" },
                { val: "2+", label: "Yrs Learning" },
                { val: "100%", label: "Passion" },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 text-center shadow-sm">
                  <h4 className="text-2xl font-extrabold bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
                    {stat.val}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 mt-1 text-[11px] font-semibold uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-between h-full"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                My Story & Ambition
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I am a Software Engineering student passionate about building clean, responsive, and user-friendly digital experiences. I enjoy turning complex problems into elegant, maintainable code solutions, using modern web stacks.
              </p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base">
                With a strong emphasis on details, accessibility, and high performance, I spend my time exploring both frontend dynamics like React/Tailwind, and robust backend logic using Laravel and MySQL.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              {/* WHAT I DO */}
              <div className="glass-panel border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2 rounded-xl bg-violet-105 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400">
                    <HiLightningBolt className="text-xl" />
                  </span>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                    What I Do
                  </h4>
                </div>

                <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm font-medium">
                  {[
                    "Build responsive web applications",
                    "Create modern UI/UX interfaces",
                    "Integrate robust REST APIs",
                    "Develop scalable frontend systems"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <HiCheckCircle className="text-emerald-500 text-lg shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* STRENGTHS */}
              <div className="glass-panel border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2 rounded-xl bg-pink-105 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400">
                    <HiSparkles className="text-xl" />
                  </span>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                    Strengths
                  </h4>
                </div>

                <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm font-medium">
                  {[
                    "Fast learner and adaptable",
                    "Clean and maintainable code",
                    "Strong teamwork skills",
                    "Problem-solving mindset"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <HiCheckCircle className="text-violet-500 text-lg shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default About