import React from "react"
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react"
import { Field, useField } from "formik"
import { useColorModeValue } from "@chakra-ui/react"

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    const bg = useColorModeValue("#f1f1f1", "#171923")
    const borderColor = useColorModeValue("#1f939b", "#45DDE7")
    const focusBorderColor = useColorModeValue("#02818a", "9ceff5")
    const hoverBorderColor = useColorModeValue("#02818a", "#9ceff5")
    const placeholderOpacity = useColorModeValue(0.8, 0.6)
    const placeholderColor = useColorModeValue('gray.700', 'gray.300')

    return (
        <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel>{label}</FormLabel>
            <Field
                as={Input}
                {...field}
                {...props}
                bg={bg}
                borderColor={borderColor}
                border="2px solid"
                focusBorderColor={focusBorderColor}
                _hover={{ borderColor: hoverBorderColor }}
                _placeholder={{ opacity: placeholderOpacity, color: placeholderColor }}
            />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    )
}

export default TextField