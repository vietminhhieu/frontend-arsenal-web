import React from "react";
import { Carousel } from "react-bootstrap";
import { carouselArr } from "../Constant";

export const Slider = () => {
  return (
    <Carousel className=" w-100 " variant="dark">
      {carouselArr?.map((carousel, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={carousel.imgSource}
            alt={carousel.name}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
