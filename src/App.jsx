import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <NavBar />
      <main></main>
      <footer className="footer">
        <div className="container"></div>
      </footer>
    </>
  );
}

export default App;
