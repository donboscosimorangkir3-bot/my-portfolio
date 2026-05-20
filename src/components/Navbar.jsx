import { useEffect, useState } from "react"

import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa"

const Navbar = ({ darkMode, setDarkMode }) => {

  const [menuOpen, setMenuOpen] = useState(false)

  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {

    const handleScroll = () => {

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
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm transition duration-300">

      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* LOGO */}
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Don Bosco
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 font-medium">

          {navLinks.map((link) => (

            <li key={link.id}>

              <a
                href={`#${link.id}`}
                className={`transition duration-300 hover:text-blue-600 ${
                  activeSection === link.id
                    ? "text-blue-600"
                    : "text-slate-700 dark:text-slate-200"
                }`}
              >
                {link.label}
              </a>

            </li>

          ))}

        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-400 hover:scale-110 transition duration-300"
          >

            {darkMode ? <FaSun /> : <FaMoon />}

          </button>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white"
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="px-6 pb-6 pt-2 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">

          <ul className="flex flex-col gap-5 font-medium">

            {navLinks.map((link) => (

              <li key={link.id}>

                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block transition duration-300 hover:text-blue-600 ${
                    activeSection === link.id
                      ? "text-blue-600"
                      : "text-slate-700 dark:text-slate-200"
                  }`}
                >
                  {link.label}
                </a>

              </li>

            ))}

          </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar