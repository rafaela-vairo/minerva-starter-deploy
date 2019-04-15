import React from "react"
import tableStyles from "../styles/table.module.scss"

export default ({ children }) => (
  <table className={tableStyles.table}>
    <tbody className={tableStyles.tbody}>
      {children}
    </tbody>
  </table>
)