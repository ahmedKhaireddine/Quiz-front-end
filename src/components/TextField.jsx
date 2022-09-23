import React from "react"
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { Field, useField } from "formik"

const TextField = ({ label, borderColor, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel color="white">{label}</FormLabel>
            <Field
                errorBorderColor={borderColor}
                as={Input}
                {...field}
                {...props}
            />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    )
}

export default TextField