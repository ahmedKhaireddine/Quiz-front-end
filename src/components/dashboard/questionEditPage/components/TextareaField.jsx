import React from "react"
import { FormControl, FormErrorMessage, FormLabel, Textarea } from "@chakra-ui/react"
import { useField } from "formik"
import { useColorModeValue } from "@chakra-ui/react"

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    const bg = useColorModeValue("#f1f1f1", "#171923")
    const borderColor = useColorModeValue("#1f939b", "#45DDE7")
    const focusBorderColor = useColorModeValue("#02818a", "9ceff5")
    const hoverBorderColor = useColorModeValue("#02818a", "#9ceff5")
    const placeholderColor = useColorModeValue('gray.700', 'gray.300')
    const placeholderOpacity = useColorModeValue(0.8, 0.6)

    return (
        <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel>{label}</FormLabel>
                <Textarea
                    {...field}
                    {...props}
                    bg={bg}
                    border="1px solid"
                    borderColor={borderColor}
                    height={4}
                    boxShadow="rgb(0, 0, 0, 30%) 0px 2px 8px 0px"
                    focusBorderColor={focusBorderColor}
                    _hover={{ borderColor: hoverBorderColor }}
                    _placeholder={{ opacity: placeholderOpacity, color: placeholderColor }}
                    minHeight={65}
                    marginBottom="25px"
                    // minLength={10}
                />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    )
}

export default TextField