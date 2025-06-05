export const ProjectCard = ({ title, description, link, image }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
        >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4 bg-white">
                <h4 className="font-bold text-xl mb-2">{title}</h4>
                <p className="text-gray-700">{description}</p>
            </div>
        </a>
    );
};
