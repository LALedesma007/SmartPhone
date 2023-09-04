import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import {dataContext} from '../../../context/DataContext';
import {useSnackbar} from 'notistack';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SearchEmpty from '../SearchEmpty/SearchEmpty';

const SearchListProducts = () => {
    const {searchResults, cartResults, SetCartResults, authenticatedUser, favoriteProducts, setFavoriteProducts} = useContext(dataContext);
    const { enqueueSnackbar } = useSnackbar();

    const addToFavorites = (item) => {
      if (authenticatedUser) {
        const isAlreadyInFavorites = favoriteProducts.some((favItem) => favItem._id === item._id);
  
        if (isAlreadyInFavorites) {
          enqueueSnackbar(`Este producto ya está en tus favoritos`, {
            variant: 'error',
            anchorOrigin: { vertical: 'top', horizontal: 'center' },
          });
        } else {
          setFavoriteProducts([...favoriteProducts, item]);
          enqueueSnackbar(`Agregado a favoritos: ${item.title} - ${item.model}`, {
            variant: 'success',
            anchorOrigin: { vertical: 'top', horizontal: 'center' },
          });
        }
      } else {
        enqueueSnackbar(`Debe iniciar sesión para agregar a favoritos`, {
          variant: 'warning',
          anchorOrigin: { vertical: 'top', horizontal: 'center' },
        });
        history.push('/login');
      }
    };

    const buySearch = (item) =>{
      SetCartResults([...cartResults, item])
    }

  return (
    searchResults.length > 0 ? (
        <Grid container spacing={1}>
            {
              searchResults.map(item => (
                <Grid item key={item._id} xs={12} sm={6} lg={2} >
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
                      <Button variant="contained" color='error' startIcon={<ShoppingCartIcon />} onClick={()=>buySearch(item)}>Comprar</Button>
                      <IconButton color="warning" aria-label="add an favorite" onClick={() => addToFavorites(item)}><ThumbUpIcon fontSize="medium"/></IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
    ): <SearchEmpty/>
  )
}

export default SearchListProducts