import React from "react";

import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import KeyWest from "../assets/keywest.jpg";

// const selects = [
//   {
//     title: "BoraBora",
//     address: "",
//   },
//   {
//     title: "",
//     address: "",
//   },
//   {
//     title: "",
//     address: "",
//   },
//   {
//     title: "",
//     address: "",
//   },
//   {
//     title: "",
//     address: "",
//   },
//   {
//     title: "",
//     address: "",
//   },
// ];

const SelecetCard = ({ select }) => {
  return (
    <div>
      <div className="relative h-full">
        <img
          className="object-cover w-full h-full"
          src={select.address}
          alt=""
        />
        <div className="bg-gray-900/30 absolute w-full h-full top-0 left-0">
          <p className="absolute left-4 bottom-4 text-white text-2xl font-bold">
            {select.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelecetCard;
