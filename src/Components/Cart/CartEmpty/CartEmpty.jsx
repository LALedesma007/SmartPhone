import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function CartEmpty() {
  return (
    <>
    <Box sx={{display:'flex', justifyContent:'center',}}> 
      <img src="../../../../img/CartShopping.png" style={{width:'10%'}}/>
      
    </Box>
    <Box sx={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
     <Button variant="contained" component={Link} to='/product'>Seguir Comprando </Button> 
    </Box>
    </>
  )
}

export default CartEmpty