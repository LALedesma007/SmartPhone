import { Box, Button, Grid, Paper, Typography, styled } from '@mui/material';
import { dataContext } from '../../../context/DataContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LogoPrice from '../../../../img/LogosPages/LogoPrice.png'
import QuizIcon from '@mui/icons-material/Quiz';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';



const CartPrice = () => {
  const { cartgamer, cartheadset, cartPhone, cartrandom, cartwatch, cartOffer, cartResults, cartFavorite } = useContext(dataContext);

  const allItems = [...cartgamer, ...cartheadset, ...cartPhone, ...cartrandom, ...cartwatch, ...cartOffer, ...cartResults, ...cartFavorite];

  const Img = styled('img')({
    width: 70,
    height: "10vh",
    objectPosition: 'center',
    margin: '3px'
  })

  const getTotalPrice = () => {
    let totalPrice = 0;

    allItems.map((item) => {
      totalPrice += item.price * item.quanty;
    });

    return totalPrice;
  };

  return (
    <>
       <Grid container spacing={0} marginTop={'13px'}>
          <Grid item xs={12} sm={6} lg={12}>
            <Paper>
              <Grid container justifyContent={'space-between'}>
                <Grid item xs={12} sm={6} lg={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                    <Img src={LogoPrice} alt='logo'/>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={2}>
                  <Box  display='flex' alignItems='center' height='100%' justifyContent='center'>
                  <Typography variant='h5'>Total:</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={2}>
                  <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                  <Typography variant='h5'>${getTotalPrice().toFixed(3)}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={2} sx={{ marginBottom: { xs: 2 }, padding: {xs: 0.5} }}>
                  <Box display='flex' justifyContent= 'center' alignItems='center' height='100%'>
                    <NavLink to='/Help'>
                      <Button variant="contained" color="success" startIcon={<QuizIcon/>}>Preguntas</Button>
                    </NavLink>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={2} sx={{ marginBottom: { xs: 2 }, padding: {xs: 0.5} }}>
                  <Box display='flex' justifyContent= 'center' alignItems='center' height='100%'>
                    <Button variant="contained" color="success" startIcon={<PointOfSaleIcon/>}>Comprar</Button>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
      </Grid>
    </>
  )
}

export default CartPrice