import React, { Component } from "react";
import Slider from "react-slick";
import participantesStyles from "../styles/participantes.module.scss"
import "../styles/sliderstyles.scss"

import profile1 from "../images/wakanda.jpg"
import profile2 from "../images/tonystark.jpg"
import profile3 from "../images/widow.jpg"
import profile4 from "../images/thor.jpg"
import profile5 from "../images/banner.jpg"
import profile6 from "../images/loki.jpg"


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: "mnvdots",
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      appendDots: dots => (
        <div
          style={{
            padding: "10px",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      responsive: [
        {
          breakpoint: 1550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]
    };
    return (
        <Slider {...settings}>
          <div className={participantesStyles.slidecard}>
              <img src={profile1} alt="alt text"/>
              <div>
                <h2 className={participantesStyles.subtitulo}>Fulano de Tal <span></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante arcu, ullamcorper quis viverra non, tincidunt et justo. Pellentesque sodales elementum sem sed convallis. Sed tristique non metus sed congue. In semper, enim sit amet molestie euismod, nunc diam sagittis augue, quis vestibulum felis neque eu metus.</p>
              </div>
          </div>
          <div className={participantesStyles.slidecard}>
              <img src={profile2} alt="alt text"/>
              <div>
                <h2 className={participantesStyles.subtitulo}>Fulano de Tal <span></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante arcu, ullamcorper quis viverra non, tincidunt et justo. Pellentesque sodales elementum sem sed convallis. Sed tristique non metus sed congue. In semper, enim sit amet molestie euismod, nunc diam sagittis augue, quis vestibulum felis neque eu metus.</p>
              </div>
          </div>
          <div className={participantesStyles.slidecard}>
              <img src={profile3} alt="alt text"/>
              <div>
                <h2 className={participantesStyles.subtitulo}>Fulano de Tal <span></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante arcu, ullamcorper quis viverra non, tincidunt et justo. Pellentesque sodales elementum sem sed convallis. Sed tristique non metus sed congue. In semper, enim sit amet molestie euismod, nunc diam sagittis augue, quis vestibulum felis neque eu metus.</p>
              </div>
          </div>
          <div className={participantesStyles.slidecard}>
              <img src={profile4} alt="alt text"/>
              <div>
                <h2 className={participantesStyles.subtitulo}>Fulano de Tal <span></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante arcu, ullamcorper quis viverra non, tincidunt et justo. Pellentesque sodales elementum sem sed convallis. Sed tristique non metus sed congue. In semper, enim sit amet molestie euismod, nunc diam sagittis augue, quis vestibulum felis neque eu metus.</p>
              </div>
          </div>
          <div className={participantesStyles.slidecard}>
              <img src={profile5} alt="alt text"/>
              <div>
                <h2 className={participantesStyles.subtitulo}>Fulano de Tal <span></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante arcu, ullamcorper quis viverra non, tincidunt et justo. Pellentesque sodales elementum sem sed convallis. Sed tristique non metus sed congue. In semper, enim sit amet molestie euismod, nunc diam sagittis augue, quis vestibulum felis neque eu metus.</p>
              </div>
          </div>
          <div className={participantesStyles.slidecard}>
              <img src={profile6} alt="alt text"/>
              <div>
                <h2 className={participantesStyles.subtitulo}>Fulano de Tal <span></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante arcu, ullamcorper quis viverra non, tincidunt et justo. Pellentesque sodales elementum sem sed convallis. Sed tristique non metus sed congue. In semper, enim sit amet molestie euismod, nunc diam sagittis augue, quis vestibulum felis neque eu metus.</p>
              </div>
          </div>
        </Slider>
    );
  }
}