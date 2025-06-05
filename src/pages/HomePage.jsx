import { useEffect, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { ChevronDown, Github, Linkedin, Mail, Moon, Sun } from "lucide-react";

export const HomePage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    const skills = [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "MongoDB",
        "GraphQL",
        "Docker",
        "AWS",
        "Git",
        "Figma",
        "Vite",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            {/* Header */}
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Portfolio
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            {["Inicio", "Sobre mí", "Proyectos", "Skills", "Contacto"].map(
                                (item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                                        className="relative text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
                                    >
                                        {item}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                )
                            )}
                        </nav>

                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section
                id="inicio"
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
            >
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
                    <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Hola, soy{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                                Juan Pa
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            <span className="font-semibold">Frontend Developer</span> especializado
                            en crear experiencias digitales excepcionales
                        </p>
                        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                            Transformo ideas en interfaces modernas, rápidas y atractivas usando las
                            últimas tecnologías
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <a
                            href="#proyectos"
                            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Ver mis proyectos
                            <ChevronDown
                                size={20}
                                className="inline ml-2 group-hover:translate-y-1 transition-transform duration-300"
                            />
                        </a>
                        <a
                            href="#contacto"
                            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                        >
                            Contactar
                        </a>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6">
                {/* About Section */}
                <section id="sobre-mí" className="py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Sobre mí
                            </h2>
                            <div className="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                                <p>
                                    Soy un desarrollador frontend apasionado con más de X años de
                                    experiencia creando aplicaciones web modernas y escalables. Mi
                                    enfoque se centra en la experiencia del usuario y el
                                    rendimiento.
                                </p>
                                <p>
                                    Me especializo en React, Next.js y TailwindCSS, pero siempre
                                    estoy explorando nuevas tecnologías para mantenerme al día con
                                    las últimas tendencias del desarrollo web.
                                </p>
                                <p>
                                    Cuando no estoy programando, me gusta contribuir a proyectos
                                    open source y compartir conocimientos con la comunidad de
                                    desarrolladores.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"></div>
                            <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                                        TN
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300">Tu foto aquí</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="proyectos" className="py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Proyectos Destacados
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Una selección de mis trabajos más recientes y desafiantes
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        <ProjectCard
                            title="E-commerce Platform"
                            description="Plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de inventario."
                            link="https://tu-ecommerce.com"
                            image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop"
                            tech={["React", "Node.js", "MongoDB", "Stripe"]}
                        />
                        <ProjectCard
                            title="Dashboard Analytics"
                            description="Dashboard interactivo para análisis de datos con gráficos en tiempo real y filtros avanzados."
                            link="https://tu-dashboard.com"
                            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
                            tech={["Next.js", "TypeScript", "Chart.js", "Tailwind"]}
                        />
                        <ProjectCard
                            title="Social Media App"
                            description="Aplicación de redes sociales con chat en tiempo real, publicaciones y sistema de seguimiento."
                            link="https://tu-social-app.com"
                            image="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop"
                            tech={["React Native", "Firebase", "Redux", "Socket.io"]}
                        />
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Tecnologías & Herramientas
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Las tecnologías que domino y uso en mis proyectos
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {skills.map((skill, index) => (
                            <div
                                key={skill}
                                className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-sm">
                                    {skill.slice(0, 2)}
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contacto" className="py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Hablemos
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre tu idea y
                            ayudarte a hacerla realidad.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <a
                            href="mailto:tuemail@example.com"
                            className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                <Mail size={24} />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Email
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">tuemail@example.com</p>
                        </a>

                        <a
                            href="https://linkedin.com/in/tuusuario"
                            target="_blank"
                            rel="noreferrer"
                            className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                <Linkedin size={24} />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                LinkedIn
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">Conectemos</p>
                        </a>

                        <a
                            href="https://github.com/tuusuario"
                            target="_blank"
                            rel="noreferrer"
                            className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                <Github size={24} />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                GitHub
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">Ver mi código</p>
                        </a>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="bg-gray-100 dark:bg-gray-800 py-12 mt-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Portfolio
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Diseñado y desarrollado con ❤️ usando React y TailwindCSS
                    </p>
                    <div className="flex justify-center space-x-6 mb-6">
                        <a
                            href="mailto:tuemail@example.com"
                            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                            <Mail size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/tuusuario"
                            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="https://github.com/tuusuario"
                            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        >
                            <Github size={20} />
                        </a>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        &copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
};
