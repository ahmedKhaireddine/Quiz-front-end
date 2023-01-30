import React from "react"
import { FormControl, FormErrorMessage, FormLabel, Textarea } from "@chakra-ui/react"
import { Field, useField } from "formik"
import { useColorModeValue } from "@chakra-ui/react"

const TextFieldArea = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    const bg = useColorModeValue("#f1f1f1", "#171923")
    const borderColor = useColorModeValue("#1f939b", "#45DDE7")
    const color = useColorModeValue ("black", "white")
    const focusBorderColor = useColorModeValue("#02818a", "9ceff5")
    const hoverBorderColor = useColorModeValue("#02818a", "#9ceff5")
    const placeholderColor = useColorModeValue('gray.700', 'gray.300')
    const placeholderOpacity = useColorModeValue(0.8, 0.6)

    return (
        <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel color={color}>{label}</FormLabel>
            <Textarea
                {...field}
                {...props}
                bg={bg}
                border="2px solid"
                borderColor={borderColor}
                color={color}
                focusBorderColor={focusBorderColor}
                _hover={{ borderColor: hoverBorderColor }}
                _placeholder={{ opacity: placeholderOpacity, color: placeholderColor }}
            />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    )
}

export default TextFieldArea