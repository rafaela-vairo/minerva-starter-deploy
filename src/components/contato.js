import React from "react"
import contatoStyles from "../styles/contato.module.scss"

export default ({ children }) => (
  <div className={contatoStyles.contato}>{children}</div>
)