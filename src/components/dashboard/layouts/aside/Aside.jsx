import React from "react";

import { Box } from "../../../../styles/dashboard/layouts/AsideStyled";
import AsideSubtitle from "./AsideSubtitle";

const Aside = ({ children, padding, subtitle, subtitlePadding }) => {
  return (
    <Box padding={padding}>
      <AsideSubtitle subtitle={subtitle} padding={subtitlePadding} />
      {children}
    </Box>
  );
};

export default Aside;
