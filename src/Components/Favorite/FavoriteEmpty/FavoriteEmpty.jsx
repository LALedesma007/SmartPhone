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
    <Grid container>
      <Grid item xs={12} sm={6} lg={2}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Img src={LogoFavorite} alt='logo'/>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button variant="contained" component={Link} to='/product'>Elige tus productos favoritos</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FavoriteEmpty