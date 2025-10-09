import { experience } from "../data/experience";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  return (
    <section className="py-10 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
          Professional Experience
        </h2>

        <div className="relative pl-6 space-y-8">
          {/* Gradient Timeline Bar on the left */}
          <div className="absolute left-2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded"></div>

          {experience.map((exp, index) => (
            <div key={index} className="relative">
              {/* Dot on the right side of the line */}
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 bg-blue-600 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-900"></div>

              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-xs font-medium px-2 py-1 rounded-full mb-2">
                  {exp.period}
                </span>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {exp.role}
                </p>
                <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                  {exp.company} | {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-700 dark:text-gray-300 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600"
                      style={{
                        fontFamily:
                          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        fontSize: "0.95rem",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
