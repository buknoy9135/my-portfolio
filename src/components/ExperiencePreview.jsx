import { Link } from "react-router-dom";
import { experience } from "../data/experience";

const ExperiencePreview = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-12">
          Professional <span className="text-blue-600">Experience</span>
        </h2>

        {/* Show only first 3 */}
        <div className="space-y-8">
          {experience.slice(0, 3).map((exp, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition text-left"
            >
              <span className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-xs font-medium px-2 py-1 rounded-full mb-2">
                {exp.period}
              </span>
              <p className="font-semibold text-gray-900 dark:text-white text-lg">
                {exp.role}
              </p>
              <p className="text-gray-700 dark:text-gray-300 italic mb-3">
                {exp.company} | {exp.location}
              </p>
              <ul className="space-y-2">
                {exp.description.slice(0, 2).map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-700 dark:text-gray-300 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link
          to="/experience"
          className="mt-10 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Full Experience →
        </Link>
      </div>
    </section>
  );
};

export default ExperiencePreview;
