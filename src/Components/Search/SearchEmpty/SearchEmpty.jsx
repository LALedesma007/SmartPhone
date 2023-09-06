import { Box, Typography } from '@mui/material'
import LogoSearch from '../../../../img/LogosPages/LogoSearch.png'
import React from 'react'


const SearchEmpty = () => {
    return (
      <>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <img src={LogoSearch} alt='logo' style={{ width: '10%' }} />
          <Typography variant='h6'>
            No se encontraron resultados
          </Typography>
        </Box>
      </>
    );
  };

export default SearchEmpty