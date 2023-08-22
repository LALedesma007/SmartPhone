import React from 'react'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { useContext } from 'react';
import {dataContext} from '../../../context/DataContext';
import { Typography } from '@mui/material';

const CartItems = () => {
  const { cartgamer, cartheadset, cartPhone, cartrandom, cartwatch, cartOffer } = useContext(dataContext);

  const allCarts = [cartgamer, cartheadset, cartPhone, cartrandom, cartwatch, cartOffer];

  

  const itemQuanty = allCarts.reduce((acc, currentCart) => {
    if (currentCart) {
      return acc + currentCart.reduce((cartAcc, element) => cartAcc + element.quanty, 0);
    }
    return acc;
  }, 0);


  return (
    <>
   {itemQuanty >= 1 && (
        <Typography style={{ fontSize: '13px', paddingRight: '5px' }}>{itemQuanty}</Typography>
      )}
   <ShoppingCartSharpIcon/>
 </>
  )
}

export default CartItems