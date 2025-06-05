import { ExternalLink } from "lucide-react";

export const ProjectCard = ({ title, description, link, image, tech = [] }) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <a
                    href={link}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-300 font-medium"
                >
                    Ver proyecto <ExternalLink size={16} />
                </a>
            </div>
        </div>
    );
};
