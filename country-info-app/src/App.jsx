import { useState } from "react";
import "./App.css";
import CountryInput from "./components/CountryInput";
import CountryDisplay from "./components/CountryDisplay";
import axios from "axios";

function App() {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(countryName) {
    setLoading(true);
    setError(null);
    setCountry(null);

    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${encodeURIComponent(
          countryName
        )}?fullText=false`
      );

      setCountry(response.data[0]);
    } catch (err) {
      if (err.response?.status === 404) {
        setError("No matching country found");
      } else {
        setError("Failed to fetch country data");
      }
    } finally {
      setLoading(false);
    }
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
