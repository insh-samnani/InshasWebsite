import React from 'react'

export default function Lang(props) {
  return (
    <tr>
        <th scope="row">{props.sno}</th>
        <td>{props.name}</td>
        <td>{props.level}</td>
    </tr>
  )
}
