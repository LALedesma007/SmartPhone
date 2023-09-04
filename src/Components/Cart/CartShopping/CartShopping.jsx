import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import { dataContext } from '../../../context/DataContext';
import { useContext } from 'react';
import styled from '@emotion/styled';
import CartCounter from '../../Cart/CartCounter/CartCounter';
import CartEmpty from '../CartEmpty/CartEmpty';

const CartShopping = () => {
    const { cartPhone, setCartPhone, cartheadset, setCartHeadset, cartgamer , SetCartGamer, cartwatch , SetCartWatch, cartrandom, Setcartrandom, cartOffer, SetcartOffer, cartResults, SetCartResults, cartFavorite, setCartFavorite} = useContext(dataContext);

    const allItems = [...cartgamer, ...cartheadset, ...cartPhone, ...cartrandom, ...cartwatch, ...cartOffer, ...cartResults, ...cartFavorite];
    
  
    const Img = styled('img')({
      width: 100,
      height: "15vh",
      objectPosition: 'center',
    })
  
    const deleteGamer = (id) =>{
      const productId = cartgamer.find((element) => element._id === id)
  
      const newCart = cartgamer.filter((element) => {
        return element !== productId
      })
      SetCartGamer(newCart)
    }
  
    const deleteHeadset= (id) =>{
      const productId = cartheadset.find((element) => element._id === id)
  
      const newCart = cartheadset.filter((element) => {
        return element !== productId
      })
      setCartHeadset(newCart)
    }
  
    const deletePhone= (id) =>{
      const productId = cartPhone.find((element) => element._id === id)
  
      const newCart = cartPhone.filter((element) => {
        return element !== productId
      })
      setCartPhone(newCart)
    }
  
    const deleteRandom= (id) =>{
      const productId = cartrandom.find((element) => element._id === id)
  
      const newCart = cartrandom.filter((element) => {
        return element !== productId
      })
      Setcartrandom(newCart)
    }
  
    const deleteWatch = (id) =>{
      const productId = cartwatch.find((element) => element._id === id)
  
      const newCart = cartwatch.filter((element) => {
        return element !== productId
      })
      SetCartWatch(newCart)
    }

    const deleteOffer = (id) =>{
      const productId = cartOffer.find((element) => element._id === id)
  
      const newCart = cartOffer.filter((element) => {
        return element !== productId
      })
      SetcartOffer(newCart)
    }

    const deleteResults = (id) =>{
      const productId = cartResults.find((element) => element._id === id)
  
      const newCart = cartResults.filter((element) => {
        return element !== productId
      })
      SetCartResults(newCart)
    }

    const deleteFavorite = (id) =>{
      const productId = cartFavorite.find((element) => element._id === id)
  
      const newCart = cartFavorite.filter((element) => {
        return element !== productId
      })
      setCartFavorite(newCart)
    }
  
    const isCartEmpty = allItems.length === 0;
    
    return (
      <>
      {isCartEmpty ? (<CartEmpty/>) : (
          <>
            <Grid container spacing={2} marginTop={'13px'}>
              {
                cartgamer.map(item => (
                  <Grid item key={item._id} xs={12} sm={6} lg={12}>
                    <Paper className="paper">
                      <Grid container>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Img src={item.image} />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box  display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h6" className="styleaction">{item.title}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h7" className="styleaction">{item.model}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h5" color='primary' fontWeight="fontWeightBold" className="typogra"><CurrencyExchangeSharpIcon style={{ margin: '5px' }} />{item.price}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ display: 'flex', justifyContent: 'center' }} display='flex' alignItems='center' height='100%'>
                            <CartCounter item={item} />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2} sx={{ marginBottom: { xs: 2 }, padding: {xs: 0.5} }}>
                          <Box sx={{ display: 'flex', justifyContent: 'center' }} display='flex' alignItems='center' height='100%'>
                            <Button variant="contained" color="success" startIcon={<DeleteIcon />} onClick={()=>deleteGamer(item._id)}>Eliminar</Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              }
            </Grid>
            <Grid container spacing={2} marginTop={'13px'}>
              {
                cartheadset.map(item => (
                  <Grid item key={item._id} xs={12} sm={6} lg={12}>
                    <Paper className="paper">
                      <Grid container>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Img src={item.image} />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h6"  className="styleaction">{item.title}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h7"  className="styleaction">{item.model}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h5" color='primary' fontWeight="fontWeightBold" className="typogra"><CurrencyExchangeSharpIcon style={{ margin: '5px' }} />{item.price}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <CartCounter item={item}/>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2} sx={{ marginBottom: { xs: 2 }, padding: {xs: 0.5} }}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Button variant="contained" color="success" startIcon={<DeleteIcon />} onClick={()=>deleteHeadset(item._id)}>Eliminar</Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              }
            </Grid>
            <Grid container spacing={2} marginTop={'13px'}>
              {
                cartPhone.map(item => (
                  <Grid item key={item._id} xs={12} sm={6} lg={12}>
                    <Paper className="paper">
                      <Grid container>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Img src={item.image} />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center' >
                            <Typography variant="h6" className="styleaction">{item.title}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h7" className="styleaction">{item.model}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box  display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h5" color='primary' fontWeight="fontWeightBold" className="typogra"><CurrencyExchangeSharpIcon style={{ margin: '5px' }} />{item.price}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <CartCounter item={item}/>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2} sx={{ marginBottom: { xs: 2 }, padding: {xs: 0.5} }}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Button variant="contained" color="success" startIcon={<DeleteIcon />} onClick={()=>deletePhone(item._id)}>Eliminar</Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              }
            </Grid>
            <Grid container spacing={2} marginTop={'13px'}>
              {
                cartrandom.map(item => (
                  <Grid item key={item._id} xs={12} sm={6} lg={12}>
                    <Paper className="paper">
                      <Grid container>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Img src={item.image} />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h6" className="styleaction">{item.title}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h7" className="styleaction">{item.model}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h5" color='primary' fontWeight="fontWeightBold" className="typogra"><CurrencyExchangeSharpIcon style={{ margin: '5px' }} />{item.price}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <CartCounter item={item}/>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2} sx={{ marginBottom: { xs: 2 }, padding: {xs: 0.5} }}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Button variant="contained" color="success" startIcon={<DeleteIcon />} onClick={()=>deleteRandom(item._id)}>Eliminar</Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              }
            </Grid>
            <Grid container spacing={2} marginTop={'13px'}>
              {
                cartwatch.map(item => (
                  <Grid item key={item._id} xs={12} sm={6} lg={12}>
                    <Paper className="paper">
                      <Grid container>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Img src={item.image} />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h6" className="styleaction">{item.title}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h7" className="styleaction">{item.model}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h5" color='primary' fontWeight="fontWeightBold" className="typogra"><CurrencyExchangeSharpIcon style={{ margin: '5px' }} />{item.price}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <CartCounter item={item}/>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2} sx={{ marginBottom: { xs: 2 }, padding: {xs: 0.5} }}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Button variant="contained" color="success" startIcon={<DeleteIcon />} onClick={()=>deleteWatch(item._id)}>Eliminar</Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              }
            </Grid>
            <Grid container spacing={2} marginTop={'13px'}>
              {
                cartOffer.map(item => (
                  <Grid item key={item._id} xs={12} sm={6} lg={12}>
                    <Paper className="paper">
                      <Grid container>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Img src={item.image} />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h6" className="styleaction">{item.title}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h7" className="styleaction">{item.model}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h5" color='primary' fontWeight="fontWeightBold" className="typogra"><CurrencyExchangeSharpIcon style={{ margin: '5px' }} />{item.price}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <CartCounter item={item}/>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2} sx={{ marginBottom: { xs: 2 }, padding: {xs: 0.5} }}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Button variant="contained" color="success" startIcon={<DeleteIcon />} onClick={()=>deleteOffer(item._id)}>Eliminar</Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              }
            </Grid>
            <Grid container spacing={2} marginTop={'13px'}>
              {
                cartResults.map(item => (
                  <Grid item key={item._id} xs={12} sm={6} lg={12}>
                    <Paper className="paper">
                      <Grid container>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Img src={item.image} />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h6" className="styleaction">{item.title}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h7" className="styleaction">{item.model}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h5" color='primary' fontWeight="fontWeightBold" className="typogra"><CurrencyExchangeSharpIcon style={{ margin: '5px' }} />{item.price}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <CartCounter item={item}/>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2} sx={{ marginBottom: { xs: 2 }, padding: {xs: 0.5} }}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Button variant="contained" color="success" startIcon={<DeleteIcon />} onClick={()=>deleteResults(item._id)}>Eliminar</Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              }
            </Grid>
            <Grid container spacing={2} marginTop={'13px'}>
              {
                cartFavorite.map(item => (
                  <Grid item key={item._id} xs={12} sm={6} lg={12}>
                    <Paper className="paper">
                      <Grid container>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Img src={item.image} />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h6" className="styleaction">{item.title}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h7" className="styleaction">{item.model}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Typography variant="h5" color='primary' fontWeight="fontWeightBold" className="typogra"><CurrencyExchangeSharpIcon style={{ margin: '5px' }} />{item.price}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <CartCounter item={item}/>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2} sx={{ marginBottom: { xs: 2 }, padding: {xs: 0.5} }}>
                          <Box display='flex' alignItems='center' height='100%' justifyContent='center'>
                            <Button variant="contained" color="success" startIcon={<DeleteIcon />} onClick={()=>deleteFavorite(item._id)}>Eliminar</Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              }
            </Grid>
          </>
      )}
      </>
    )
  }

export default CartShopping