import React from "react"
import navStyles from "../styles/nav.module.scss"

export default ({ children }) => (
  <header className={navStyles.nav}>{children}</header>
)