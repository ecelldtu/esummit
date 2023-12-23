import React from "react";
import CountUp from "react-countup";

const CountCard = (props) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start text-start px-2 w-full py-4">
      <div className="basis-1/2 md:basis-3/5 align-middle">
        <h1 className="text-2xl my-auto font-semibold md:text-4xl xl:text-5xl font-CyberGraph text-violet-400">{props.countCard.title}</h1>
      </div>
      <div className="basis-1/2 md:basis-2/5 mx-auto mt-4">
        <CountUp
          end={props.countCard.count}
          suffix=" +"
          className="text-7xl xl:text-8xl font-extrabold font-CyberSport my-auto text-white"
          duration={2}
          enableScrollSpy={true}
          scrollSpyDelay={10}
        />
      </div>
    </div>
  );
};

export default CountCard;