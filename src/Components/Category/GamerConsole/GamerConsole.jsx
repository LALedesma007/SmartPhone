import { Button, Card, CardActions, CardContent, CardMedia, Grid, LinearProgress, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import { useContext } from 'react';
import {dataContext} from '../../../context/DataContext';
import { useState } from 'react';
import { useEffect } from 'react';


const GamerConsole = () => {

  const {data , cartgamer , SetCartGamer} = useContext(dataContext);
  const [ getProdGamer, SetgetProdGamer] = useState([])

  const getgamer = () =>{
    const filtergamer = data.filter(product => product.category === 'Consolas')
    SetgetProdGamer(filtergamer)
  }
    
  useEffect(() => {
    getgamer()
  }, [])

  const buygamer = (item) => {
    const productRepeat = cartgamer.find((datas) => datas._id === item._id)
    if (productRepeat) {
      SetCartGamer(cartgamer.map((datas) => datas._id === item._id ? {...item, quanty: productRepeat.quanty + 1} : datas))
    } else {
     SetCartGamer([...cartgamer, item]) 
    }
  }

  return (
     <>
      {
       getProdGamer.length === 0 ? (<LinearProgress/>) : (
          <Grid container spacing={1}>
            {
              getProdGamer.map(item => (
                <Grid item key={item._id} xs={12} sm={6} lg={3}>
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
                      <Button variant="contained" color='error' startIcon={<ShoppingCartIcon />} onClick={() => buygamer(item)}>Comprar</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
      )}
   </>
  )
}

export default GamerConsole