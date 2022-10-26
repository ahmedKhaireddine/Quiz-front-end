import React from "react"

import TextFieldWithIcon from "./TextFieldWithIcon"

const FieldsList = ({ data }) => {
  const fieldsListJSX = data.map((element, index) => {
    const { autoFocus, icon, name, placeholder, type } = element

    return <TextFieldWithIcon
      autoFocus={autoFocus}
      icon={icon}
      key={index}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  })

  return <>{fieldsListJSX}</>
}

FieldsList.defaultProps = {
  data: []
}

export default FieldsList