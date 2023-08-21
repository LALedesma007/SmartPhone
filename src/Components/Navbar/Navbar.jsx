import { AppBar, Box, Button, Drawer, IconButton, Toolbar} from "@mui/material"
import NavListDrawer from "./NavListDrawer"
import MenuIcon from '@mui/icons-material/Menu';
import RoofingIcon from '@mui/icons-material/Roofing';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useState } from "react"
import { NavLink } from "react-router-dom";
import LogoNavbar from '../../../img/LogoNavbar.png'
import './Navbar.css'
import CartItems from "../Cart/CartItems/CartItems";

const Navbar = () => {

    const [ open , setOpen ] = useState(false)
  
    const navLinks = [
      {
        id: 1, title: 'Inicio', path: '/', icon: <RoofingIcon/>
      },
      {
        id: 2, title: 'Productos', path: '/product', icon: <PhoneIphoneIcon/>
      },
      {
        id: 3, title: 'Acceso', path: '/login', icon: <AccountCircleIcon/>
      },
      {
        id: 4, title: 'Registro', path: '/register', icon: <AppRegistrationIcon/>
      },
      {
        id: 5, title: 'Carrito', path: '/Shopping' , icon: <CartItems/>
      }
    ]
  
  
    return (
      <>
      <AppBar position="static" style={{ backgroundColor: '#170D42', width: '100%'}}>
        <Toolbar>
        <img src={LogoNavbar} alt='logo' className="logonavbar"/>
          <Box sx={{ display:{ xs: 'none', sm: 'block'} }}>
          {
            navLinks.map(item =>(
              <Button color="inherit" variant="outlined" size="small" style={{ margin: 5, borderRadius: '50px', borderColor: '#F5811e', borderWidth: '2px'}} key={item.id} component={NavLink} to={item.path} startIcon={item.icon}>{item.title}</Button>
            ))
          }
          </Box>
          <IconButton color="inherit" size="large" sx={{ display:{ xs: 'flex', sm: 'none'} }} onClick={()=> setOpen(true)}>
             <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
  
      <Drawer open={open} anchor="left" sx={{ display:{ xs: 'flex', sm: 'block'} }} onClose={()=>setOpen(false)} >
        <NavListDrawer navLinks={ navLinks }/>
      </Drawer>
      </>
    )
  }
  
  export default Navbar