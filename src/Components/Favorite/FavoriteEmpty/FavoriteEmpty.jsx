import { Box, Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import LogoFavorite from '../../../../img/LogosPages/LogoFovorite.png'
import styled from '@emotion/styled';

const FavoriteEmpty = () => {

  const Img = styled('img')({
    width: "100",
    height: "15vh",
    objectPosition: 'center',
    margin: '3px'
  })

  return (
      <>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Img src={LogoFavorite} alt='LogoFavorito'/>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button variant="contained" component={Link} to='/product'>Elige tus productos favoritos</Button>
        </Box>
      </>
    
  )
}

export default FavoriteEmpty