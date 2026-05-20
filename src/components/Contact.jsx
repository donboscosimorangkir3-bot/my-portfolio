import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"
import toast from "react-hot-toast"

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa"

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
      className="py-24 px-6 bg-slate-50 dark:bg-slate-900 transition duration-500"
    >

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white">
            Contact Me
          </h2>

          <p className="mt-5 text-slate-500 dark:text-slate-400">
            Feel free to send me a message anytime.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT */}
          <div>

            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
              Let's Work Together
            </h3>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              I am open to freelance projects, collaborations,
              and new opportunities in frontend and backend
              development.
            </p>

            {/* EMAIL */}
            <div className="mb-8">

              <p className="text-slate-700 dark:text-slate-300 font-medium">
                Email
              </p>

              <a
                href="mailto:donboscosimorangkir3@gmail.com"
                className="text-blue-600 hover:underline"
              >
                donboscosimorangkir3@gmail.com
              </a>

            </div>

            {/* SOCIAL MEDIA */}
            <div className="flex gap-5">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 space-y-6"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white outline-none focus:border-blue-600 transition duration-300"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white outline-none focus:border-blue-600 transition duration-300"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white outline-none focus:border-blue-600 transition duration-300 resize-none"
            />

            <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-[1.02] transition duration-300 disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact