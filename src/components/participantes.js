import React from "react"
import participantesStyles from "../styles/participantes.module.scss"

export default ({ children }) => (
  <div className={participantesStyles.participantes}>{children}</div>
)