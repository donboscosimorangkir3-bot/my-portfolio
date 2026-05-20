import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition duration-500">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* LEFT */}
          <div>

            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Don Bosco
            </h2>

            <p className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed">
            Frontend & Backend Developer passionate about
            building modern, responsive, scalable, and
            user-friendly digital experiences.
            </p>

          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center">

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-wrap justify-center gap-6 text-slate-600 dark:text-slate-300">

              <a
                href="#home"
                className="hover:text-blue-600 transition duration-300"
              >
                Home
              </a>

              <a
                href="#about"
                className="hover:text-blue-600 transition duration-300"
              >
                About
              </a>

              <a
                href="#skills"
                className="hover:text-blue-600 transition duration-300"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="hover:text-blue-600 transition duration-300"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="hover:text-blue-600 transition duration-300"
              >
                Contact
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center md:items-end">

            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-5">
              Social Media
            </h3>

            <div className="flex gap-5">

              <a
                href="https://github.com/donboscosimorangkir3-bot"
                className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/don-bosco-simorangkir-a224a0383/"
                className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/donboscosimorangkir"
                className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-slate-500 dark:text-slate-400 text-center">
            © 2026 Don Bosco Simorangkir. All rights reserved.
          </p>

          <a
            href="#home"
            className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center hover:scale-110 transition duration-300"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer