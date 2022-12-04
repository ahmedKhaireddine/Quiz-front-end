import React from "react"
import { FormControl, FormErrorMessage, FormLabel, Textarea } from "@chakra-ui/react"
import { useField } from "formik"

const TextareaFieldContact = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel>{label}</FormLabel>
                <Textarea
                    {...field}
                    {...props}
                    boxShadow="0px 5px 5px rgba(0, 0, 0, 0.25)"
                />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    )
}

export default TextareaFieldContact