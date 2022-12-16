import React from "react"
import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useField } from "formik"

const TextFieldWithIcon = (props) => {
  const [field, meta] = useField(props)
  const { autoFocus, label, name, placeholder, type } = props

  return (
      <FormControl
        height={meta.error && meta.touched ? "auto" : "60px"}
        isInvalid={meta.error && meta.touched}
        margin="0 auto"
        width="60%"
      >
        <FormLabel>{label}</FormLabel>
        <InputGroup
          borderRadius="5px"
          boxShadow="rgba(31, 147, 155, .3) 0px 2px 8px 0px"
        >
          <InputLeftElement
            children={props.icon}
            color="rgba(31, 147, 155, .5)"
            fontSize='1.2em'
            height="45px"
            pointerEvents='none'
            width="50px"
          />
          <Input
            {...field}
            autoFocus={autoFocus}
            color="black"
            focusBorderColor="none"
            height="45px"
            name={name}
            _placeholder={{ fontSize: ".8em" }}
            paddingLeft="45px"
            placeholder={placeholder}
            type={type}
          />
        </InputGroup>
        <FormErrorMessage fontSize=".7em">{meta.error}</FormErrorMessage>
      </FormControl>
  )
}

export default TextFieldWithIcon