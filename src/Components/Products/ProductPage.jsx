import { Grid, ListItem, Typography, Divider, Box, Button} from '@mui/material'
import React, { useState } from 'react'
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import WatchIcon from '@mui/icons-material/Watch';
import HeadsetIcon from '@mui/icons-material/Headset';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import GamerConsole from '../Category/GamerConsole/GamerConsole';
import HeadPhones from '../Category/HeadPhones/HeadPhones';
import RandomProducts from '../Category/RandomProducts/RandomProducts'
import SmartPhone from '../Category/SmartPhone/SmartPhone';
import SmartWatch from '../Category/SmartWatch/SmartWatch';
import CelularPortada from '../../../img/LogosPages/CelularPortada.png'
import SearchProducts from '../Search/SearchProducts/SearchProducts';
import SearchListProducts from '../Search/SearchListProducts/SearchListProducts';
import './ProductPage.css'

const ProductPage = () => {

  const [selectedCategory, setSelectedCategory] = useState('all');
  
  return (
    <Grid container >
        <Grid className='boxCategory' item xs={6} lg={2}> 
          <Box margin={1}>
            <Typography variant="h6" style={{ marginTop: "20px", marginBottom: "20px", fontWeight: "bold"}}>
              <Divider textAlign="center">Categorias</Divider>
            </Typography>
            <ListItem style={{ justifyContent: "start" }} >
            <div onClick={() => setSelectedCategory('search')}><SearchProducts/></div>
            </ListItem>
            <ListItem style={{ justifyContent: "start" }}>
              <Button color="inherit" component="a" onClick={() => setSelectedCategory('celulares')} startIcon={<StayCurrentPortraitIcon/>}>Celulares</Button>
            </ListItem>
              <Divider/>
            <ListItem style={{ justifyContent: "start" }}>
              <Button color="inherit" component="a" onClick={() => setSelectedCategory('smartwatch')} startIcon={<WatchIcon/>}>Relojes</Button>
            </ListItem>
              <Divider/>
            <ListItem style={{ justifyContent: "start" }}>
              <Button color="inherit" component="a" onClick={() => setSelectedCategory('auriculares')} startIcon={<HeadsetIcon/>}>Auriculares</Button>
            </ListItem>
              <Divider/>
            <ListItem style={{ justifyContent: "start" }}>
              <Button color="inherit" component="a" onClick={() => setSelectedCategory('consolas')} startIcon={<VideogameAssetIcon/>}>Consolas</Button>
            </ListItem>
              <Divider/>
          </Box>
          <Box display= 'flex' justifyContent= 'center' >
             <img src={CelularPortada}  alt='CelularPortada'  style={{ maxWidth: "100%", height: "100%", marginTop: "50px", marginBottom: "50px"}}/>
          </Box>
        </Grid>
        
      <Grid item xs={6} lg={10}>
        <Box margin={1}>
          <Typography variant="h6" style={{ marginTop: "20px", marginBottom: "20px", fontWeight: "bold" }}>
            <Divider textAlign="center">Productos</Divider>
          </Typography>
        </Box>
        <Box margin={1}>
          {selectedCategory === 'celulares' && <SmartPhone/>}
          {selectedCategory === 'smartwatch' && <SmartWatch/>}
          {selectedCategory === 'auriculares' && <HeadPhones/>}
          {selectedCategory === 'consolas' && <GamerConsole/>}
          {selectedCategory === 'all' && <RandomProducts/>}
          {selectedCategory === 'search' && <SearchListProducts/> }
          
        </Box>
      </Grid>
    </Grid>
  );
}

export default ProductPage
