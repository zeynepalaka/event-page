import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import events from "../fake-data/events.json";
import Header from "../components/Header";

export function Event() {
  let params = useParams();
  const event = events.find((event) => event.id == params.eventId);

  return (
    <div className="container">
      <Header />

      <div className="img-slider">
        <Swiper spaceBetween={50} slidesPerView={3}>
          {event.pictures.map((picture, index) => (
            <SwiperSlide key={index}>
              <img src={picture} />
            </SwiperSlide>
          ))}
        </Swiper>
        <h1 className="event-title">{event.title}</h1>
        <p className="event-details">{event.details}</p>
        <p className="event-location">
          {event.city} - {event.place}
        </p>
        <p className="event-date">
          Etkinlik tarihleri: {event.startDate} - {event.endDate}
        </p>
      </div>
    </div>
  );
}
<div id="map"></div>;
