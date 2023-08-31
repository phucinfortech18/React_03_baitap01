import { useState } from "react";
import { Ttour } from "./types/data";
type Props2 = {
  tour: Ttour;
};
const Tour = ({ tour }: Props2) => {
  console.log(tour);
  const [isOpen, setIsOpen] = useState(false);
  const Readmore = tour.description;
  const Readless = tour.description.substring(0, 100);
  return (
    <div className="tour w-[350px] mt-5">
      <div className="text-center tour__thumbnail">
        <img className="h-[150px] w-fit mx-auto" src={tour.image} />
      </div>
      <p className="mt-5 text-justify tour__description">
        {isOpen ? Readmore : Readless}
      </p>
      <button
        className="w-[50%] border bg-green-300 text-black mt-2 rounded p-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? "read more..." : "read less"}
      </button>
    </div>
  );
};

export default Tour;
