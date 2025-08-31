import { NavLink } from "react-router-dom";

export default function Navbar() {
const active = ({ isActive }) =>
isActive ? { textDecoration: "underline" } : undefined;

return (
<nav style={{ display: "flex", gap: 12, padding: 16 }}>
<NavLink to="/" style={active}>Inicio</NavLink>
<NavLink to="/projects" style={active}>Proyectos</NavLink>
<NavLink to="/resume" style={active}>Currículum</NavLink>
</nav>
);
}