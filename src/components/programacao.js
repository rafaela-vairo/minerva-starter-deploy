import React from "react"
import programacaoStyles from "../styles/programacao.module.scss"


export default ({ children }) => (
  <div className={programacaoStyles.programacao} id='programacao'>
    <div className={programacaoStyles.texto}>
      <h1 className={programacaoStyles.titulo}>Programação <span></span></h1>
      {children}
    </div>
  </div>
)