import { studies, experiences } from "../data/resume";

export default function Resume() {
return (
<section>
<h1>Currículum</h1>

<h2>Experiencia</h2>
<ul>
{experiences.map(e => (
<li key={e.id}>
{e.title} — {e.company} ({e.date})
</li>
))}
</ul>

<h2>Educación</h2>
<ul>
{studies.map(s => (
<li key={s.id}>
{s.title} — {s.institution} ({s.date})
</li>
))}
</ul>
</section>
);
}