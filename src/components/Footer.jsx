const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-auto">
      <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Jalil Abulais. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
