import styled from "@emotion/styled"
import {Box, Button, CardActions, Divider, LinearProgress, Paper, Typography} from "@mui/material"
import {useContext} from 'react';
import {dataContext} from '../../context/DataContext';
import {useSnackbar} from 'notistack';
import {useHistory} from "react-router-use-history";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import './Offers.css'

const Offers = () => {
  const {dataOffer, cartOffer, SetcartOffer, authenticatedUser} = useContext(dataContext);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
 
  const Img = styled('img')({
    width: 85,
    height: "19vh",
    objectPosition: 'center',
    paddingTop:'15px',
    paddingBottom:'15px'
  })

  const buyOffers = (item) => {
    if (authenticatedUser) {
    const productRepeat = cartOffer.find((datas) => datas._id ===item._id)
    if(productRepeat){
      SetcartOffer(cartOffer.map((datas) => datas._id === item._id ? {...item, quanty: productRepeat.quanty + 1} : datas ))
    }else{
      SetcartOffer([...cartOffer, item])
    }  
    }else {
      enqueueSnackbar(`Debe iniciar sesión para realizar la compra`, { variant: "warning", anchorOrigin: { vertical: "top", horizontal: "center", } });
      history.push("/login")
    }
  }

  return (
    <>
    <Box>
    <Typography variant="h5" style={{ marginTop:'20px', marginBottom: '20px', fontWeight: "bold"}} >   
      <Divider textAlign="left">Ofertas Imperdibles</Divider>
    </Typography>
    </Box>
    {dataOffer.length === 0 ? (<LinearProgress/>) : (
      <Box className='carrusel'>
        <Box className='carruselItems ver'>
          {
            dataOffer.map(item =>(
              <Box key={item._id} className='carruselItem' >
                <Paper className="paperOffers">
                  <Img src={item.image} alt='ImagenesProductos' />
                  <Box className="sxOffers">
                    <Typography variant="h6" className="styleaction">{item.model}</Typography>
                    <Typography variant="h7" className="styleaction">Product Description</Typography>
                    <CardActions className="styleaction">
                      <Button variant="contained" color='success' endIcon={<ShoppingCartIcon/>} onClick={()=>buyOffers(item)}>Comprar</Button>
                    </CardActions>
                  </Box>
                  <Box sx={{ mr: 2}}>
                    <Typography variant="h5" color='primary' fontWeight="fontWeightBold" className="typogra"><CurrencyExchangeSharpIcon style={{ margin: '10px' }}/>{item.price}</Typography>
                  </Box>
                </Paper>
              </Box>
            ))
          }
        </Box>
      </Box>
    )}
    </>
  )
}

export default Offers