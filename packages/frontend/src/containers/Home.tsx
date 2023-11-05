import { useState } from "react";
import Hello from "./Hello";
import "./Home.css";
import { SearchBar } from "../components/SearchBar";

export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <div className="Home">
      <div className="lander">
        <div className="App">
          <div className="search-bar-container">
            <SearchBar setResults={setResults} />
          </div>
        </div>
        <Hello />
      </div>
    </div>
  );
}
