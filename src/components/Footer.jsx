const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 shadow-inner border-t border-gray-200 dark:border-gray-700 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        {/* Left side */}
        <div className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Jalil Abulais. All rights reserved.
        </div>

        {/* Right side (optional links) */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/buknoy9135"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jalilanthonyabulais/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@jalilanthony.com"
            className="hover:text-blue-600 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
