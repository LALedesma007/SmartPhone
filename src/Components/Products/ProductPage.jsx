import { Grid, ListItem, Typography, Divider, Box, Button} from '@mui/material'
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import WatchIcon from '@mui/icons-material/Watch';
import HeadsetIcon from '@mui/icons-material/Headset';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import GamerConsole from '../Category/GamerConsole/GamerConsole';
import HeadPhones from '../Category/HeadPhones/Headphones';
import RandomProducts from '../Category/RandomProducts/RandomProducts'
import SmartPhone from '../Category/SmartPhone/SmartPhone';
import SmartWatch from '../Category/SmartWatch/SmartWatch';
import React, { useState } from 'react'
import './ProductPage.css'


const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
 

  return (
    <Grid container >
        <Grid className='boxCategory' item xs={6} lg={2.5}> 
          <Box margin={1}>
            <Typography variant="h6" style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Divider textAlign="center">Categorias</Divider>
            </Typography>
            <ListItem style={{ justifyContent: "start" }}>
              <Button color="inherit" component="a" onClick={() => setSelectedCategory('celulares')} startIcon={<StayCurrentPortraitIcon/>}>Celulares</Button>
            </ListItem>
              <Divider/>
            <ListItem style={{ justifyContent: "start" }}>
              <Button color="inherit" component="a" onClick={() => setSelectedCategory('smartwatch')} startIcon={<WatchIcon/>}>SmartWatch</Button>
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
            {/* <ListItem style={{ justifyContent: "center" }}>
              <img src='../../../img/celularPortada.png' className='imgCategory' />
            </ListItem> */}
          </Box>
        </Grid>
        
      <Grid item xs={6} lg={9.5}>
        <Box margin={1}>
          <Typography variant="h6" style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Divider textAlign="center">Productos</Divider>
          </Typography>
        </Box>
        <Box margin={1}>
          {selectedCategory === 'celulares' && <SmartPhone/>}
          {selectedCategory === 'smartwatch' && <SmartWatch/>}
          {selectedCategory === 'auriculares' && <HeadPhones/>}
          {selectedCategory === 'consolas' && <GamerConsole/>}
          {selectedCategory === 'all' && <RandomProducts/>}
        </Box>
      </Grid>
    </Grid>
  );
}

export default ProductPage
