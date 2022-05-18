import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import styles from "./TrendingList.module.scss";
import TrendingCard from "../trendingCard/TrendingCard";
import { fetchTrendings } from "../../features/movies/movieSlice";

const TrendingList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies.trendings);

  useEffect(() => {
    dispatch(fetchTrendings());
  }, [dispatch]);

  const renderTrendingList = () => {
    if (data.status !== "success") return;
    const movies = data.trendingList.results;

    return movies.map((movie) => (
      <SwiperSlide key={movie.id}>
        <TrendingCard data={movie} class="big" />
      </SwiperSlide>
    ));
  };

  return (
    <div className={styles.list_container}>
      <Swiper slidesPerView={10.9} className="mySwiper">
        {renderTrendingList()}
      </Swiper>
    </div>
  );
};

export default TrendingList;
