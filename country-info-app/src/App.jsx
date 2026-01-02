import { useState } from "react";
import "./App.css";
import CountryInput from "./components/CountryInput";
import CountryDisplay from "./components/CountryDisplay";

function App() {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(countryName) {
    setLoading(true);
    setError(null);
    setCountry(null);
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${encodeURIComponent(
          countryName
        )}?fullText=false`
      );
      if (!res.ok) {
        if (res.status === 404) throw new Error("No matching country found.");
        throw new Error("Failed to fetch country data.");
      }
      const data = await res.json();
      setCountry(data[0]);
    } catch (err) {
      setError(err.message || "Unknown error");
    }
    setLoading(false);
  }

  return (
    <div className="app">
      <h1>Country Info</h1>
      <CountryInput handleSearch={handleSearch} />
      <CountryDisplay country={country} loading={loading} error={error} />
    </div>
  );
}

export default App;
