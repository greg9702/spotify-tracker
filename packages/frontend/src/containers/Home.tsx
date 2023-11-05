import { useState } from "react";
import Hello from "./Hello";
import "./Home.css";
import { SearchBar } from "../components/SearchBar";
import { useAppContext } from "../lib/contextLib";

export default function Home() {
  const [results, setResults] = useState([]);
  const { isAuthenticated } = useAppContext();

  return (
    <div className="Home">
      <div className="lander">
        <div className="App">
          <div className="search-bar-container">
            {isAuthenticated ? <SearchBar setResults={setResults} /> : null}
          </div>
        </div>
        <Hello />
      </div>
    </div>
  );
}
