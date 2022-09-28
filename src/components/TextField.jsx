import React from "react"
import { FormControl, FormErrorMessage, FormLabel, Input, useColorMode } from "@chakra-ui/react"
import { Field, useField } from "formik"

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    const { colorMode } = useColorMode("light", "dark")
    // const borderColor = useColorModeValue("#242233", "")
    // const placeholder = useColorModeValue("inherit", "")
    // const hover = useColorModeValue("#276eca", "")

    return (
        <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel>{label}</FormLabel>
            {colorMode === "light" ? (
            <Field
                as={Input}
                {...field}
                {...props}
                bg="#bcedf0"
                borderColor="#45DDE7"
                border="2px solid"
                focusBorderColor="9ceff5"
                _hover={{ borderColor: "#9ceff5"}}
                _placeholder={{ opacity: 0.8, color: 'gray.700' }}
            />
                ) : ( 
            <Field
                as={Input}
                {...field}
                {...props}
                bg="#171923"
                borderColor="#45DDE7"
                border="2px solid"
                focusBorderColor="9ceff5"
                _hover={{ borderColor: "#9ceff5"}}
                _placeholder={{ opacity: 0.6, color: 'gray.300' }}
            />
            )}
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    )
}

export default TextField