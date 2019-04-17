import React from "react"
import contatoStyles from "../styles/contato.module.scss"

export default ({ children }) => (
  <div className={contatoStyles.contato} id='contato'>
    <div className={contatoStyles.container}>
      {children}
    </div>
  </div>
)