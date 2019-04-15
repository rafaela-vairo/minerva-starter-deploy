import React from "react"
import localStyles from "../styles/local.module.scss"
import Icon from '@material-ui/core/Icon'

const Local = props => (
  <div className={localStyles.local}>
    <p>
      <Icon style={{fontSize:'1rem', lineHeight: '1.25',}}>place</Icon>
      <strong>{props.local}</strong> {props.rua}
    </p>
  </div>
)

export default Local
