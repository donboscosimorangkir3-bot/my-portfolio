import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa"

const Navbar = ({ darkMode, setDarkMode }) => {

  const [menuOpen, setMenuOpen] = useState(false)

  const [activeSection, setActiveSection] = useState("home")

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "contact",
      ]

      sections.forEach((section) => {

        const element = document.getElementById(section)

        if (element) {

          const rect = element.getBoundingClientRect()

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
          }

        }

      })

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "top-4 mx-auto max-w-5xl rounded-full bg-white/75 dark:bg-slate-950/75 backdrop-blur-md shadow-lg border border-slate-200/50 dark:border-slate-800/50 px-6 py-3"
          : "bg-transparent py-6 px-6"
      }`}
    >

      <div className="flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-85 transition-opacity"
        >
          DonBosco
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-1 font-medium bg-slate-100/50 dark:bg-slate-900/50 p-1.5 rounded-full border border-slate-200/30 dark:border-slate-800/30">

          {navLinks.map((link) => (

            <li key={link.id} className="relative">

              <a
                href={`#${link.id}`}
                className={`relative z-10 px-5 py-2 rounded-full text-sm font-semibold transition duration-300 block ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full -z-10 shadow-sm shadow-violet-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>

            </li>

          ))}

        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-amber-400 hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer"
            aria-label="Toggle theme"
          >

            {darkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}

          </button>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-white cursor-pointer"
            aria-label="Toggle menu"
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >

            <div className="mt-4 p-4 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 shadow-xl backdrop-blur-lg">

              <ul className="flex flex-col gap-2 font-medium">

                {navLinks.map((link) => (

                  <li key={link.id}>

                    <a
                      href={`#${link.id}`}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-5 py-3 rounded-2xl text-sm font-semibold transition duration-300 ${
                        activeSection === link.id
                          ? "bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-sm shadow-violet-500/20"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                      }`}
                    >
                      {link.label}
                    </a>

                  </li>

                ))}

              </ul>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  )
}

export default Navbar