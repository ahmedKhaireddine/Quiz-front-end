import React from 'react'

import { Box } from '../../../styles/dashboard/layouts/CentralContainerStyled'

const CentralContainer = ({ 
  children, 
  flexDirection, 
  height, 
  width, 
  justifyContent 
}) => {
  return (
    <Box
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      height={height}
      width={width}
    >
        {children}
    </Box>
  )
}

export default CentralContainer