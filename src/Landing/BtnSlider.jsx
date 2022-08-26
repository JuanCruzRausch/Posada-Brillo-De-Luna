import React from "react";
import "./Slider.css";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

function BtnSlider({ direction, moveSlide }) {
  return (
    <>
      {direction === "next" ? (
        <HiOutlineArrowSmRight onClick={moveSlide} className="btn-slide next" />
      ) : (
        <HiOutlineArrowSmLeft onClick={moveSlide} className="btn-slide prev" />
      )}
    </>
  );
}

export default BtnSlider;
