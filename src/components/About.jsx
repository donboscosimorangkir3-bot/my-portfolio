import { motion } from "framer-motion"
import profile from "../assets/profile.jpeg"

const About = () => {
  return (
    <section
      id="about"
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
            About Me
          </h2>

          <p className="mt-5 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A brief introduction about myself and my experience
            in building modern digital products.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-800 rounded-3xl shadow-lg p-10"
          >

            <div className="flex flex-col items-center text-center">

              <img
                src={profile}
                alt="profile"
                className="w-48 h-48 object-cover rounded-full border-8 border-white shadow-xl mb-6"
              />

              <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
                Don Bosco Simorangkir
              </h3>

              <p className="text-blue-600 mt-2 font-medium">
                Frontend Developer • UI/UX Enthusiast
              </p>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-8 flex-wrap justify-center">

                <a
                  href="/cvdonbosco.pdf"
                  download
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
                >
                  Download CV
                </a>

                <button
                onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                    })
                }
                className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-600 dark:text-white hover:border-blue-500 hover:text-blue-600 transition duration-300"
                >
                Contact Me
                </button>

              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 mt-12">

              <div className="bg-white dark:bg-slate-700 rounded-2xl p-5 text-center shadow-sm">

                <h4 className="text-3xl font-bold text-blue-600">
                  10+
                </h4>

                <p className="text-slate-500 dark:text-slate-300 mt-2 text-sm">
                  Projects
                </p>

              </div>

              <div className="bg-white dark:bg-slate-700 rounded-2xl p-5 text-center shadow-sm">

                <h4 className="text-3xl font-bold text-blue-600">
                  3+
                </h4>

                <p className="text-slate-500 dark:text-slate-300 mt-2 text-sm">
                  Years Learning
                </p>

              </div>

              <div className="bg-white dark:bg-slate-700 rounded-2xl p-5 text-center shadow-sm">

                <h4 className="text-3xl font-bold text-blue-600">
                  100%
                </h4>

                <p className="text-slate-500 dark:text-slate-300 mt-2 text-sm">
                  Passion
                </p>

              </div>

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
              I am a Software Engineering student passionate about
              building clean, responsive, and user-friendly digital
              experiences. I enjoy turning ideas into modern web
              applications using React, Laravel, and modern frontend
              technologies.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">

              {/* WHAT I DO */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-7 shadow-sm">

                <h3 className="text-2xl font-bold mb-5 text-slate-800 dark:text-white">
                  What I Do
                </h3>

                <ul className="space-y-4 text-slate-600 dark:text-slate-300">

                  <li>
                    • Build responsive web applications
                  </li>

                  <li>
                    • Create modern UI/UX interfaces
                  </li>

                  <li>
                    • Integrate REST APIs
                  </li>

                  <li>
                    • Develop scalable frontend systems
                  </li>

                </ul>
              </div>

              {/* STRENGTHS */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-7 shadow-sm">

                <h3 className="text-2xl font-bold mb-5 text-slate-800 dark:text-white">
                  Strengths
                </h3>

                <ul className="space-y-4 text-slate-600 dark:text-slate-300">

                  <li>
                    • Fast learner and adaptable
                  </li>

                  <li>
                    • Clean and maintainable code
                  </li>

                  <li>
                    • Strong teamwork skills
                  </li>

                  <li>
                    • Problem-solving mindset
                  </li>

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