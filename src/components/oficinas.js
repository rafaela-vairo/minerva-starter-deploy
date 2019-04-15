import React from "react"
import oficinasStyles from "../styles/oficinas.module.scss"

export default ({ children }) => (
  <div className={oficinasStyles.oficinas}>{children}</div>
)