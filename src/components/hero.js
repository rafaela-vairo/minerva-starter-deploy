import React from "react"
import heroStyles from "../styles/hero.module.scss"

export default ({ children }) => (
  <div className={heroStyles.hero}>{children}</div>
)