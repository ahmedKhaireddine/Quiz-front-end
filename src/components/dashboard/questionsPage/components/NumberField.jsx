import React from "react";
import { Field, useField } from "formik";
import {
  FormControl,
  FormErrorMessage,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

const NumberField = ({ label, ...props }) => {
  const [field, meta] = useField(props);


  const bg = useColorModeValue("#f1f1f1", "#171923");
  const borderColor = useColorModeValue("#1f939b", "#45DDE7");
  const focusBorderColor = useColorModeValue("#02818a", "9ceff5");
  const hoverBorderColor = useColorModeValue("#02818a", "#9ceff5");
  const placeholderColor = useColorModeValue("gray.700", "gray.300");
  const placeholderOpacity = useColorModeValue(0.8, 0.6);

  return (
    <Field name="duration">
      {({ field, form }) => (
        <FormControl>
          <NumberInput
            {...field}
            {...props}
            onChange={(val) => form.setFieldValue(field.name, val)}
            min={1} 
            max={30}
          >
            <NumberInputField
              bg={bg}
              border="1px solid"
              borderColor={borderColor}
              boxShadow="rgb(0, 0, 0, 30%) 0px 2px 8px 0px"
              focusBorderColor={focusBorderColor}
              _hover={{ borderColor: hoverBorderColor }}
              _placeholder={{
                opacity: placeholderOpacity,
                color: placeholderColor,
              }}

            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default NumberField;
