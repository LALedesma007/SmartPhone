import { Box, Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import CartShopping from '../../../../img/LogosPages/CartShopping.png'
import styled from '@emotion/styled';

const CartEmpty =() => {

  const Img = styled('img')({
    width: "80",
    height: "15vh",
    objectPosition: 'center',
    margin: '3px'
  })

  return (
    <Grid container>
      <Grid item xs={12} sm={6} lg={2}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Img src={CartShopping}  alt='logo' />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button variant="contained" component={Link} to='/product'>Seguir Comprando </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default CartEmpty