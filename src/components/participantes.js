import React from "react"
import participantesStyles from "../styles/participantes.module.scss"

export default ({ children }) => (
  <div className={participantesStyles.participantes} id='participantes'>
    <div className={participantesStyles.texto}>
      <h1 className={participantesStyles.titulo}>Participantes <span></span></h1>
      <div className={participantesStyles.slides}>
        {children}
      </div>
    </div>
  </div>
)