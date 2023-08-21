import { Box, Divider, Grid, ListItem, Typography } from '@mui/material';
import Shopping from '../CartShopping/CartShopping';
import CartPrice from '../CartPrice/CartPrice';

const CartContent = () => {
  return (
    <Grid container >
    <Grid className='boxCategory' item xs={6} lg={2.5}>
      <Box margin={1} >
        <Typography variant="h6" style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Divider textAlign="center">Mi Carrito</Divider>
        </Typography>
        
        <ListItem style={{ justifyContent: "center" }}>
          <img src='../../../img/celularPortada.png' />
        </ListItem>
      </Box>
    </Grid>

    <Grid item xs={6} lg={9.5}>
      <Box margin={1}>
        <Typography variant="h6" style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Divider textAlign="center">Mi Carrito</Divider>
        </Typography>
      </Box>
      <Box margin={1}>
        <Shopping/>
        <CartPrice/>
      </Box>
    </Grid>
  </Grid>
  )
}

export default CartContent