import Section from "./Section";
import { education } from "../data";

function Education() {
  return (
    <Section id="education" title="Education">
      <article className="card wide-card">
        <div className="training-head">
          <h3>{education.degree}</h3>
          <span className="period">{education.period}</span>
        </div>
        <p className="card-university">{education.university}</p>
      </article>
    </Section>
  );
}

export default Education;
