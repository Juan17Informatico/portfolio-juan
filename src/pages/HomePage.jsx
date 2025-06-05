import { ProjectCard } from "../components/ProjectCard";

export const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <header className="sticky top-0 bg-white shadow-md p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Tu Nombre</h1>
                <nav>
                    <ul className="flex space-x-6 text-sm font-medium">
                        <li>
                            <a href="#about" className="hover:text-blue-600">
                                Sobre mí
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-blue-600">
                                Proyectos
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:text-blue-600">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-blue-600">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="max-w-5xl mx-auto p-6">
                <section id="hero" className="text-center py-20">
                    <h2 className="text-4xl font-extrabold mb-4">Hola, soy [Tu Nombre]</h2>
                    <p className="text-lg max-w-xl mx-auto mb-8">
                        Frontend Developer | React, TailwindCSS, Vite | Creo interfaces modernas y
                        rápidas
                    </p>
                    <a
                        href="#projects"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
                    >
                        Ver mis proyectos
                    </a>
                </section>

                <section id="about" className="py-16">
                    <h3 className="text-3xl font-bold mb-6">Sobre mí</h3>
                    <p className="max-w-3xl text-lg leading-relaxed">
                        Soy un desarrollador frontend apasionado con experiencia en React y
                        TailwindCSS. Me encanta crear aplicaciones web que sean tanto visualmente
                        atractivas como funcionales.
                    </p>
                </section>

                <section id="projects" className="py-16">
                    <h3 className="text-3xl font-bold mb-8">Proyectos Destacados</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Proyecto ejemplo */}
                        <ProjectCard
                            title="Blog Personal"
                            description="Un blog construido con React, Vite y TailwindCSS."
                            link="https://tu-proyecto-blog.com"
                            image="https://via.placeholder.com/400x200"
                        />
                        <ProjectCard
                            title="Dashboard Admin"
                            description="Dashboard responsivo para administración."
                            link="https://tu-dashboard.com"
                            image="https://via.placeholder.com/400x200"
                        />
                    </div>
                </section>

                <section id="skills" className="py-16">
                    <h3 className="text-3xl font-bold mb-6">Tecnologías</h3>
                    <ul className="flex flex-wrap gap-4">
                        {["React", "Vite", "TailwindCSS", "JavaScript", "Git", "HTML", "CSS"].map(
                            (skill) => (
                                <li
                                    key={skill}
                                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold"
                                >
                                    {skill}
                                </li>
                            )
                        )}
                    </ul>
                </section>

                <section id="contact" className="py-16">
                    <h3 className="text-3xl font-bold mb-6">Contacto</h3>
                    <p className="mb-4">Puedes contactarme a través de:</p>
                    <ul className="space-y-2">
                        <li>
                            Email:{" "}
                            <a
                                href="mailto:tuemail@example.com"
                                className="text-blue-600 hover:underline"
                            >
                                tuemail@example.com
                            </a>
                        </li>
                        <li>
                            LinkedIn:{" "}
                            <a
                                href="https://linkedin.com/in/tuusuario"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                linkedin.com/in/tuusuario
                            </a>
                        </li>
                        <li>
                            GitHub:{" "}
                            <a
                                href="https://github.com/tuusuario"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                github.com/tuusuario
                            </a>
                        </li>
                    </ul>
                </section>
            </main>

            <footer className="text-center p-6 bg-gray-100 text-sm text-gray-600">
                &copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
            </footer>
        </div>
    );
};
