import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { FaGithub, FaYoutube, FaGlobe } from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Project Not Found
        </h2>
        <Link
          to="/projects"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow">
        {/* Project Title */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* Date */}
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          <strong>Date:</strong> {project.date || "n/a"}
        </p>

        {/* Scope Section */}
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Description:
        </h3>
        <ul className="list-disc mb-4 text-gray-700 dark:text-gray-300 space-y-2">
          {project.scope?.map((item, i) => (
            <li key={i} className="ml-6" style={{ paddingLeft: "1.5rem" }}>
              {item}
            </li>
          )) || "n/a"}
        </ul>

        {/* Stack Section - ABOVE buttons */}
        {project.stack && project.stack.length > 0 && (
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mr-2">
              Tech Stack:
            </h3>
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-4">
          {project.repo && project.repo !== "n/a" && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {project.live && project.live !== "n/a" && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              <FaGlobe /> Live
            </a>
          )}
          {project.demo && project.demo !== "n/a" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              <FaYoutube /> Demo
            </a>
          )}
        </div>

        {/* Back Link */}
        <Link
          to="/projects"
          className="mt-6 inline-block text-blue-600 hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetail;
