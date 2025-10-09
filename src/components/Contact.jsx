import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_xq1bqno", // 🔹 replace with your actual service ID
        "template_8uu25ji", // 🔹 replace with your template ID
        form.current,
        "slbzH0acbLiMOrgOg" // 🔹 replace with your public key
      )
      .then(
        () => {
          setIsSent(true);
          setIsSending(false);
          form.current.reset();
          setTimeout(() => setIsSent(false), 4000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="pb-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="w-full max-w-6xl mx-auto px-6 mb-12">
        <hr className="border-gray-300 dark:border-gray-700" />
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Let’s <span className="text-blue-600">Connect</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Whether you have a project in mind, want to collaborate, or just say
          hi, feel free to drop me a message. I’ll get back to you as soon as
          possible.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Contact Number"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-3 text-white rounded-lg shadow-md transition ${
              isSending
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
          {isSent && (
            <p className="text-green-500 mt-4">✅ Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
