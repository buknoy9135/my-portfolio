const ExperienceCard = ({ role, company, location, period, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 p-6 mb-6 border-l-4 border-blue-600">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
        <h3 className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400">
          {role}
        </h3>
        <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
          {period} | {location}
        </span>
      </div>

      {/* Company */}
      <p className="text-gray-700 dark:text-gray-300 font-medium italic mb-3">
        {company}
      </p>

      {/* Description with custom bullets and inline font */}
      <ul className="space-y-2">
        {description.map((item, i) => (
          <li
            key={i}
            className="text-gray-700 dark:text-gray-300 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600"
            style={{
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontSize: "0.95rem",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
