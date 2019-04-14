import React from "react"
import gridStyles from "../styles/grid.module.scss"

export default ({ children }) => (
  <div className={gridStyles.grid}>{children}</div>
)