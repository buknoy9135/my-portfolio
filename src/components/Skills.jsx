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
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        {/* Skills */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="px-4 py-1 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-md shadow-sm font-medium text-sm md:text-base hover:shadow-md transition-shadow cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Exposure */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Exposure
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {exposure.map((item, i) => (
            <div
              key={i}
              className="px-4 py-1 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-md shadow-sm font-medium text-sm md:text-base hover:shadow-md transition-shadow cursor-default"
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
