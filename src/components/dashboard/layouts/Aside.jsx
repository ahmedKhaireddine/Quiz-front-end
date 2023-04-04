import React from "react";

import { Box } from "../../../styles/dashboard/layouts/AsideStyled";

const Aside = ({ children, padding }) => {
  return (
    <Box
      padding={padding}
    >
      {children}
    </Box>
  );
};

export default Aside;
