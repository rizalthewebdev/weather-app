import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Loading from "./Loading";

import CardForecast from "./CardForecast";

const Forecast = ({ data }) => {
   const [forecast, setForecast] = useState([]);
   const [loading, setLoading] = useState(false);
   const [width, setWidth] = useState(0);

   const slider = useRef();

   useEffect(() => {
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data?.lat}&lon=${data?.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
      setLoading(true);
      const timer = setTimeout(() => {
         axios.get(apiUrl).then((res) => {
            setForecast(res.data.daily);
            setLoading(false);
         });
      }, 1000);

      return () => clearTimeout(timer)
   }, [data?.lat, data?.lon]);

   useEffect(() => {
      setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
   }, []);

console.log(width)

   return (
      <div className="w-full px-5 py-2 flex justify-center items-center">
         {loading ? (
            <Loading color="#e4e4e7" />
         ) : (
            <motion.div className="overflow-hidden">
               <motion.div
                  ref={slider}
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  whileTap={{ cursor: "grabbing" }}
                  className="flex items-center justify-between gap-x-5 cursor-grab"
               >
                  {forecast?.map(
                     (weather, index) =>
                        index >= 1 &&
                        index < 7 && <CardForecast data={weather} key={index} />
                  )}
               </motion.div>
            </motion.div>
         )}
      </div>
   );
};

export default Forecast;