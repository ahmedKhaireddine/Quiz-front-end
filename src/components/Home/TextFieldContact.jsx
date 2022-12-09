import React from "react"
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { useField } from "formik"

const TextFieldContact = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel>{label}</FormLabel>
                <Input
                    {...field}
                    {...props}
                    boxShadow="0px 5px 5px rgba(0, 0, 0, 0.25)"
                    color="black"
                    _placeholder={{ fontSize: ".8em" }}
                />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    )
}

export default TextFieldContact