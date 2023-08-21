import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import React from 'react'
import { dataContext } from '../../../context/DataContext';
import { useContext } from 'react';
import styled from '@emotion/styled';
import CartCounter from '../../Cart/CartCounter/CartCounter';
import CartEmpty from '../CartEmpty/CartEmpty';

const CartShopping = () => {
    const { cartPhone, setCartPhone, cartheadset, setCartHeadset, cartgamer , SetCartGamer, cartwatch , SetCartWatch, cartrandom, Setcartrandom   } = useContext(dataContext);

    const allItems = [...cartgamer, ...cartheadset, ...cartPhone, ...cartrandom, ...cartwatch];
    
  
    const Img = styled('img')({
      width: 110,
      height: "20vh",
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
                          <Box className="sx" >
                            <Typography variant="h6" marginLeft={'25px'} className="styleaction">{item.title}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box className="sx" >
                            <Typography variant="h6" marginLeft={'25px'} className="styleaction">{item.model}</Typography>
                            <Typography variant="h7" marginLeft={'25px'} className="styleaction">Product Description</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ mr: 2 }}>
                            <Typography variant="h5" color='primary' fontWeight="fontWeightBold" className="typogra"><CurrencyExchangeSharpIcon style={{ margin: '10px' }} />{item.price}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ mr: 2 }}>
                            <CartCounter item={item} />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ mr: 2 }}>
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
                          <Box className="sx" >
                            <Typography variant="h6" marginLeft={'25px'} className="styleaction">{item.title}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box className="sx" >
                            <Typography variant="h6" marginLeft={'25px'} className="styleaction">{item.model}</Typography>
                            <Typography variant="h7" marginLeft={'25px'} className="styleaction">Product Description</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ mr: 2 }}>
                            <Typography variant="h5" color='primary' fontWeight="fontWeightBold" className="typogra"><CurrencyExchangeSharpIcon style={{ margin: '10px' }} />{item.price}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ mr: 2 }}>
                            <CartCounter item={item}/>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ mr: 2 }}>
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
                          <Box className="sx" >
                            <Typography variant="h6" marginLeft={'25px'} className="styleaction">{item.title}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box className="sx" >
                            <Typography variant="h6" marginLeft={'25px'} className="styleaction">{item.model}</Typography>
                            <Typography variant="h7" marginLeft={'25px'} className="styleaction">Product Description</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ mr: 2 }}>
                            <Typography variant="h5" color='primary' fontWeight="fontWeightBold" className="typogra"><CurrencyExchangeSharpIcon style={{ margin: '10px' }} />{item.price}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ mr: 2 }}>
                            <CartCounter item={item}/>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ mr: 2 }}>
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
                          <Box className="sx" >
                            <Typography variant="h6" marginLeft={'25px'} className="styleaction">{item.title}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box className="sx" >
                            <Typography variant="h6" marginLeft={'25px'} className="styleaction">{item.model}</Typography>
                            <Typography variant="h7" marginLeft={'25px'} className="styleaction">Product Description</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ mr: 2 }}>
                            <Typography variant="h5" color='primary' fontWeight="fontWeightBold" className="typogra"><CurrencyExchangeSharpIcon style={{ margin: '10px' }} />{item.price}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ mr: 2 }}>
                            <CartCounter item={item}/>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ mr: 2 }}>
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
                          <Box className="sx" >
                            <Typography variant="h6" marginLeft={'25px'} className="styleaction">{item.title}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box className="sx" >
                            <Typography variant="h6" marginLeft={'25px'} className="styleaction">{item.model}</Typography>
                            <Typography variant="h7" marginLeft={'25px'} className="styleaction">Product Description</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ mr: 2 }}>
                            <Typography variant="h5" color='primary' fontWeight="fontWeightBold" className="typogra"><CurrencyExchangeSharpIcon style={{ margin: '10px' }} />{item.price}</Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ mr: 2 }}>
                            <CartCounter item={item}/>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={2}>
                          <Box sx={{ mr: 2 }}>
                            <Button variant="contained" color="success" startIcon={<DeleteIcon />} onClick={()=>deleteWatch(item._id)}>Eliminar</Button>
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