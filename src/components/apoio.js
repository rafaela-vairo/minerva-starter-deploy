import React from "react"
import apoioStyles from "../styles/apoio.module.scss"

import logo1 from "../images/logos/Logo_Eco_UFRJ_color.png"
import logo2 from "../images/logos/ppgtlcom.png"
import logo3 from "../images/logos/uva.svg"

export default ({ children }) => (
  <div className={apoioStyles.apoio} id='realiza'>
    <div className={apoioStyles.container}>
      <h1 className={apoioStyles.titulo}>Realização <span></span></h1>
      <img src={logo1} alt="Logo ECO"/>
      <img src={logo2} alt="Logo PPGTLCOM"/>
      <img src={logo3} alt="Logo UVA"/>
    </div>
  </div>
)