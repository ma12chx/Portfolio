import { profile } from "../data";
import {
  PinIcon,
  MailIcon,
  LinkedinIcon,
  GithubIcon,
  FileIcon,
} from "./Icons.jsx";

function Intro() {
  return (
    <section className="intro" id="top">
      <div className="intro-glow" aria-hidden="true" />
      <div className="container intro-copy">
        {profile.available && (
          <p className="badge">
            <span className="badge-dot" />
            {profile.availableText}
          </p>
        )}
        <h1>
          Hi, I’m <span className="grad">{profile.firstName}</span>.
        </h1>
        <h2>{profile.role}.</h2>
        <p className="intro-sub">{profile.tagline}</p>
        <ul className="socials">
          <li>
            <a
              className="social"
              href={`mailto:${profile.email}`}
              data-label="Email"
              aria-label="Email"
            >
              <MailIcon />
            </a>
          </li>
          {profile.linkedin.url && (
            <li>
              <a
                className="social"
                href={profile.linkedin.url}
                target="_blank"
                rel="noreferrer"
                data-label="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </li>
          )}
          <li>
            <a
              className="social"
              href={profile.github.url}
              target="_blank"
              rel="noreferrer"
              data-label="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
          </li>
          <li>
            <a
              className="social"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              data-label="Resume"
              aria-label="Resume"
            >
              <FileIcon />
            </a>
          </li>
        </ul>
        <p className="intro-loc">
          <PinIcon /> {profile.location}
        </p>
      </div>
    </section>
  );
}

export default Intro;
