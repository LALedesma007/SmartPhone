import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { Box, IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import {dataContext} from '../../../context/DataContext';

const CartCounter = ({ item }) => {
  const { cartgamer, cartheadset, cartPhone, cartrandom, cartwatch, cartOffer, setCartPhone, setCartHeadset, SetCartGamer, SetCartWatch, Setcartrandom, SetcartOffer  } = useContext(dataContext);

  const subtractProduct = () => {

    let updatedCart = [];

    const allCarts = [cartgamer, cartheadset, cartPhone, cartrandom, cartwatch, cartOffer];

    const existingProduct = allCarts.find((cart) => cart.some((product) => product._id === item._id));
    
      if (existingProduct) {
      updatedCart = existingProduct.map((product) =>
        product._id === item._id ? { ...product, quanty: product.quanty > 1 ? product.quanty - 1 : 1 } : product
      );
       
      if (cartgamer.includes(existingProduct[0])) {
        SetCartGamer(updatedCart);
      } else if (cartheadset.includes(existingProduct[0])) {
        setCartHeadset(updatedCart);
      } else if (cartPhone.includes(existingProduct[0])) {
        setCartPhone(updatedCart);
      } else if (cartrandom.includes(existingProduct[0])) {
        Setcartrandom(updatedCart);
      } else if (cartwatch.includes(existingProduct[0])) {
        SetCartWatch(updatedCart);
      } else if (cartOffer.includes(existingProduct[0])) {
        SetcartOffer(updatedCart);
      }
      

    }
    
  };

  const addProduct = () => {
    let updatedCart = [];

    if (cartgamer.includes(item)) {
      updatedCart = cartgamer.map((product) =>
        product._id === item._id ? { ...product, quanty: product.quanty + 1 } : product
      );
      SetCartGamer(updatedCart);
    } else if (cartheadset.includes(item)) {
      updatedCart = cartheadset.map((product) =>
        product._id === item._id ? { ...product, quanty: product.quanty + 1 } : product
      );
      setCartHeadset(updatedCart);
    } else if (cartPhone.includes(item)) {
      updatedCart = cartPhone.map((product) =>
        product._id === item._id ? { ...product, quanty: product.quanty + 1 } : product
      );
      setCartPhone(updatedCart);
    } else if (cartrandom.includes(item)) {
      updatedCart = cartrandom.map((product) =>
        product._id === item._id ? { ...product, quanty: product.quanty + 1 } : product
      );
      Setcartrandom(updatedCart);
    } else if (cartwatch.includes(item)) {
      updatedCart = cartwatch.map((product) =>
        product._id === item._id ? { ...product, quanty: product.quanty + 1 } : product
      );
      SetCartWatch(updatedCart);
    } else if (cartwatch.includes(item)) {
      updatedCart = cartwatch.map((product) =>
        product._id === item._id ? { ...product, quanty: product.quanty + 1 } : product
      );
      SetCartWatch(updatedCart);
    } else if (cartOffer.includes(item)) {
      updatedCart = cartOffer.map((product) =>
        product._id === item._id ? { ...product, quanty: product.quanty + 1 } : product
      );
      SetcartOffer(updatedCart);
    }
  };
 

  return (
    <Box style={{ display: 'flex', alignItems: 'center' }}>
      <IconButton color="primary" aria-label="add an alarm" onClick={subtractProduct}>
        <RemoveCircleSharpIcon />
      </IconButton>
      <Typography>{item.quanty}</Typography>
      <IconButton color="primary" aria-label="add an alarm" onClick={addProduct}>
        <AddCircleSharpIcon />
      </IconButton>
    </Box>
  )
}

export default CartCounter