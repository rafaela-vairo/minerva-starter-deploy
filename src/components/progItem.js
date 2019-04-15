import React from "react"
import progItemStyles from "../styles/progItem.module.scss"

const progItem = props => (
    <tr className={progItemStyles.row}>
        <th scope="row" className={progItemStyles.cellhead}>
            {props.horario} <br></br>
            <span style={{fontWeight: 500,}}>{props.local}</span>
        </th>
        <td className={progItemStyles.cell}>
            {props.titulo} <br></br>
            <strong>{props.texto}</strong>
        </td>
    </tr>
)

export default progItem