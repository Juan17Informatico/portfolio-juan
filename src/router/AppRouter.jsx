import { Routes } from "react-router-dom"

export const AppRouter = () => {


    // Define your routes here
    // For example: Home, About, Contact, etc.
    // You can use React Router


    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Add more routes as needed */}
            <Route path="*" element={<NotFound />} />
            {/* TODO: Add a catch-all route for 404 Not Found */}
        </Routes>
    )


}
