import React, {useState, useEffect} from "react";
import TopSlider from "react-slick";
import axios from "axios";
//Component
import {NextArrow, PrevArrow} from "./Arrows.component";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopCarousal = () => {
  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "300px",
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const images = [
    "https://i.ytimg.com/vi/3D9g4erlOVE/maxresdefault.jpg",

    "https://www.indianfilmhistory.com/blogs/wp-content/uploads/2020/01/Unveiling-The-Posters-Of-Sidharth-Malhotra-Starrer-Shershaah.jpg",

    "https://static.toiimg.com/photo/84378757.cms",

    "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/10/04/death-of-me-review-a-death-sentence-for-the-audience.jpg?fit=1823%2C1080&quality=80&zoom=1&ssl=1",

    "https://m.media-amazon.com/images/M/MV5BMzhhMzM1ZjAtMjk3Yi00OWE3LThmY2ItMGRkMWUzMDkzOGNjXkEyXkFqcGdeQXVyNzc2MTc4MTY@._V1_.jpg"
  ];

return (
  <>
<div className="lg:hidden mb-20">
<TopSlider {...settings}>
{
  images.map((image) => (
    <div className="w-full h-64 md:h-80 py-3">
    <img src={image}
    alt="testing" className="w-full h-full rounded-md"/>
    </div>
  ))
}
</TopSlider>
</div>

<div className="hidden lg:block mb-20">
<TopSlider {...settingsLg}>
{
  images.map((image) => (
    <div className="w-full h-96 px-2 py-3">
    <img src={image}
    alt="testing" className="w-full h-full rounded-md"/>
    </div>
  ))
}
</TopSlider>
</div>
  </>
);
};

export default TopCarousal;
