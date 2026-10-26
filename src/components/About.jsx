import Section from "./Section";
import { profile, highlights } from "../data";

function About() {
  return (
    <Section id="about" title="About">
      <p className="lead">{profile.summary}</p>
      <ul className="highlights">
        {highlights.map((h) => (
          <li key={h.title} className="card">
            <h3>{h.title}</h3>
            <p>{h.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default About;
