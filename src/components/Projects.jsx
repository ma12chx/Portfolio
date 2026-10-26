import Section from "./Section";
import { projects } from "../data";
import { ArrowUpRight } from "./Icons.jsx";

function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="Work from my jobs, training, and studies."
    >
      <ul className="project-grid">
        {projects.map((p) => (
          <li key={p.title} className={`card project accent-${p.accent}`}>
            <p className="project-context">{p.context}</p>
            <h3>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noreferrer">
                  {p.title} <ArrowUpRight />
                </a>
              ) : (
                p.title
              )}
            </h3>
            <p className="project-text">{p.text}</p>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {p.liveDemo && (
              <button
                type="button"
                className="btn btn-primary btn-demo"
                onClick={() =>
                  window.open(p.liveDemo, "_blank", "noopener,noreferrer")
                }
              >
                Live Demo <ArrowUpRight />
              </button>
              // <a
              //   href={p.liveDemo}
              //   target="_blank"
              //   rel="noopener noreferrer"
              //   className="btn-primary"
              // >
              //   Live Demo <ArrowUpRight />
              // </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Projects;
