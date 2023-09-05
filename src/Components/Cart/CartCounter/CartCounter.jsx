import { Box, IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import {dataContext} from '../../../context/DataContext';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';


const CartCounter = ({ item }) => {
  const { cartgamer, cartheadset, cartPhone, cartrandom, cartwatch, cartOffer, cartResults, cartFavorite, setCartPhone, setCartHeadset, SetCartGamer, SetCartWatch, Setcartrandom, SetcartOffer, SetCartResults, setCartFavorite  } = useContext(dataContext);

  const subtractProduct = () => {

    let updatedCart = [];

    const allCarts = [cartgamer, cartheadset, cartPhone, cartrandom, cartwatch, cartOffer, cartResults, cartFavorite,];

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
      } else if (cartResults.includes(existingProduct[0])) {
        SetCartResults(updatedCart);
      } else if (cartFavorite.includes(existingProduct[0])) {
        setCartFavorite(updatedCart);
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
    }else if (cartResults.includes(item)) {
      updatedCart = cartResults.map((product) =>
        product._id === item._id ? { ...product, quanty: product.quanty + 1 } : product
      );
      SetCartResults(updatedCart);
    }else if (cartFavorite.includes(item)) {
      updatedCart = cartFavorite.map((product) =>
        product._id === item._id ? { ...product, quanty: product.quanty + 1 } : product
      );
      setCartFavorite(updatedCart);
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