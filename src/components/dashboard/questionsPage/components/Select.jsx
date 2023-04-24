import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useField } from "formik";
import { useColorModeValue } from "@chakra-ui/react";

const SelectField = ({ label, ...props }) => {
  // const [field, meta] = useField(props);

  const bg = useColorModeValue("#f1f1f1", "#171923");
  const borderColor = useColorModeValue("#1f939b", "#45DDE7");
  const focusBorderColor = useColorModeValue("#02818a", "9ceff5");
  const hoverBorderColor = useColorModeValue("#02818a", "#9ceff5");
  const placeholderColor = useColorModeValue("gray.700", "gray.300");
  const placeholderOpacity = useColorModeValue(0.8, 0.6);

  return (
    <FormControl>
      {/* <FormLabel>{label}</FormLabel> */}
      <Select
        name="topic"
        {...props}
        bg={bg}
        border="1px solid"
        borderColor={borderColor}
        focusBorderColor={focusBorderColor}
        _hover={{ borderColor: hoverBorderColor }}
        boxShadow="rgb(0, 0, 0, 30%) 0px 2px 8px 0px"

        _placeholder={{ opacity: placeholderOpacity, color: placeholderColor }}
      ></Select>
    </FormControl>
  );
};

export default SelectField;