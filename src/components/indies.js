import React from "react"
import indiesStyles from "../styles/indies.module.scss"

export default ({ children }) => (
  <div className={indiesStyles.indies} id='beco'>
    <div className={indiesStyles.texto}>
      <h1 className={indiesStyles.titulo}>Beco dos Artistas <span></span></h1>
      <div className={indiesStyles.slides}>
        {children}
      </div>
    </div>
  </div>
)