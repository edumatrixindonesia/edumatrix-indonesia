import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v1 as uuid } from "uuid";
import { config } from "react-spring";
import belajarLebihMudah from "../asset/carousel/Belajar lebih mudah.png";
import bonding from "../asset/carousel/Bonding personal.png";
import disiplin from "../asset/carousel/Disiplin dan tepat.png";
import drilling from "../asset/carousel/Drilling soal dan.png";
import jadwalFleksibel from "../asset/carousel/Jadwal fleksibel.png";
import konsultasi from "../asset/carousel/Konsultasi akademik.png";
import pendalamanMateri from "../asset/carousel/Pendalaman materi.png";
import progresReport from "../asset/carousel/Progress report.png";
import topQuality from "../asset/carousel/Top quality service.png";
// icon
import iconBelajar from "../asset/carousel/Drilling soal dan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Carousel.css";

export default class Slide extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };

  slides = [
    {
      key: uuid(),
      content: (
        <img className="inti-carousel" src={belajarLebihMudah} alt="1" />
      ),
    },
    {
      key: uuid(),
      content: <img className="inti-carousel" src={bonding} alt="2" />,
    },
    {
      key: uuid(),
      content: <img className="inti-carousel" src={disiplin} alt="3" />,
    },
    {
      key: uuid(),
      content: <img className="inti-carousel" src={drilling} alt="4" />,
    },
    {
      key: uuid(),
      content: <img className="inti-carousel" src={jadwalFleksibel} alt="5" />,
    },
    {
      key: uuid(),
      content: <img className="inti-carousel" src={konsultasi} alt="6" />,
    },
    {
      key: uuid(),
      content: <img className="inti-carousel" src={pendalamanMateri} alt="7" />,
    },
    {
      key: uuid(),
      content: <img className="inti-carousel" src={progresReport} alt="8" />,
    },
    {
      key: uuid(),
      content: <img className="inti-carousel" src={topQuality} alt="9" />,
    },
  ];

  render() {
    return (
      <div className="box-carousel">
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
        <div className="main-carousel">
          <div className="all-btn">
            <button
              className="btn-left"
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide - 1 });
              }}
            >
              <FontAwesomeIcon
                className="left-arrow"
                icon={faArrowCircleLeft}
              />
            </button>
            <button
              className="btn-right"
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide + 1 });
              }}
            >
              <FontAwesomeIcon
                className="right-arrow"
                icon={faArrowCircleRight}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
