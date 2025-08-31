import { projects } from "../data/projects";

export default function Projects() {
return (
<section>
<h1>Proyectos</h1>
<ul>
{projects.map(p => (
<li key={p.id}>
<strong>{p.name}</strong> — {p.description}{" "}
{p.link && <a href={p.link} target="_blank">Ver</a>}
</li>
))}
</ul>
</section>
);
}