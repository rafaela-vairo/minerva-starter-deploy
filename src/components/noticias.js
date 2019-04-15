import React from "react"
import noticiasStyles from "../styles/noticias.module.scss"

export default ({ children }) => (
  <div className={noticiasStyles.noticias}>{children}</div>
)