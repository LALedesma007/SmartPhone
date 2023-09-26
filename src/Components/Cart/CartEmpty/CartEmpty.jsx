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
      <>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
          <Img src={CartShopping}  alt='LogoCarrito' />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button variant="contained" component={Link} to='/product'>Seguir Comprando </Button>
        </Box>
      </>
  )
}

export default CartEmpty