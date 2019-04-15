import React from "react"
import programacaoStyles from "../styles/programacao.module.scss"

export default ({ children }) => (
  <div className={programacaoStyles.programacao} id='programacao'>
    <div className={programacaoStyles.texto}>
      <h1 className={programacaoStyles.titulo}>Programação <span></span></h1>
      <table className={programacaoStyles.table}>
        <tbody className={programacaoStyles.tbody}>
          {children}
        </tbody>
      </table>
      <div className={programacaoStyles.local}><strong>ECO UFRJ</strong> - Campus da Praia Vermelha / Av. Pasteur, 250 - Urca</div>
    </div>
  </div>
)