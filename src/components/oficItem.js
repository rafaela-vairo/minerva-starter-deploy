import React from "react"
import oficItemStyles from "../styles/oficItem.module.scss"

const progItem = props => (
    <p>
        <h2 className={oficItemStyles.titulo}>{props.titulo}</h2>
        <h3 className={oficItemStyles.por}>Ministrada por: {props.por}</h3>
        <h4 className={oficItemStyles.horario}>Horário: {props.horario}</h4>  
        <address className={oficItemStyles.local}>Local: {props.local}</address>
        <p>{props.texto}</p>
        <a className={oficItemStyles.link} href={props.link}>Inscreva-se aqui</a>
    </p>
)

export default progItem