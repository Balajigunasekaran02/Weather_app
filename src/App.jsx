import { useRef, useState } from "react";
import weatherTypes from "./WeatherImages";

const Api_key = "";
function App() {
  const inputRef = useRef(null);
  const [apiData, setApiData] = useState(null);
  const [showWeather, setShowWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchWeather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${Api_key}`;
    //console.log(inputRef.current.value);
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setShowWeather(
          weatherTypes.filter(
            (weather) => weather.type === data.weather[0].main
          )
        );
        setApiData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className="bg-gray-800 h-screen grid place-items-center">
      <h1 className="text-white text-2xl uppercase font-semibold">
        Check Your Current Location Weather
      </h1>
      <div className="bg-white w-96 p-4 rounded-md">
        <div className="flex items-center justify-between">
          <input
            className="text-xl border-b p-1 border-gray-200 font-semibold uppercase flex-1"
            type="text"
            ref={inputRef}
            placeholder="Enter Your location"
          />
          <button onClick={fetchWeather} className="w-8 p-1">
            <img src={weatherTypes[11].img} alt="search" />
          </button>
        </div>
        <div
          className={`duration-300 delay-75  overflow-hidden
         ${showWeather ? "h-[27rem]" : "h-0"}`}
        >
          {loading ? (
            <div className="grid place-items-center h-full">
              <img
                src={weatherTypes[9].img}
                alt={weatherTypes[9].type}
                className="w-14 mx-auto mb-2 animate-spin"
              />
            </div>
          ) : (
            showWeather && (
              <div className="text-center flex flex-col gap-6 mt-10">
                {apiData && (
                  <p className="text-xl font-semibold">
                    {apiData.name + "," + apiData.sys.country}
                  </p>
                )}
                <img
                  className="w-52 mx-auto"
                  src={showWeather[0].img}
                  alt={showWeather[0].type}
                />
                <h3 className="text-2xl font-bold text-zinc-800">
                  {showWeather[0].type}
                </h3>
                <>
                  <div className="flex justify-center">
                    <img
                      src={weatherTypes[8].img}
                      alt={weatherTypes[8].type}
                      className="h-9 mt-1"
                    />
                    <h2 className="text-4xl font-extrabold">
                      {apiData.main.temp}&#176;C
                    </h2>
                  </div>
                </>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
