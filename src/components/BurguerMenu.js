import React from "react";
import '../styles/navburguer.scss'

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}><a href="#home">Home</a></li>
      <li onClick={close}><a href="#sobre">Sobre</a></li>
      <li onClick={close}><a href="#programacao">Programação</a></li>
      <li onClick={close}><a href="#participantes">Participantes</a></li>
      <li onClick={close}><a href="#oficinas">Oficinas</a></li>
      {/* <li onClick={close}><a href="#noticias">Notícias</a></li> */}
      <li onClick={close}><a href="#videos">Vídeos</a></li>
      {/* <li onClick={close}><a href="#blog">Blog</a></li> */}
      <li onClick={close}><a href="#contato">Contato</a></li>
    </ul>
  </div>
);