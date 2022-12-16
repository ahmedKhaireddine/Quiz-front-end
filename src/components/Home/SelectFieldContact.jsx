import React from "react"
import { useField } from "formik"

import { FormControl, FormErrorMessage, FormLabel, Select } from "@chakra-ui/react"

const TextFieldContact = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel>{label}</FormLabel>
                <Select
                    {...field}
                    {...props}
                    boxShadow="0px 5px 5px rgba(31, 147, 155, 0.25)"
                    color="#777"
                    height="45px"
                    _placeholder={{ fontSize: ".8em" }}
                />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    )
}

export default TextFieldContact