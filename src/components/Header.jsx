import { Link } from "react-router-dom";
// import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link
          to="/"
          className="font-bold text-xl text-gray-900 dark:text-white"
        >
          Jalil Anthony Abulais
        </Link>
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* <DarkModeToggle /> */}
      </nav>
    </header>
  );
};

export default Header;
