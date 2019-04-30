import React from "react"
import oficinasStyles from "../styles/oficinas.module.scss"

export default ({ children }) => (
  <div className={oficinasStyles.programacao} id='programacao'>
    <div className={oficinasStyles.texto}>
      <h1 className={oficinasStyles.titulo}>Oficinas <span></span></h1>
      {children}
    </div>
  </div>
)