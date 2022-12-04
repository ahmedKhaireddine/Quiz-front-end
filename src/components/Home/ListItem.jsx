import React from 'react'

const ListItem = (props) => {
  return (
    <>
        <div>icone</div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </>
  )
}

export default ListItem