import React, { Component } from "react";
import Slider from "react-slick";
import participantesStyles from "../styles/participantes.module.scss"
import "../styles/sliderstyles.scss"

import profileAida from "../images/participantes/aida-queiroz.jpeg"
import profile2 from "../images/participantes/ana-lucia-merege.jpg"
import profile3 from "../images/participantes/andre-dahmer.jpg"
import profile4 from "../images/participantes/aristides-correa-dutra.jpg"
import profile6 from "../images/participantes/arthur-vecchi.jpg"

import profile7 from "../images/participantes/ary-moraes-2.jpg"
import profile8 from "../images/participantes/cida-calu.jpg"
import profile9 from "../images/participantes/combo-studio.jpg"
import profile10 from "../images/participantes/gika.jpg"
import profile11 from "../images/participantes/gustavo-borges.jpg"
import profile12 from "../images/participantes/jaguar-edit.jpg"

import profile13 from "../images/participantes/julio-monteiro-de-oliveira-edit.jpg"
import profile14 from "../images/participantes/mara-burkart-edit.jpg"
import profile15 from "../images/participantes/matheus-ribeiro.jpg"



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
          breakpoint: 1450,
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
            <img src={profileAida} alt="alt text"/>
            <div>
              <h2 className={participantesStyles.subtitulo}>Aída Queiroz <span></span></h2>
              <p>Aída Queiroz é diretora de animação formada pelo convênio National Film Board of Canada/Embrafilme, que resultou em Noturno, seu primeiro curta-metragem. Formada em Belas Artes pela Universidade Federal de Minas Gerais (UFMG), é sócia da produtora Campo 4 Produções e faz parte da direção do Anima Mundi.</p>
            </div>
          </div>
          <div className={participantesStyles.slidecard}>
            <img src={profile2} alt="alt text"/>
            <div>
              <h2 className={participantesStyles.subtitulo}>Ana Lúcia Merege <span></span></h2>
              <p>Mestre em Ciência da Informação pela Universidade Federal do Rio de Janeiro (UFRJ) e formada em Biblioteconomia pela Universidade Federal do Estado do Rio de Janeiro (Unirio), Ana Lúcia Merege é curadora de manuscritos da Biblioteca Nacional, além de ser uma premiada autora e organizadora de literatura fantástica.</p>
            </div>
          </div>
          <div className={participantesStyles.slidecard}>
            <img src={profile3} alt="alt text"/>
            <div>
              <h2 className={participantesStyles.subtitulo}>André Dahmer <span></span></h2>
              <p>André Dahmer publica quadrinhos nos jornais O Globo e Folha de S.Paulo. Autor da tirinha Os malvados, foi o vencedor de quatro prêmios HQMix, o oscar dos quadrinhos Brasileiros.</p>
            </div>
          </div>
          <div className={participantesStyles.slidecard}>
            <img src={profile4} alt="alt text"/>
            <div>
              <h2 className={participantesStyles.subtitulo}>Aristides Correa Dutra <span></span></h2>
              <p>Mestre em Comunicação pela Universidade Federal do Rio de Janeiro (UFRJ) e artista plástico pela Universidade Federal do Espírito Santo (UFES), Aristides Correa Dutra é professor na pós-graduação em Produção de Moda da Universidade Candido Mendes e de Design de Moda da Universidade Veiga de Almeida.</p>
            </div>
          </div>
          <div className={participantesStyles.slidecard}>
            <img src={profile6} alt="alt text"/>
            <div>
              <h2 className={participantesStyles.subtitulo}>Arthur Vecchi <span></span></h2>
              <p>Artur Vecchi é economista, mestre em Administração de Empresas pela Universidade Federal do Rio Grande do Sul (UFRGS) e especialista em Marketing pela Escola Superior em Propaganda e Marketing (ESPM). Em 2014 criou a Avec Editora, onde atua como editor e publisher de livros.</p>
            </div>
          </div>
          <div className={participantesStyles.slidecard}>
            <img src={profile7} alt="alt text"/>
            <div>
              <h2 className={participantesStyles.subtitulo}>Ary Moraes <span></span></h2>
              <p>Doutor e mestre em Design pela Pontifícia Universidade Católica (PUC-Rio), formado em Desenho Industrial pela Universidade Federal do Rio de Janeiro (UFRJ) e Jornalismo pela Universidade Estadual do Rio de Janeiro (UERJ), Ary Moraes atualmente é professor do Departamento de Análise e Representação da Forma da EBA/UFRJ.</p>
            </div>
          </div>
          <div className={participantesStyles.slidecard}>
            <img src={profile8} alt="alt text"/>
            <div>
              <h2 className={participantesStyles.subtitulo}>Cida Calu <span></span></h2>
              <p>Formada em Desenho Industrial pela Faculdade da Cidade e Publicidade pela Escola Superior de Propaganda e Marketing (ESPM), Cida Calu é ilustradora e infografista, com passagem em várias empresas, como os jornais O Globo e O Dia, a revista Piauí, as editoras Objetiva e Ediouro, além do site Globo Esporte.</p>
            </div>
          </div>
          <div className={participantesStyles.slidecard}>
            <img src={profile9} alt="alt text"/>
            <div>
              <h2 className={participantesStyles.subtitulo}>Combo Estúdio <span></span></h2>
              <p>O Combo Estúdio é um estúdio de animação que iniciou suas atividades no começo de 2015. Produzindo animações 2D para todas as mídias, o estúdio é responsável pela produção da websérie O surreal mundo de Any Malu.</p>
            </div>
          </div>
          <div className={participantesStyles.slidecard}>
            <img src={profile10} alt="alt text"/>
            <div>
              <h2 className={participantesStyles.subtitulo}>Gika <span></span></h2>
              <p>Mestre em Educação (UFRRJ), Gika cursou a Escola de Belas Artes (UFRJ) e é formada em Desenho Industrial pela Universidade da Cidade, com complementação pedagógica na Faculdade de Educação (UERJ). Tendo atuado em variadas produções de animações, foi assistente de direção geral da versão animada do Sítio do Pica-pau Amarelo.</p>
            </div>
          </div>
          <div className={participantesStyles.slidecard}>
            <img src={profile11} alt="alt text"/>
            <div>
              <h2 className={participantesStyles.subtitulo}>Gustavo Borges <span></span></h2>
              <p>Autor das webcomics A entediante vida de MorteCrens e Edgar, além das graphic novels Pétalas(com Cris Peter) e Escolhas (com Felipe Cagno). Vencedor do Troféu HQ Mix na categoria "melhor publicação independente de autor". Em outubro de 2018, publicou pelo selo Graphic MSP a HQ Cebolinha: Recuperação.</p>
            </div>
          </div>
          <div className={participantesStyles.slidecard}>
            <img src={profile12} alt="alt text"/>
            <div>
              <h2 className={participantesStyles.subtitulo}>Jaguar <span></span></h2>
              <p>Jornalista, ilustrador, cartunista, cronista e um dos fundadores do icônico jornal O Pasquim, ao lado de Millôr Fernandes, Henfil, Paulo Francis, Ziraldo, entre outros, Jaguar marca em seus mais de sessenta anos de carreira ser um dos mais importantes nomes do cartum político brasileiro.</p>
            </div>
          </div>
          <div className={participantesStyles.slidecard}>
            <img src={profile13} alt="alt text"/>
            <div>
              <h2 className={participantesStyles.subtitulo}>Julio Monteiro de Oliveira <span></span></h2>
              <p>Júlio Oliveira é editor de quadrinhos na Mythos desde 2014, e trabalhou antes como tradutor de livros de áreas variadas. Escreve artigos sobre temas diversos, como por exemplo a cultura cyberpunk. Idealizador do selo Gold Edition, de publicações franco-belgas, capitaneou títulos que iam da aventura à ficção histórica, com boas doses de fantasia e ficção científica.</p>
            </div>
          </div>
          <div className={participantesStyles.slidecard}>
            <img src={profile14} alt="alt text"/>
            <div>
              <h2 className={participantesStyles.subtitulo}>Mara Burkart <span></span></h2>
              <p>Doutora em Ciências Sociais pela Universidade de Buenos Aires (UBA), mestre em Sociologia da Cultura pelo Instituto de Estudos Sociais Superiores (Idaes-Unsam) e formada em Sociologia pela UBA, Mara Burkart é membro do conselho editorial da e-l@tina, revista eletrônica do Grupo de Estudos de Sociologia Histórica da América Latina (Geshal).</p>
            </div>
          </div>
          <div className={participantesStyles.slidecard}>
            <img src={profile15} alt="alt text"/>
            <div>
              <h2 className={participantesStyles.subtitulo}>Matheus Ribeiro <span></span></h2>
              <p>Formado em Ciência Política pela Universidade Federal do Rio de janeiro (UFRJ), Matheus Ribs é um jovem cartunista que vem ganhando destaque pelas redes sociais com seus cartuns reflexivos e críticos sobre os valores da nossa sociedade.</p>
            </div>
          </div>
        </Slider>
    );
  }
}