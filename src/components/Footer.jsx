import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="relative bg-white dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-800/50 transition-colors duration-500 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-600/5 dark:bg-violet-600/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">

        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* LEFT */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              DonBosco
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              Frontend & Backend Developer passionate about building modern, responsive, scalable, and user-friendly digital experiences.
            </p>
          </div>

          {/* CENTER */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-5">
              Quick Navigation
            </h3>
            <div className="flex flex-wrap md:justify-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-600 dark:text-slate-350">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-5">
              Connect With Me
            </h3>
            <div className="flex gap-4">
              {[
                { href: "https://github.com/donboscosimorangkir3-bot", icon: <FaGithub />, label: "GitHub" },
                { href: "https://linkedin.com/in/don-bosco-simorangkir-a224a0383/", icon: <FaLinkedin />, label: "LinkedIn" },
                { href: "https://instagram.com/donboscosimorangkir", icon: <FaInstagram />, label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-650 dark:hover:text-white hover:scale-105 transition duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-8 border-t border-slate-200/30 dark:border-slate-800/30 flex items-center justify-between gap-5">
          <p className="text-slate-400 dark:text-slate-500 text-xs font-semibold">
            © {new Date().getFullYear()} Don Bosco Simorangkir. All rights reserved.
          </p>

          <a
            href="#home"
            className="group w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-violet-500/20 active:scale-95 transition-all duration-300 relative cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span className="absolute inset-0 rounded-full bg-violet-600/30 group-hover:animate-ping -z-10" />
            <FaArrowUp className="text-sm" />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer