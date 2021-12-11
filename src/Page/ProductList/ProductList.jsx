import React from "react";
import { useParams } from "react-router-dom";

export const ProductList = () => {
  const { category } = useParams();
  category.toLowerCase();

  if (category === "iphone") {
    console.log("this is iphone");
  }

  return <div>this is Product List</div>;
};
