import { Box, Divider, Grid, Typography } from '@mui/material';
import CartShopping from '../CartShopping/CartShopping';
import CartPrice from '../CartPrice/CartPrice';
import CelularPortada from '../../../../img/LogosPages/CelularPortada.png'

const CartContent = () => {
  return (
    <Grid container >
    <Grid className='boxCategory' item xs={6} lg={2}>
      <Box margin={1} >
        <Typography variant="h6" style={{ marginTop: "20px", marginBottom: "20px", fontWeight: "bold" }}>
          <Divider textAlign="center">Mi Carrito</Divider>
        </Typography>
        
        <Box display= 'flex' justifyContent= 'center' >
          <img src={CelularPortada}  alt='logo'  style={{ maxWidth: "100%", height: "100%" }}/>
        </Box>
      </Box>
    </Grid>

    <Grid item xs={6} lg={10}>
      <Box margin={1}>
        <Typography variant="h6" style={{ marginTop: "20px", marginBottom: "20px", fontWeight: "bold" }}>
          <Divider textAlign="center">Mi Carrito</Divider>
        </Typography>
      </Box>
      <Box margin={1}>
        <CartShopping/>
        <CartPrice/>
      </Box>
    </Grid>
  </Grid>
  )
}

export default CartContent