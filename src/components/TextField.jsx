import React from "react"
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { Field, useField } from "formik"

const TextField = ({ label, colorMode, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel color="white">{label}</FormLabel>
            {colorMode === "dark" ? (
            <Field
                as={Input}
                {...field}
                {...props}
                placeholder={{ color:"inherit" }}
                // color="#45DDE7"
            />
            ) : ( 
            <Field
                as={Input}
                {...field}
                {...props}
                _placeholder={{ color:"#242233" }}
                borderColor={{ color:"#242233" }}
                // color="#242233"
            />
            )}
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    )
}

export default TextField