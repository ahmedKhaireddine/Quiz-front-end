import React from "react";

import {
  Box,
  Subtitle,
  Title,
} from "../../../styles/dashboard/layouts/HeaderStyled";

const Header = ({ title, description }) => {
  return (
    <Box>
      <Title>{title}</Title>
      <Subtitle>{description}</Subtitle>
    </Box>
  );
};

export default Header;
