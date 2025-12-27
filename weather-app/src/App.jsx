import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("peshawar");
  const [data, setData] = useState(null);
  // let url = `https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=${apiKey}&units=metric`;
  useEffect(() => {
    if (!city) return;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=016de935b9164dc30cf79bc99d3cff55&units=metric`
        );
        setData(response.data);
      } catch (error) {
        console.log("Error while fetching the data", error);
      }
    };
    fetchData();
  }, [city]);

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Your City"
          onChange={(event) => {
            setInput(event.target.value);
          }}
          value={input}
        />
        <button
          onClick={() => {
            setCity(input);
            setInput("");
          }}
        >
          Search
        </button>
      </div>
      <div className="weather-infor">
        <div className="temperature">
          {" "}
          Temperature : {data && data.main.temp}
        </div>
        <div className="icon">
          <img
            src={`https://openweathermap.org/img/wn/${
              data && data.weather[0].icon
            }@2x.png`}
            alt="weather icon"
          />
        </div>
        <div className="humidity">Humidity : {data && data.main.humidity}</div>
      </div>
    </div>
  );
}

export default App;
