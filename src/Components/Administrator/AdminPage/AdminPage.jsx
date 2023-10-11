import { Grid, ListItem, Typography, Divider, Box, Button} from '@mui/material'
import React, { useState } from 'react'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CrudUserPage from '../AdminCategory/CrudUser/CrudUserPage/CrudUserPage';
import CrudProductPage from '../AdminCategory/CrudProduct/CrudProductPage/CrudProductPage';
import CelularPortada from '../../../../img/LogosPages/CelularPortada.png'
import CrudOfferPage from '../AdminCategory/CrudOffer/CrudOfferPage/CrudOfferPage';
import './AdminPage.css'



const AdminPage = () => {
  const [selectedCategory, setSelectedCategory] = useState();


  return (
    <Grid container >
      <Grid className='boxCategory' item xs={6} lg={2}> 
        <Box margin={1}>
          <Typography variant="h6" style={{ marginTop: "20px", marginBottom: "20px", fontWeight: "bold" }}>
            <Divider textAlign="center">Categorias</Divider>
          </Typography>
          <ListItem style={{ justifyContent: "start" }}>
            <Button color="inherit" component="a" onClick={() => setSelectedCategory('usuario')} startIcon={<ManageAccountsIcon/>}>Usuarios</Button>
          </ListItem>
            <Divider/>
          <ListItem style={{ justifyContent: "start" }}>
            <Button color="inherit" component="a" onClick={() => setSelectedCategory('productos')} startIcon={<ShoppingBagIcon/>}>Productos</Button>
          </ListItem>
            <Divider/>
          <ListItem style={{ justifyContent: "start" }}>
            <Button color="inherit" component="a" onClick={() => setSelectedCategory('offer')} startIcon={<LocalOfferIcon/>}>Ofertas</Button>
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
            <Divider textAlign="center">Bienvenido</Divider>
          </Typography>
        </Box>
        <Box margin={1}>
          {selectedCategory === 'usuario' && <CrudUserPage/>}
          {selectedCategory === 'productos' && <CrudProductPage/>}
          {selectedCategory === 'offer' && <CrudOfferPage/>}
        </Box>
      </Grid>
   </Grid>
  )
}

export default AdminPage