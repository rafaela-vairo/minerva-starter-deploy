import React, { Component } from "react";
import PropTypes from 'prop-types';
import oficinasStyles from "../styles/oficinas.module.scss"
import oficItemStyles from "../styles/oficItem.module.scss"
import Slider from "react-slick";
import "../styles/sliderstylesofic.scss"

export default ({ children }) => (
  <div className={oficinasStyles.oficinas} id='oficinas'>
    <div className={oficinasStyles.texto}>
      <h1 className={oficinasStyles.titulo}>Oficinas <span></span></h1>
      <SimpleSlider />
    </div>
  </div>
)

export class OficItem extends Component {
  render () {
    const props = this.props
    return (
      <div className={oficItemStyles.container}>
        <div>
            <h2 className={oficItemStyles.subtitulo}>{props.subtitulo} <span></span></h2>
            <p className={oficItemStyles.por}><i class="fas fa-user-circle"></i> {props.por}</p>
            <p className={oficItemStyles.info}>
              <date className={oficItemStyles.data}><i class="fas fa-calendar-alt"></i> {props.data}</date> 
              <time className={oficItemStyles.horario}><i class="fas fa-clock"></i> {props.horario}</time> 
              <address className={oficItemStyles.local}> <i class="fas fa-map-marker-alt"></i> {props.local}</address>
            </p>
            <p className={oficItemStyles.texto}>{props.texto}</p>
            <a className={oficItemStyles.link} href={props.link}>Em breve link para inscrição</a>
        </div>
      </div>
    )
  }
}

OficItem.defaultProps = {
  link:`/404`,
}

OficItem.propTypes = {
  subtitulo: PropTypes.node.isRequired,
  por: PropTypes.node.isRequired,
  data: PropTypes.node.isRequired,
  horario: PropTypes.node.isRequired,
  local: PropTypes.node.isRequired,
  texto: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
};

export class SimpleSlider extends Component {
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
          }
        }
      ]
    };
    return (
        <Slider {...settings}>
          <div className={oficItemStyles.slidecard}>
            <OficItem
                subtitulo='A importância do silêncio nos quadrinhos'
                por='Gustavo Borges'
                data='07 de maio'
                horario='13h - 15h'
                local='ECO / UFRJ'
                texto='O autor indicado ao Eisner propõe um exercício de narrativa se utilizando do silêncio nos quadrinhos para contar histórias.'
                // link=''
                />
          </div>
          <div className={oficItemStyles.slidecard}>
            <OficItem
                subtitulo='Quadrinhos para educadores'
                por='Mig'
                data='08 de maio'
                horario='13-15h'
                local='ECO / UFRJ'
                texto='A proposta é ajudar educadores a utilizar criativamente histórias em quadrinhos em qualquer atividade pedagógica, em grupo ou atuação solo, por meio de exercícios guiados pelo ilustrador Mig.'
                // link=''
                />
          </div>
          <div className={oficItemStyles.slidecard}>
            <OficItem
                subtitulo='Worldbuilding em Literatura Fantástica'
                por='Luiz Felipe Vasques e Ana Lucia Merege'
                data='09 de maio'
                horario='13h - 15h'
                local='ECO / UFRJ'
                // texto=''
                // link=''
                />
          </div>
          <div className={oficItemStyles.slidecard}>
            <OficItem
                subtitulo='Pintura Digital para HQ'
                por='Pedro Barreto'
                data='11 de maio'
                horario='13h - 15h'
                local='Senai Artes Gráficas'
                texto='O ilustrador e animador Pedro Barreto, docente da Firjan Senai Maracanã que participou da série animada Super Drags, irá abordar um passo a passo sobre a prática da pintura digital, com dicas sobre iluminação, sombras e cores a fim de encantar os leitores de HQs impressas ou digitais.'
                // link=''
                />
          </div>
          <div className={oficItemStyles.slidecard}>
            <OficItem
                subtitulo='Ilustração Vetorial para HQ'
                por='André Flauzino'
                data='11 de maio'
                horario='13:30 - 15:30'
                local='Senai Artes Gráficas'
                texto='A ilustração vetorial tem sido fundamental para a criação de todo bom projeto gráfico de HQs. O designer e ilustrador André Flauzino, docente da Firjan Senai Maracanã, irá abordar o processo de criação vetorial de personagens para HQs. Nessa oficina, o especialista apresentará dicas de construção de personagens, expressões faciais e movimento.'
                // link=''
                />
          </div>
        </Slider>
    );
  }
}

