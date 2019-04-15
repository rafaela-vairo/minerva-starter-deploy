import React from "react"
import videosStyles from "../styles/videos.module.scss"

export default ({ children }) => (
  <div className={videosStyles.videos}>{children}</div>
)