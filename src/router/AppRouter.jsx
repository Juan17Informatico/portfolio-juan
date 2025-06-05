import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"

export const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/projects" element={<ProjectsPage />} /> */}
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            {/* Add more routes as needed */}
            <Route path="*" element={<Navigate to="/" />} />
            {/* TODO: Add a catch-all route for 404 Not Found */}
        </Routes>
    )


}
