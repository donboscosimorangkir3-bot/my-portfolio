import { useEffect, useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

  }, [darkMode])

  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-500">

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

    </div>
  )
}

export default App