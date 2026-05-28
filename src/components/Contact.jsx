import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa"
import { HiMail, HiLocationMarker } from "react-icons/hi"

const Contact = () => {

  const form = useRef()
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {

    e.preventDefault()

    setLoading(true)

    emailjs
      .sendForm(
        "service_4z6uo32",
        "template_kha5d3s",
        form.current,
        "eimxtvPGQ5AsQCLxY"
      )
      .then(
        () => {

          toast.success("Message sent successfully!")

          form.current.reset()

          setLoading(false)

        },
        (error) => {

          console.log(error.text)

          toast.error("Failed to send message!")

          setLoading(false)

        }
      )
  }

  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      {/* Visual background details */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-violet-600/5 dark:bg-violet-600/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-600/5 dark:bg-pink-600/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-2">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-pink-500 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Have a project in mind, want to collaborate, or simply say hello? Send a message below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                Let's Build Something Great
              </h3>

              <p className="text-slate-600 dark:text-slate-350 leading-relaxed mb-10 text-base">
                I am open to freelance projects, internships, collaborations, and new opportunities in frontend and backend development. Let's make ideas happen!
              </p>

              {/* INFO CARDS */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-5 rounded-2xl glass-panel border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-violet-100 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 text-2xl">
                    <HiMail />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email</p>
                    <a
                      href="mailto:donboscosimorangkir3@gmail.com"
                      className="text-slate-700 dark:text-slate-200 font-semibold hover:text-violet-600 dark:hover:text-violet-450 transition-colors text-sm"
                    >
                      donboscosimorangkir3@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl glass-panel border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-pink-100 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 text-2xl">
                    <HiLocationMarker />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</p>
                    <p className="text-slate-700 dark:text-slate-200 font-semibold text-sm">
                      Sumatera Utara, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div>
              <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
                Follow My Journeys
              </h4>
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
                    className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 shadow-sm hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 hover:scale-110 transition duration-305 cursor-pointer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="glass-panel border border-slate-200/50 dark:border-slate-800/50 rounded-3xl shadow-xl p-8 space-y-6 flex flex-col h-full"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="John Doe"
                    required
                    className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-850 bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-white outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 transition-all duration-300 text-sm shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-850 bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-white outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 transition-all duration-300 text-sm shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2 flex-grow flex flex-col">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Your Message</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-850 bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-white outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/50 transition-all duration-300 resize-none text-sm shadow-sm flex-grow"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/20 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:shadow-none flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-lg" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Contact