import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Hello</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Eva Machova, hosted on Netlify, code available on{" "}
            <a href="https://github.com/eva-coding/dictionary-project">
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
