import React from "react"
import apoioStyles from "../styles/apoio.module.scss"

import logoPPGTLCOM from "../images/logos/ppgtlcom.png"
import logoCFCH from "../images/logos/cfch_logo_menor.jpg"
import logoSeteXis from "../images/logos/7X.svg"
import logoRiobooks from "../images/logos/LOGOTIPO riobooks .jpg"

import logoUFRJ from "../images/logos/003minerva_transparente_vertical.png"
import logoECO from "../images/logos/Logo_Eco_UFRJ_color.png"
import logoUVA from "../images/logos/uva.svg"



export default ({ children }) => (
  <div className={apoioStyles.apoio} id='realiza'>
    <div className={apoioStyles.container}>
      <h1 className={apoioStyles.tituloa}>Apoio <span></span></h1>
      <img className={apoioStyles.logospacer} src={logoPPGTLCOM} alt="Logo PPGTLCOM"/>
      <img src={logoCFCH} alt="Logo CFCH"/>
      <img src={logoSeteXis} alt="Logo 7x+"/>
      <img src={logoRiobooks} alt="Logo Riobooks"/>
      <h1 className={apoioStyles.titulob}>Realização <span></span></h1>
      <img src={logoUFRJ} alt="Logo UFRJ"/>
      <img src={logoECO} alt="Logo ECO"/>
      <img src={logoUVA} alt="Logo UVA"/>
    </div>
  </div>
)