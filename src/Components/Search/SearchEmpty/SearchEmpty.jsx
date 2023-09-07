import { Box, Typography } from '@mui/material'
import LogoSearch from '../../../../img/LogosPages/LogoSearch.png'
import React from 'react'
import styled from 'styled-components';


const SearchEmpty = () => {
    const Img = styled('img')({
      width: "80",
      height: "15vh",
      objectPosition: 'center',
      margin: '3px'
    })


    return (
      <>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Img src={LogoSearch} alt='logo'/>
          <Typography variant='h6' textAlign={'center'}>
            No se encontraron resultados
          </Typography>
        </Box>
      </>
    );
  };

export default SearchEmpty