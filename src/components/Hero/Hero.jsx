import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Slider from "react-slick";
import { errorToast } from "../../utils/TostMessage";
import axiosInstance from "../../utils/axiosInstance";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 5,

          initialSlide: 0,
          // dots: true
        },
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 0,
          // dots: true
        },
      },
      {
        breakpoint: 1075,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          // dots: true
        },
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,

          // dots: true
          initialSlide: 0,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,

          // dots: true
          initialSlide: 0,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,

          initialSlide: 0,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,

          // dots: true
          initialSlide: 0,
        },
      },
    ],
  };
  const [categoryList, setCategotyList] = React.useState([]);

  useEffect(() => {
    axiosInstance
      .get("/categoryWiseNumOfMenuItem")
      .then((res) => {
        setCategotyList(res.data["data"]);
      })
      .catch((err) => {
        errorToast("Something went wrong");
      });
  }, []);
  
  return (
    <div className="hero">
      <div className="container-lg text-center">
        <h3>FIND YOUR HAPPINESS</h3>
        <p>For the love and delicious food.</p>
        <div className="input-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Foods"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <span className="input-group-text" id="basic-addon1">
            <FaSearch />
          </span>
        </div>
        <div className="category">
          <Slider {...settings}>
            {categoryList.map((item) => (
              <div>
                <div className="h-category-item">
                  <div className="h-category-img">
                    <img src="images/category.png" alt="" />
                  </div>

                  <p>{item.ItemCategory}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
