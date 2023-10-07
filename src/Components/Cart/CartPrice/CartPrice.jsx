import { Box, Button, Grid, IconButton, Paper, Typography, styled } from '@mui/material';
import { dataContext } from '../../../context/DataContext';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Wallet } from '@mercadopago/sdk-react'
import { createPreference } from '../../../service/indexMercadopago'
import LogoMercadoPago from '../../../../img/LogosPages/LogoMercadoPago.png'
import LogoPrice from '../../../../img/LogosPages/LogoPrice.png'
import QuizIcon from '@mui/icons-material/Quiz';

const CartPrice = () => {
  
  const { cartgamer, cartheadset, cartPhone, cartrandom, cartwatch, cartOffer, cartResults, cartFavorite } = useContext(dataContext);

  const allItems = [...cartgamer, ...cartheadset, ...cartPhone, ...cartrandom, ...cartwatch, ...cartOffer, ...cartResults, ...cartFavorite];
  
  const [preferenceId, setPreferenceId ] =useState(null)

  const customization = {
    texts: {
      action: 'pay',  
      valueProp: 'security_safety', 
    },
    visual: {
      buttonBackground: 'default',
      borderRadius: '6px',
      buttonHeight:'48px',
      horizontalPadding:'0px',
      verticalPadding: '8px',
  },
  };

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

    const handlePay =async ()=>{
    const totalPrice = getTotalPrice()
    const id = await createPreference(totalPrice);
    if(id){
      window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?preference_id=${id}`;
    }
  }

  return (
    <>
       <Grid container spacing={0} marginTop={'13px'}>
          <Grid item xs={12} sm={12} lg={12}>
            <Paper>
              <Grid container justifyContent={'space-between'}>
                <Grid item xs={12} sm={4} lg={2}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                    <Img src={LogoPrice} alt='logo'/>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} lg={2}>
                  <Box  display='flex' alignItems='center' height='100%' justifyContent='center'>
                  <Typography variant='h5'>Total:</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} lg={2}>
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
                    <IconButton  onClick={handlePay}>
                      <img src={LogoMercadoPago} alt='logo' width={'100px'} />
                    </IconButton>
                     {preferenceId && (<Wallet initialization={{ preferenceId }} customization={customization}/>)}
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