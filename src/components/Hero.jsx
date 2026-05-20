import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { HiDownload, HiFolderOpen } from "react-icons/hi"
import { HiCode, HiSparkles } from "react-icons/hi"
import { motion } from "framer-motion"

import profile from "../assets/profile.jpeg"

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
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
}

const Hero = () => {
  const typedText = useTypewriter(roles)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12
                 bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* ── LEFT SIDE ── */}
        <motion.div
          variants={floatUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7 }}
        >

          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6
                          rounded-full border border-slate-200 dark:border-slate-800
                          bg-white dark:bg-slate-900 text-sm text-slate-500 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for work
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-4
                         text-slate-900 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
              DonBosco<br />Simorangkir
            </span>
          </h1>

          {/* Typewriter */}
          <div className="flex items-center gap-2 text-lg font-medium
                          text-slate-500 dark:text-slate-400 mb-5 h-8">
            <HiCode className="text-violet-500 shrink-0" />
            <span>{typedText}</span>
            <span className="inline-block w-0.5 h-5 bg-violet-500 animate-[blink_1s_step-end_infinite]" />
          </div>

          {/* Bio */}
          <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed
                        max-w-md mb-6">
            I build modern, responsive, and user-friendly web applications using
            React, Laravel, and modern frontend technologies — with a focus on
            clean design and smooth user experiences.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-8">
            {[
              { num: "2+", label: "Years experience" },
              { num: "10+", label: "Projects built" },
              { num: "4", label: "Tech stacks" },
            ].map((s, i) => (
              <div key={i} className={i > 0 ? "pl-8 border-l border-slate-200 dark:border-slate-800" : ""}>
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">{s.num}</p>
                <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="/cvdonbosco.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                         bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium
                         transition-colors duration-200"
            >
              <HiDownload className="text-base" />
              Download CV
            </a>

            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                         border border-slate-200 dark:border-slate-700
                         text-slate-700 dark:text-slate-300 text-sm font-medium
                         hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400
                         transition-colors duration-200"
            >
              <HiFolderOpen className="text-base" />
              View Projects
            </button>
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
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
                className="w-10 h-10 flex items-center justify-center rounded-full text-lg
                           border border-slate-200 dark:border-slate-800
                           bg-white dark:bg-slate-900
                           text-slate-500 dark:text-slate-400
                           hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400
                           transition-colors duration-200"
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
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Profile image */}
            <div className="w-72 h-72 md:w-[340px] md:h-[340px] rounded-full overflow-hidden
                            border border-slate-200 dark:border-slate-800
                            bg-slate-100 dark:bg-slate-900">
              <img
                src={profile}
                alt="DonBosco Simorangkir"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating card — top right */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-2 -right-10
                         flex items-center gap-2.5 px-4 py-2.5 rounded-xl
                         bg-white dark:bg-slate-900
                         border border-slate-200 dark:border-slate-800
                         text-sm shadow-sm"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-lg
                               bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-base">
                <HiCode />
              </span>
              <div>
                <p className="text-xs text-slate-400 leading-none mb-0.5">Stack</p>
                <p className="font-medium text-slate-800 dark:text-slate-100 leading-none">React · Laravel · Flutter</p>
              </div>
            </motion.div>

            {/* Floating card — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="absolute -bottom-4 -left-10
                         flex items-center gap-2.5 px-4 py-2.5 rounded-xl
                         bg-white dark:bg-slate-900
                         border border-slate-200 dark:border-slate-800
                         text-sm shadow-sm"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-lg
                               bg-violet-50 dark:bg-violet-950 text-violet-600 dark:text-violet-400 text-base">
                <HiSparkles />
              </span>
              <div>
                <p className="text-xs text-slate-400 leading-none mb-0.5">Focus</p>
                <p className="font-medium text-slate-800 dark:text-slate-100 leading-none">Backend & Frontend Developer</p>
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