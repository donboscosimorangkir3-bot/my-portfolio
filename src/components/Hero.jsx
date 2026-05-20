import { TypeAnimation } from "react-type-animation"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"

import profile from "../assets/profile.jpeg"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 bg-slate-50 dark:bg-slate-950 transition duration-500"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-blue-600 font-semibold mb-4 tracking-wide uppercase">
            Welcome To My Portfolio
          </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-5 text-slate-900 dark:text-white">            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DonBosco Simorangkir
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6 h-16">

            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "Backend Developer",
                2000,
                "React Developer",
                2000,
                "UI/UX Enthusiast",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
            I build modern, responsive, and user-friendly web applications
            using React, Laravel, and modern frontend technologies.
            Passionate about clean design and smooth user experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-8">

            <a
              href="/cvdonbosco.pdf"
              download
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              Download CV
            </a>

            <button
            onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
                })
            }
            className="px-7 py-3 rounded-full border border-slate-300 hover:border-blue-600 hover:text-blue-600 transition duration-300"
            >
            View Projects
            </button>

          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 text-2xl text-slate-700">

            <a href="https://github.com/donboscosimorangkir3-bot">
              <FaGithub className="hover:text-blue-600 transition duration-300" />
            </a>

            <a href="https://linkedin.com/in/don-bosco-simorangkir-a224a0383/">
              <FaLinkedin className="hover:text-blue-600 transition duration-300" />
            </a>

            <a href="https://instagram.com/donboscosimorangkir">
              <FaInstagram className="hover:text-blue-600 transition duration-300" />
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>

            <img
              src={profile}
              alt="profile"
              className="relative w-[280px] md:w-[400px] rounded-full border-8 border-white shadow-2xl object-cover"
            />

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero