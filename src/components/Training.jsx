import Section from "./Section";
import { training } from "../data";

function Training() {
  return (
    <Section id="training" title="Training">
      <article className="card wide-card">
        <div className="training-head">
          <h3>{training.title}</h3>
          <span className="period">{training.period}</span>
        </div>
        <p className="card-org">{training.org}</p>
        <ul className="bullets">
          {training.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </article>
    </Section>
  );
}

export default Training;
