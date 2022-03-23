import React, { useEffect, useRef, useState } from "react";
import Search from "./components/Search";
import axios from "axios";
import MainWeather from "./components/MainWeather";
import Loading from "./components/Loading";
import Forecast from "./components/Forecast";

const App = ({ defaultPlace }) => {
   const [weatherData, setWeatherData] = useState({ ready: false });
   const [city, setCity] = useState("");
   const [loading, setLoading] = useState(false);
   const searchRef = useRef();

   const apiKey = process.env.REACT_APP_API_KEY;
   const url = process.env.REACT_APP_API_URL;

   let apiUrl = `${url}?q=${city}&appid=${apiKey}&units=metric`;

   // Initialize default place
   useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
         axios
            .get(`${url}?q=${defaultPlace}&appid=${apiKey}&units=metric`)
            .then((res) => {
               setWeatherData({
                  ready: true,
                  coord: res.data.coord,
                  temp: res.data.main.temp,
                  city: res.data.name,
                  wind: res.data.wind.speed,
                  humidity: res.data.main.humidity,
                  weather: res.data.weather[0].main,
                  date: new Date(res.data.dt * 1000),
                  icon: res.data.weather[0].icon,
               });
            });
         setLoading(false);
      }, 2000);

      return () => clearTimeout(timer)
   }, []);

   const getDataWeather = async () => {
      setLoading(true);
      try {
         const timer = await setTimeout(() => {
            axios.get(apiUrl).then((res) => {
               setWeatherData({
                  ready: true,
                  coord: res.data.coord,
                  temp: res.data.main.temp,
                  city: res.data.name,
                  wind: res.data.wind.speed,
                  humidity: res.data.main.humidity,
                  weather: res.data.weather[0].main,
                  date: new Date(res.data.dt * 1000),
                  icon: res.data.weather[0].icon,
               });
               setLoading(false);
            });
         }, 1500);

         return () => clearTimeout(timer)
      } catch (error) {
         console.log({ message: error.message });
      }
   };

   return (
      <main className="w-screen h-screen bg-[#1F1D36] flex flex-col items-center">
         <>
            <Search
               search={city}
               setSearch={setCity}
               searchRef={searchRef}
               handleSearch={getDataWeather}
            />
            {loading ? (
               <Loading color="#e4e4e7" />
            ) : (
               weatherData.icon && (
                  <>
                     <div className="w-full max-w-lg flex flex-col">
                        <div className="w-full px-5 py-5">
                           <MainWeather data={weatherData} />
                        </div>
                        <Forecast data={weatherData.coord} />
                     </div>
                  </>
               )
            )}
         </>
      </main>
   );
};

export default App;
