import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { HiDownload, HiFolderOpen } from "react-icons/hi"
import { HiCode, HiSparkles } from "react-icons/hi"
import { motion } from "framer-motion"

import profile from "../assets/profile.jpg"

const roles = ["Frontend Developer", "Backend Developer", "React Developer", "UI/UX Enthusiast"]

const useTypewriter = (words, typingSpeed = 60, deletingSpeed = 35, pauseDuration = 1600) => {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      }, typingSpeed)
    } else {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setWordIndex((i) => (i + 1) % words.length)
        }
      }, deletingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return text
}

const floatUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const Hero = () => {
  const typedText = useTypewriter(roles)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-16
                 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-500"
    >
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Aura Blobs for Premium Atmosphere */}
      <div className="aura-blob w-72 h-72 bg-violet-500/20 dark:bg-violet-600/10 top-20 left-10" />
      <div className="aura-blob w-[450px] h-[450px] bg-pink-500/10 dark:bg-pink-600/5 bottom-10 right-10" />
      <div className="aura-blob w-80 h-80 bg-blue-500/10 dark:bg-blue-600/5 top-40 right-1/3" />

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* ── LEFT SIDE ── */}
        <motion.div
          variants={floatUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >

          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6
                          rounded-full border border-slate-200/80 dark:border-slate-800/80
                          bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-sm text-slate-500 dark:text-slate-400 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for freelance & full-time work
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4
                         text-slate-900 dark:text-white tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              DonBosco<br />Simorangkir
            </span>
          </h1>

          {/* Typewriter */}
          <div className="flex items-center gap-2 text-xl font-bold
                          text-violet-600 dark:text-violet-400 mb-6 h-8 tracking-wide">
            <HiCode className="text-2xl shrink-0" />
            <span>{typedText}</span>
            <span className="inline-block w-0.5 h-6 bg-violet-600 dark:bg-violet-400 animate-[blink_1s_step-end_infinite]" />
          </div>

          {/* Bio */}
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed
                        max-w-xl mb-8">
            I build modern, responsive, and user-friendly web applications using
            React, Laravel, and modern frontend technologies — with a focus on
            clean design and smooth user experiences.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-8 border-y border-slate-200/50 dark:border-slate-800/50 py-6 max-w-lg">
            {[
              { num: "2+", label: "Years experience" },
              { num: "10+", label: "Projects built" },
              { num: "4", label: "Tech stacks" },
            ].map((s, i) => (
              <div key={i} className={`flex-1 ${i > 0 ? "pl-8 border-l border-slate-200/50 dark:border-slate-800/50" : ""}`}>
                <p className="text-3xl font-extrabold text-slate-900 dark:text-white">{s.num}</p>
                <p className="text-sm text-slate-400 mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/cvdonbosco.pdf"
              download
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
                         bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white text-sm font-semibold
                         transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20 hover:-translate-y-0.5 cursor-pointer"
            >
              <HiDownload className="text-lg" />
              Download CV
            </a>

            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full
                         border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm
                         text-slate-700 dark:text-slate-300 text-sm font-semibold
                         hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400
                         transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <HiFolderOpen className="text-lg" />
              View Projects
            </button>
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            {[
              { href: "https://github.com/donboscosimorangkir3-bot", icon: <FaGithub />, label: "GitHub" },
              { href: "https://linkedin.com/in/don-bosco-simorangkir-a224a0383/", icon: <FaLinkedin />, label: "LinkedIn" },
              { href: "https://instagram.com/donboscosimorangkir", icon: <FaInstagram />, label: "Instagram" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full text-xl
                           border border-slate-200 dark:border-slate-800/80
                           bg-white dark:bg-slate-900/80 backdrop-blur-sm
                           text-slate-500 dark:text-slate-400
                           hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 hover:scale-110
                           transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>

        </motion.div>

        {/* ── RIGHT SIDE ── */}
        <motion.div
          variants={floatUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Profile image with Dynamic Spinning Gradient Border */}
            <div className="relative w-80 h-80 md:w-[380px] md:h-[380px] rounded-3xl p-[4px] overflow-hidden group shadow-2xl">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 rounded-3xl"
                animate={{
                  rotate: 360
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear"
                }}
              />
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white dark:bg-slate-950">
                <img
                src={profile}
                alt="DonBosco Simorangkir"
                className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
              </div>
            </div>

            {/* Floating card — top right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-8
                         flex items-center gap-3 px-4 py-3 rounded-2xl
                         bg-white/80 dark:bg-slate-900/80 backdrop-blur-md
                         border border-slate-200/50 dark:border-slate-800/50
                         text-sm shadow-xl z-25"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-xl
                               bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-lg">
                <HiCode />
              </span>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider leading-none mb-1">Stack</p>
                <p className="font-bold text-slate-800 dark:text-slate-100 leading-none">React · Laravel · Flutter</p>
              </div>
            </motion.div>

            {/* Floating card — bottom left */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-8
                         flex items-center gap-3 px-4 py-3 rounded-2xl
                         bg-white/80 dark:bg-slate-900/80 backdrop-blur-md
                         border border-slate-200/50 dark:border-slate-800/50
                         text-sm shadow-xl z-25"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-xl
                               bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 text-lg">
                <HiSparkles />
              </span>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider leading-none mb-1">Focus</p>
                <p className="font-bold text-slate-800 dark:text-slate-100 leading-none">Fullstack Web & Mobile</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Blink animation */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}

export default Hero