function Section({ id, title, intro, children }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <h2>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export default Section;
