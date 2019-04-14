import React from "react"
import footerStyles from "../styles/footer.module.scss"

export default ({ children }) => (
  <div className={footerStyles.footer}>{children}</div>
)