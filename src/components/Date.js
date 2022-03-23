import React from "react";

const Date = ({ date }) => {
   let Days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
   ];
   let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

   let day = Days[date.getUTCDay()];
   let month = Months[date.getUTCMonth()]
   let numberOfDate = date.getUTCDate();

   if (numberOfDate < 10) {
      numberOfDate = `0${numberOfDate}`;
   }

   return (
      <h5 className="desc tracking-wide text-sm">
         {day}, {numberOfDate} {month}
      </h5>
   );
};

export default Date;
