import React, { Component } from "react";
import Slider from "react-slick";
import participantesStyles from "../styles/participantes.module.scss"


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      appendDots: dots => (
        <div
          style={{
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px", fontSize: "2rem" }}> {dots} </ul>
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
              <img src="http://placekitten.com/g/400/200" />
              <div>
                <h2 className={participantesStyles.subtitulo}>Fulano de Tal <span></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante arcu, ullamcorper quis viverra non, tincidunt et justo. Pellentesque sodales elementum sem sed convallis. Sed tristique non metus sed congue. In semper, enim sit amet molestie euismod, nunc diam sagittis augue, quis vestibulum felis neque eu metus.</p>
              </div>
          </div>
          <div className={participantesStyles.slidecard}>
              <img src="http://placekitten.com/g/400/200" />
              <div>
                <h2 className={participantesStyles.subtitulo}>Fulano de Tal <span></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante arcu, ullamcorper quis viverra non, tincidunt et justo. Pellentesque sodales elementum sem sed convallis. Sed tristique non metus sed congue. In semper, enim sit amet molestie euismod, nunc diam sagittis augue, quis vestibulum felis neque eu metus.</p>
              </div>
          </div>
          <div className={participantesStyles.slidecard}>
              <img src="http://placekitten.com/g/400/200" />
              <div>
                <h2 className={participantesStyles.subtitulo}>Fulano de Tal <span></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante arcu, ullamcorper quis viverra non, tincidunt et justo. Pellentesque sodales elementum sem sed convallis. Sed tristique non metus sed congue. In semper, enim sit amet molestie euismod, nunc diam sagittis augue, quis vestibulum felis neque eu metus.</p>
              </div>
          </div>
          <div className={participantesStyles.slidecard}>
              <img src="http://placekitten.com/g/400/200" />
              <div>
                <h2 className={participantesStyles.subtitulo}>Fulano de Tal <span></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante arcu, ullamcorper quis viverra non, tincidunt et justo. Pellentesque sodales elementum sem sed convallis. Sed tristique non metus sed congue. In semper, enim sit amet molestie euismod, nunc diam sagittis augue, quis vestibulum felis neque eu metus.</p>
              </div>
          </div>
          <div className={participantesStyles.slidecard}>
              <img src="http://placekitten.com/g/400/200" />
              <div>
                <h2 className={participantesStyles.subtitulo}>Fulano de Tal <span></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante arcu, ullamcorper quis viverra non, tincidunt et justo. Pellentesque sodales elementum sem sed convallis. Sed tristique non metus sed congue. In semper, enim sit amet molestie euismod, nunc diam sagittis augue, quis vestibulum felis neque eu metus.</p>
              </div>
          </div>
          <div className={participantesStyles.slidecard}>
              <img src="http://placekitten.com/g/400/200" />
              <div>
                <h2 className={participantesStyles.subtitulo}>Fulano de Tal <span></span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante arcu, ullamcorper quis viverra non, tincidunt et justo. Pellentesque sodales elementum sem sed convallis. Sed tristique non metus sed congue. In semper, enim sit amet molestie euismod, nunc diam sagittis augue, quis vestibulum felis neque eu metus.</p>
              </div>
          </div>
        </Slider>
    );
  }
}