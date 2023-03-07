import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/53070-haley-toye"
            target="_blank"
            rel="noreferrer"
          >
            Haley Toye{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/haleytoye/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
