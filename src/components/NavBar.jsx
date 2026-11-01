import { useEffect, useRef, useState } from "react";
import { profile } from "../data";
import { MenuIcon, CloseIcon } from "./Icons.jsx";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "training", label: "Training" },
  { id: "education", label: "Education" },
];

const NAV_HEIGHT = 64;

function NavBar() {
  const [active, setActive] = useState(1); // About
  const [open, setOpen] = useState(false);
  const scrolling = useRef(false); // true while a link click is animating

  // Highlight the link for the section currently in view.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      if (scrolling.current) return;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive(links[links.length - 1].id);
        return;
      }
      const line = window.innerHeight * 0.35;
      let current = links[0].id;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= line) current = l.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Animates window scroll to `target` (px). Calls onDone when finished.
  function smoothScrollTo(target, onDone) {
    const start = window.scrollY;
    const dist = target - start;
    const duration = Math.min(1600, Math.max(700, Math.abs(dist) * 0.45));
    let t0 = null;

    const step = (now) => {
      if (t0 === null) t0 = now; // first frame is the start time
      const p = Math.min(1, (now - t0) / duration);
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      window.scrollTo({ top: start + dist * eased, behavior: "instant" });
      if (p < 1) requestAnimationFrame(step);
      else onDone();
    };
    requestAnimationFrame(step);
  }

  // Slower, eased scroll to a section.
  const goTo = (e, id) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    setOpen(false);
    setActive(id);

    const target = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      window.scrollTo({ top: target, behavior: "instant" });
      return;
    }

    scrolling.current = true;
    smoothScrollTo(target, () => {
      scrolling.current = false;
    });
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Back to top">
          {profile.initials}
          <span className="brand-dot" />
        </a>

        <nav
          aria-label="Main"
          className={open ? "nav-menu is-open" : "nav-menu"}
        >
          <ul>
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={active === l.id ? "is-active" : undefined}
                  aria-current={active === l.id ? "true" : undefined}
                  onClick={(e) => goTo(e, l.id)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-tools">
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
