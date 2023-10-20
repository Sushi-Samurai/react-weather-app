import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/63509-sam-turner-lara"
            target="_blank"
          >
            Sam Turner
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Sushi-Samurai/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-app-sushisam.netlify.app/"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
