import Section from "./Section";
import { skills, languages } from "../data";

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skill-groups">
        {skills.map((g) => (
          <div key={g.group} className="skill-group">
            <h3>{g.group}</h3>
            <ul className="chips">
              {g.items.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="skill-group">
          <h3>Languages</h3>
          <ul className="chips">
            {languages.map((l) => (
              <li key={l.name} className="chip">
                {l.name}
                <span className="chip-note">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Skills;
