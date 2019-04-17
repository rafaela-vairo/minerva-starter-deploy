import React from "react"
import videosStyles from "../styles/videos.module.scss"

export default ({ children }) => (
  <div className={videosStyles.videos} id='videos'>
    <div className={videosStyles.container}>
    <iframe title="playlist" className={videosStyles.ytplayer} id="ytplayer" type="text/html" width="1280" height="720" src="https://www.youtube.com/embed/?listType=playlist&list=PL52Hf_cBSjG4_0kdtopN5shCedJHS3jjZ&enablejsapi=1&hl=pt-br&loop=1&modestbranding=1&color=white" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
)