import React from "react";
import WomanImage from "../assets/img/woman_hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-hero1 h-[800px] bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 bg-red-500 h-[2px] mr-3"></div>New Trend
          </div>
          <h1 className="uppercase text-[70px] font-light leading-[1.1] mb-4">
            atumn sale stylish <br />
            <span className="font-semibold">womens</span>
          </h1>
          <Link
            to={"/"}
            className="self-start font-semibold uppercase boreder-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
