const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Ruby on Rails",
    "API Integration",
    "API Development",
    "Python",
    "PostgreSQL",
    "Git",
    "GitHub",
  ];

  const exposure = [
    "Bootstrap",
    "Tailwind",
    "Material UI",
    "Axios",
    "Render",
    "Postman",
    "TablePlus",
    "RSpec",
    "Jest",
    "Ngrok",
    "Linux OS",
  ];

  return (
    <section className="pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="w-full max-w-6xl mx-auto px-6 mb-12">
        <hr className="border-gray-300 dark:border-gray-700" />
      </div>
      <div className="container mx-auto px-6 text-center">
        {/* Skills */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
          Core <span className="text-blue-600">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="px-5 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:shadow-lg font-medium text-sm md:text-base transition cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Exposure */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
          Tools & <span className="text-blue-600">Exposure</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {exposure.map((item, i) => (
            <div
              key={i}
              className="px-5 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:shadow-lg font-medium text-sm md:text-base transition cursor-default"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
