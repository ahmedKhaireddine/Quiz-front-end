import React from "react";
import {
  FormControl,
  Input,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const SearchInputField = ({ ...props }) => {

  const bg = useColorModeValue("#f1f1f1", "#171923");
  const borderColor = useColorModeValue("#1f939b", "#45DDE7");
  const focusBorderColor = useColorModeValue("#02818a", "9ceff5");
  const hoverBorderColor = useColorModeValue("#02818a", "#9ceff5");
  const placeholderColor = useColorModeValue("gray.700", "gray.300");
  const placeholderOpacity = useColorModeValue(0.8, 0.6);

  return (
    <FormControl style={{width: "100%"}}>
      <Input
        {...props}
        bg={bg}
        border="1px solid"
        borderColor={borderColor}
        height="40px"
        boxShadow="rgb(0, 0, 0, 30%) 0px 2px 8px 0px"
        focusBorderColor={focusBorderColor}
        _hover={{ borderColor: hoverBorderColor }}
        _placeholder={{ opacity: placeholderOpacity, color: placeholderColor }}
      />
    </FormControl>
  );
};

export default SearchInputField;
