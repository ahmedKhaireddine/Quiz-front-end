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
            />
            ) : ( 
            <Field
                as={Input}
                {...field}
                {...props}
                borderColor={{ color:"#242233" }}
                _placeholder={{ color:"inherit" }}
                _hover={{ borderColor: "#276eca" }}
            />
            )}
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    )
}

export default TextField