import React from "react"
import { useField } from "formik"

import { FormControl, FormErrorMessage, FormLabel, Textarea } from "@chakra-ui/react"

const TextareaFieldContact = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel>{label}</FormLabel>
                <Textarea
                    {...field}
                    {...props}
                    boxShadow="0px 5px 5px rgba(31, 147, 155, 0.25)"
                    color="black"
                    height="120px"
                    _placeholder={{ fontSize: "1em", color: "black" }}                 
                />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    )
}

export default TextareaFieldContact