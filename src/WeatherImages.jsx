import Clear from "./assets/Clear.png";
import Clouds from "./assets/Clouds.png";
import Drizzle from "./assets/Drizzle.png";
import Haze from "./assets/Haze.png";
import Mist from "./assets/Mist.png";
import Rain from "./assets/Rain.png";
import Smoke from "./assets/Smoke.png";
import Snow from "./assets/Snow.png";
import temp from "./assets/temp.png";
import loading from "./assets/loading.png";
import search from "./assets/search.png";
import Humidity from "./assets/humidity.png";

const WeatherTypes = [
  {
    type: "Clear",
    img: Clear,
  },
  {
    type: "Rain",
    img: Rain,
  },
  {
    type: "Snow",
    img: Snow,
  },
  {
    type: "Clouds",
    img: Clouds,
  },
  {
    type: "Haze",
    img: Haze,
  },
  {
    type: "Smoke",
    img: Smoke,
  },
  {
    type: "Mist",
    img: Mist,
  },
  {
    type: "Drizzle",
    img: Drizzle,
  },
  {
    type: "temp",
    img: temp,
  },
  {
    type: "load",
    img: loading,
  },
  {
    type: "Search",
    img: search,
  },
  {
    type: "humidity",
    img: Humidity,
  },
];

export default WeatherTypes;
