import { Typography } from '@mui/material';
import { dataContext } from '../../../context/DataContext';
import { useContext } from 'react';

const CartPrice = () => {
  const { cartgamer, cartheadset, cartPhone, cartrandom, cartwatch, cartOffer, cartResults } = useContext(dataContext);

  const allItems = [...cartgamer, ...cartheadset, ...cartPhone, ...cartrandom, ...cartwatch, ...cartOffer, ...cartResults];

  const getTotalPrice = () => {
    let totalPrice = 0;

    allItems.map((item) => {
      totalPrice += item.price * item.quanty;
    });

    return totalPrice;
  };

  return (
    <>
    <Typography variant='h5'>Total Price</Typography>
    <Typography variant='h5'>{getTotalPrice().toFixed(3)}</Typography>
    </>
  )
}

export default CartPrice