import React from "react"
import footerStyles from "../styles/footer.module.scss"

import logoUFRJ100anos from "../images/logos/ufrj-100-anos-branco-horizontal.svg"
import logoTIC from "../images/logos/tic_branco.png"
import logoCoordCom from "../images/logos/coordcom-monocromia-branco-horizontal-sem-subtitulo.svg"

export default ({ children }) => (
  <div className={footerStyles.footer} id='footer'>
    <div className={footerStyles.container}>
      <div className={footerStyles.logoufrj}>
        <img src={logoUFRJ100anos} alt="Logo UFRJ faz 100 Anos"/>
      </div>
      <div className={footerStyles.logos}>
        <h4 className={footerStyles.subtitulo}>Desenvolvido por <span></span></h4>
        <div className={footerStyles.sublogos}>
          <img src={logoCoordCom} alt="Logo CoordCom" className={footerStyles.logocoordcom}/>
          <img src={logoTIC} alt="Logo TIC" className={footerStyles.logotic}/>
        </div>
      </div>
    </div>
  </div>
)