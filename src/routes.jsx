import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";

export default function AppRoutes() {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/projects" element={<Projects />} />
<Route path="/resume" element={<Resume />} />
<Route path="*" element={<h1>404 - Página no encontrada</h1>} />
</Routes>
);
}