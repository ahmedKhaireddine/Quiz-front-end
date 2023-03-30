import React from 'react'

import { Box, Title } from "../../../styles/dashboard/layouts/HeaderStyled"

const Header = ({title, description}) => {
  return (
    <Box>
        <Title>
            {title}
        </Title>
        <p>{description}</p>
    </Box>
  )
}

export default Header