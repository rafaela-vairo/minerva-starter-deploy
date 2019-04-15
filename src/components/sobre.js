import React from "react"
import sobreStyles from "../styles/sobre.module.scss"

export default ({ children }) => (
  <div className={sobreStyles.sobre} id='sobre'><div className={sobreStyles.texto}>{children}</div></div>
)