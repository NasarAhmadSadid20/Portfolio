import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { SectionTitle } from "../components";
import { leftSideVariants, rightSideVariants } from "../constants/motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [statusText, setStatusText] = React.useState("");
  const formRef = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_PUBLIC_KEY
    ).then(
      (result) => {
        console.log("Email sent successfully:", result);
        setStatusText("The message was sent successfully ✅");
        setTimeout(() => {
          setStatusText("");
          formRef.current.reset();
        }, 7000);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setStatusText("The message wasn't sent successfully ❌");
      }
    );
  };

  return (
    <section className="pb-sec-md pt-sec-lg">
      <div className="container relative flex flex-col items-center gap-y-9">
        <SectionTitle title="CONTACT" subtitle="Let's Start Talk" />
        <div className="grid w-full grid-cols-1 gap-x-12 md:grid-cols-12">
          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            variants={leftSideVariants}
            initial="hidden"
            animate="visible"
            className="col-span-1 grid grid-cols-1 gap-4 md:col-span-7 md:grid-cols-2"
          >
            {/* First Name */}
            <div className="grid gap-y-2">
              <label htmlFor="firstname" className="label">
                First Name
              </label>
              <input
                type="text"
                className="input"
                name="first_name"
                id="firstname"
                placeholder="Nasar Ahmad"
                required
              />
            </div>

            {/* Last Name */}
            <div className="grid gap-y-2">
              <label htmlFor="lastname" className="label">
                Last Name
              </label>
              <input
                type="text"
                className="input"
                name="last_name"
                id="lastname"
                placeholder="Sadid"
                required
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2 grid gap-y-2">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                className="input"
                name="user_email"
                id="email"
                placeholder="sadidnasarahmad20@gmail.com"
                autoComplete="off"
                required
              />
            </div>

            {/* Phone */}
            <div className="md:col-span-2 grid gap-y-2">
              <label htmlFor="phone" className="label">
                Phone
              </label>
              <input
                type="phone"
                className="input"
                name="phone"
                id="phone"
                placeholder="+93 123456789"
                required
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2 grid gap-y-2">
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="input min-h-28 resize-y py-2"
                placeholder="Hi, ..."
                required
              ></textarea>
            </div>

            {statusText && (
              <p className="text-base font-medium text-gray-90 md:col-span-2">
                {statusText}
              </p>
            )}

            <button type="submit" className="btn-primary w-fit">
              Send <Send />
            </button>
          </motion.form>

          {/* Info */}
          <motion.aside
            variants={rightSideVariants}
            initial="hidden"
            animate="visible"
            className="col-span-1 hidden flex-col gap-y-6 md:col-span-3 md:flex"
          >
            <div className="flex flex-col gap-y-3">
              <p className="text-xl font-semibold text-gray-90">
                Further Enquiries
              </p>
              <a
                href="mailto:sadidnasarahmad20@gmail.com"
                className="link text-lg text-gray-50"
              >
                sadidnasarahmad20@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-y-3">
              <p className="text-xl font-semibold text-gray-90">Social</p>
              <a href="https://www.linkedin.com/in/nasar-ahmad-sadid-07b349352" target="_blank" rel="noopener noreferrer" className="link text-lg text-gray-50">
                Linkedin
              </a>
              <a href="https://github.com/NasarAhmadSadid20" target="_blank" rel="noopener noreferrer" className="link text-lg text-gray-50">
                Github
              </a>
              <a href="https://t.me/FrontendCode2025" target="_blank" rel="noopener noreferrer" className="link text-lg text-gray-50">
                Telegram
              </a>
              <a href="https://www.facebook.com/profile.php?id=100090161719600" target="_blank" rel="noopener noreferrer" className="link text-lg text-gray-50">
                Facebook
              </a>
            </div>

            <div className="flex flex-col gap-y-3">
              <p className="text-xl font-semibold text-gray-90">Location</p>
              <a href="#" className="link text-lg text-gray-50">
                Herat - Afghanistan
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
