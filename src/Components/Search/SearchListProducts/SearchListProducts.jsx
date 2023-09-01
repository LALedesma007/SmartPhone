import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import {dataContext} from '../../../context/DataContext';
import SearchEmpty from '../SearchEmpty/SearchEmpty';


const SearchListProducts = () => {
    const {searchResults, cartResults, SetCartResults} = useContext(dataContext);

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
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
    ): <SearchEmpty/>
  )
}

export default SearchListProducts