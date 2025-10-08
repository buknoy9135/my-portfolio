import { education } from "../data/education";
import { certificates } from "../data/certificates";

const Education = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Education Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Education
          </h2>
          <div className="relative pl-6 space-y-8">
            {/* Gradient Timeline Bar */}
            <div className="absolute left-2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded"></div>

            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Dot on the line */}
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 bg-blue-600 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-900"></div>

                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-xs font-medium px-2 py-1 rounded-full mb-2">
                    {edu.date}
                  </span>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {edu.course}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                    {edu.school}
                  </p>
                  {edu.description && (
                    <ul className="space-y-2">
                      {edu.description.map((item, i) => (
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
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Other Certificates
          </h2>
          <div className="relative pl-6 space-y-8">
            {/* Gradient Timeline Bar */}
            <div className="absolute left-2 top-0 h-full w-1 bg-gradient-to-b from-green-400 to-green-600 rounded"></div>

            {certificates.map((cert, index) => (
              <div key={index} className="relative">
                {/* Dot on the line */}
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 bg-green-500 dark:bg-green-400 rounded-full border-2 border-white dark:border-gray-900"></div>

                <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <span className="inline-block bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 text-xs font-medium px-2 py-1 rounded-full mb-2">
                    {cert.course}
                  </span>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {cert.titles.map((title, i) => (
                      <li
                        key={i}
                        className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-green-600 hover:text-green-500 transition-colors"
                        style={{
                          fontFamily:
                            "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                          fontSize: "0.95rem",
                        }}
                      >
                        {title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
