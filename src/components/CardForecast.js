import React from "react";
import WeatherIcon from "./WeatherIcon";

const CardForecast = ({ data }) => {
   function getDay() {
      let date = new Date(data.dt * 1000);
      let day = date.getUTCDay();
      let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

      return days[day];
   }

   return (
      <div className="min-w-max text-zinc-200 glass rounded-lg px-3 py-2 ring-1 ring-zinc-300/30 flex flex-col items-center gap-y-3">
         <h2 className="subtitle">{getDay()}</h2>
         <WeatherIcon defaultIcon={data.weather[0].icon} size={50} />
      </div>
   );
};

export default CardForecast;
