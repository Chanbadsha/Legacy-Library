import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useAuth from "../Hooks/useAuth";
import Loader from "../SharedComponents/Loader";
import Slider from "./Slider";

const Hero = () => {
  const { loading, setLoading } = useAuth();

  if (loading) {
    return <Loader></Loader>;
  }
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../slider.json");
        const data = await response.json();

        setSliderData(data);
      } catch (error) {
        setSliderData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderData.map((slider) => (
          <SwiperSlide>
            <Slider sliderData={slider}></Slider>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
