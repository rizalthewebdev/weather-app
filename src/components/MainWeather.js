import React from "react";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon";
import { GoLocation } from "react-icons/go";
import Clock from "./Clock";

const MainWeather = ({ data }) => {
   return (
      <div className="w-full mx-auto">
         <div className="w-full glass rounded-md text-zinc-200 flex items-center ring-1 ring-zinc-300/30">
            <div className="w-full flex justify-between p-5">
               <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col">
                     <p className="subtitle text-xl">{data.weather}</p>
                     <h1 className="text-7xl title">
                        {Math.floor(data.temp) + "°"}
                     </h1>
                  </div>
                  <div className="flex flex-col gap-1 justify-end">
                     {data.date && <Date date={data.date} />}
                     <span className="flex items-center space-x-1">
                        <GoLocation fontSize={13} />
                        <p className="subtitle text-base font-light">{data.city}</p>
                     </span>
                  </div>
               </div>
               <div className="flex flex-col items-center justify-around">
                  <WeatherIcon defaultIcon={data.icon} size={100} />
                  {data.date && <Clock date={data.date} />}
               </div>
            </div>
         </div>
      </div>
   );
};

export default MainWeather;
