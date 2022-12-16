import React from "react"
import { useField } from "formik"

import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"

const TextFieldContact = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel>{label}</FormLabel>
                <Input
                    {...field}
                    {...props}
                    boxShadow="0px 5px 5px rgba(31, 147, 155, 0.25)"
                    color="black"
                    height="45px"
                    _placeholder={{ fontSize: ".8em" }}
                />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    )
}

export default TextFieldContact