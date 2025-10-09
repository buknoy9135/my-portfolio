import { Link } from "react-router-dom";

const ProjectCard = ({ id, title, description, live }) => {
  return (
    <Link to={`/projects/${id}`} className="group">
      <div className="bg-white dark:bg-gray-700 rounded-xl shadow-xl p-6 hover:shadow-lg transition flex flex-col h-full">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 flex-1">{description}</p>
        {live && (
          <span className="mt-4 inline-block text-sm text-blue-600 hover:underline">
            More Details →
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;
