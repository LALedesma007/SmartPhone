import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography, Button, Box, Divider } from '@mui/material'
import { useContext } from 'react'
import { dataContext } from '../../../context/DataContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FavoriteEmpty from '../FavoriteEmpty/FavoriteEmpty';


const FavoritePage = () => {

  const { favoriteProducts, setFavoriteProducts, cartFavorite, setCartFavorite} = useContext(dataContext);

  const buyProduct=(item)=>{
    const productRepeat = cartFavorite.find((datas) => datas._id ===item._id)
    if(productRepeat){
      setCartFavorite(cartFavorite.map((datas) => datas._id === item._id ? {...item, quanty: productRepeat.quanty + 1} : datas ))
    }else{
      setCartFavorite([...cartFavorite, item])
    } 
  }


  const removeFromFavorites = (productId) => {
    const updatedFavorites = favoriteProducts.filter((product) => product._id !== productId);
    setFavoriteProducts(updatedFavorites);
  };

  return (
    <>
    <Typography variant="h6" style={{ marginTop: "20px", marginBottom: "10px", fontWeight: "bold" }}>
          <Divider textAlign="center">Favoritos</Divider>
    </Typography>
    {favoriteProducts.length === 0 ? (<FavoriteEmpty/>) : (
    <Box>
    <Grid container spacing={1}>
            {
              favoriteProducts.map(item => (
                <Grid item key={item._id} xs={6} sm={4} lg={2}>
                  <Card sx={{ maxWidth: 210 }} style={{ boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px', }}>
                    <CardMedia sx={{ height: 90 }} style={{ height: '150px', width: '120px', display: 'flex', alignItems: 'center', margin: 'auto' }}
                      image={item.image} />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div" style={{ textAlign: 'center' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center' }}>
                        {item.model}
                      </Typography>
                    </CardContent>
                    <Typography variant="h6" color='primary' fontWeight="fontWeightBold" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CurrencyExchangeSharpIcon style={{ margin: '10px' }} />{item.price}</Typography>
                    <CardActions style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Button variant="contained" color='error' startIcon={<ShoppingCartIcon />} onClick={() => buyProduct(item)}>Comprar</Button>
                      <IconButton color="warning" aria-label="add an favorite" onClick={() => removeFromFavorites(item._id)}><ThumbDownIcon fontSize="medium"/></IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }
    </Grid>
    </Box>)}
    </>
  )
}

export default FavoritePage