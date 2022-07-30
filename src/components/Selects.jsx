import React from "react";
import SelectsCard from "./SelectsCard";

import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import KeyWest from "../assets/keywest.jpg";

const selects = [
  { address: BoraBora, title: "Borabora" },
  { address: BoraBora2, title: "Borabora-2" },
  { address: Maldives, title: "Maldives" },
  { address: Maldives2, title: "Malidives-2" },
  { address: Maldives3, title: "Maldives-3" },
  { address: KeyWest, title: "Key West" },
];

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {selects.map((select, index) => (
        <SelectsCard key={index} select={select} />
      ))}
    </div>
  );
};

export default Selects;
