import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700 z-50">
      <nav className="container mx-auto flex justify-between items-center py-5 px-6">
        {/* Logo / Name */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white"
        >
          Jalil Anthony Abulais
        </Link>

        {/* Desktop Links + Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-lg font-medium text-gray-700 dark:text-gray-200">
            <li>
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-blue-600 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-600 transition" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-600 transition" to="/experience">
                Experience
              </Link>
            </li>
            <li>
              <Link className="hover:text-blue-600 transition" to="/education">
                Education
              </Link>
            </li>
          </ul>
          <DarkModeToggle />
        </div>

        {/* Mobile: Dark Mode Toggle + Hamburger Button */}
        <div className="md:hidden flex items-center gap-3">
          <DarkModeToggle />
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 flex flex-col space-y-2 py-4 px-6 shadow-lg">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/experience" onClick={() => setIsOpen(false)}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/education" onClick={() => setIsOpen(false)}>
              Education
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;