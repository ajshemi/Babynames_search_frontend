import React from "react"

const ModalTable = (props) => {
    const {name}=props
  return(
    <tr>
      <td>{name.gender}</td>
      <td>{name.ethnicity}</td> 
      <td>{name.rank}</td>
      <td>{name.count}</td>
    </tr>
  )
}

export default ModalTable