import Section from "./Section.jsx";
import { experience } from "../data.js";

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="companies">
        {experience.map((c) => (
          <article key={c.company} className="company">
            <h3 className="company-name">{c.company}</h3>
            <ol className="roles">
              {c.roles.map((r) => (
                <li key={r.title} className="role">
                  <div className="role-head">
                    <h4>{r.title}</h4>
                    <p className="period">{r.period}</p>
                  </div>
                  <ul className="bullets">
                    {r.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
