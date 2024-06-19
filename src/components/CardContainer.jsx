import React from "react";
import logo1 from "../assets/Research@4x-5@2x.png";
import logo2 from "../assets/Research@4x-2@2x.png";
import logo3 from "../assets/Research@4x-1@2x.png";
import logo4 from "../assets/Research@4x-4@2x.png";
import logo5 from "../assets/Research@4x@2x.png";
import logo6 from "../assets/Research@4x-3@2x.png";
import Card from "./Card";

const cardData = [
  {
    id: 1,
    logo: logo1,
    title: "Presentation Design",
    text: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    logo: logo2,
    title: "Audio - Visual Production",
    text: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    logo: logo3,
    title: "Translation Services",
    text: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    logo: logo4,
    title: "Graphic Design",
    text: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    id: 5,
    logo: logo5,
    title: "Research & Analytics",
    text: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    id: 6,
    logo: logo6,
    title: "Data Processing",
    text: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
];

const CardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] xl:-[40px] place-items-center ">
      {cardData.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default CardContainer;
