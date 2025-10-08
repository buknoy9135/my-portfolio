const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Contact Me
      </h2>
      <form className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow p-8 space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
        <input
          type="tel"
          placeholder="Contact Number"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
