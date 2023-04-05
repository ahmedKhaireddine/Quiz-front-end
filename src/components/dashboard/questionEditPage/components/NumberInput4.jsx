import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useField } from "formik";
import { useColorModeValue } from "@chakra-ui/react";

const NumberInputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const bg = useColorModeValue("#f1f1f1", "#171923");
  const borderColor = useColorModeValue("#1f939b", "#45DDE7");
  const focusBorderColor = useColorModeValue("#02818a", "9ceff5");
  const hoverBorderColor = useColorModeValue("#02818a", "#9ceff5");
  const placeholderColor = useColorModeValue("gray.700", "gray.300");
  const placeholderOpacity = useColorModeValue(0.8, 0.6);

  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel>{label}</FormLabel>
      <NumberInput
        {...field}
        {...props}
        // bg={bg}
        // border="1px solid"
        // borderColor={borderColor}
        // boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        // focusBorderColor={focusBorderColor}
        // _hover={{ borderColor: hoverBorderColor }}
        // _placeholder={{ opacity: placeholderOpacity, color: placeholderColor }}
        // minHeight={10}
      >
        <NumberInputStepper>
          <NumberIncrementStepper color="white" backgroundColor="#1f939b" />
          <NumberDecrementStepper color="white" backgroundColor="#1f939b" />
        </NumberInputStepper>
      </NumberInput>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default NumberInputField;
