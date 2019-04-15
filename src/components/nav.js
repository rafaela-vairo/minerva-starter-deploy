import React from "react"
import navStyles from "../styles/nav.module.scss"

export default ({ children }) => (
  <div style={{
    gridColumn: '1 / span 5',
    position: 'sticky',
    top: '0',
    }}>
    <header className={navStyles.nav}>{children}</header>
  </div>
)