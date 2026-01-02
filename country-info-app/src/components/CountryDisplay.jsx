import React from "react";

export default function CountryDisplay({ country, loading, error }) {
  if (loading) return <div className="info">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!country)
    return <div className="info">Search for a country to see details.</div>;

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "—";

  return (
    <div className="country-container">
      <img
        className="flag"
        src={country.flags?.svg || country.flags?.png}
        alt={`${country.name.common} flag`}
      />
      <div className="country-body">
        <h2>{country.name.common}</h2>
        <p>
          <strong>Official:</strong> {country.name.official}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital?.join(", ") || "—"}
        </p>
        <p>
          <strong>Region:</strong> {country.region || "—"}
        </p>
        <p>
          <strong>Population:</strong>{" "}
          {country.population?.toLocaleString() || "—"}
        </p>
        <p>
          <strong>Languages:</strong> {languages}
        </p>
      </div>
    </div>
  );
}
