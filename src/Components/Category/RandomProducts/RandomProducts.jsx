import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, LinearProgress, Typography } from '@mui/material';
import {dataContext} from '../../../context/DataContext';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {useSnackbar} from 'notistack';
import {useHistory} from "react-router-use-history";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const RandomProducts = () => {

  const {data, cartrandom, Setcartrandom, authenticatedUser, favoriteProducts, setFavoriteProducts} = useContext(dataContext);
  const [ prodRandom, SetProdRandom] = useState([])
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const getrandom = () =>{
    const randomprod = data.sort(() => Math.random() - 0.5)
    SetProdRandom(randomprod)
  }
  
  useEffect(() => {
    getrandom()
  }, [])

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

  const buyrandom = (item) => {
    if (authenticatedUser) {
    const productRepeat = cartrandom.find((datas) => datas._id === item._id)
    if (productRepeat) {
      Setcartrandom(cartrandom.map((datas) => datas._id === item._id ? {...item, quanty: productRepeat.quanty + 1} : datas))
    }else {
      Setcartrandom([...cartrandom, item]) 
    }  
    }else {
      enqueueSnackbar(`Debe iniciar sesión para realizar la compra`, { variant: "warning", anchorOrigin: { vertical: "top", horizontal: "center", } });
      history.push("/login")
    }
  }

  return (
    <div>
      {
        prodRandom.length === 0 ? (<LinearProgress />) : (
          <Grid container spacing={1}>
            {
              prodRandom.map(item => (
                <Grid item key={item._id} xs={12} sm={6} lg={2}>
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
                      <Button variant="contained" color='error' startIcon={<ShoppingCartIcon />} onClick={() => buyrandom(item)}>Comprar</Button>
                      <IconButton color="warning" aria-label="add an favorite" onClick={() => addToFavorites(item)}><ThumbUpIcon fontSize="medium"/></IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        )}

    </div>
  )
}

export default RandomProducts