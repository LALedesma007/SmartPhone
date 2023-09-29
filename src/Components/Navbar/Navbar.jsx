import { AppBar, Box, Button, Drawer, IconButton, Toolbar} from "@mui/material"
import { useState } from "react"
import { useContext } from 'react';
import { dataContext } from "../../context/DataContext";
import { useHistory } from "react-router-use-history";
import NavListDrawer from "./NavListDrawer"
import MenuIcon from '@mui/icons-material/Menu';
import RoofingIcon from '@mui/icons-material/Roofing';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoNavbar from '../../../img/LogosPages/LogoNavbar.png'
import CartItems from "../Cart/CartItems/CartItems";
import Logout from "../Logout/Logout";
import './Navbar.css'

const Navbar = () => {

    const [ open , setOpen ] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
    const history = useHistory();
    const { authenticatedUser } = useContext(dataContext);

    const handleMenuButtonClick = () => {
      setOpen(true);
    };

    const handleMenuClose = () => {
      setOpen(false);
    };
  
    return (
      <>
      <AppBar position="static" style={{ backgroundColor: '#170D42', width: '100%'}}>
        <Toolbar>
            <img src={LogoNavbar} alt='Logo' className="logonavbar"/>
            <Box sx={{ display:{ xs: 'none', sm: 'block'} }}>
              <Button color="inherit" variant="outlined" size="small" style={{ margin: 5, borderRadius: '50px', borderColor: '#F5811e', borderWidth: '2px' }} onClick={() => history.push('/')} startIcon={<RoofingIcon />}>
                  Inicio
              </Button>
              <Button color="inherit" variant="outlined" size="small" style={{ margin: 5, borderRadius: '50px', borderColor: '#F5811e', borderWidth: '2px' }} onClick={() => history.push('/product')} startIcon={<PhoneIphoneIcon />}>
                  Productos
              </Button>
              <Button color="inherit" variant="outlined" size="small" style={{ margin: 5, borderRadius: '50px', borderColor: '#F5811e', borderWidth: '2px' }} onClick={() => history.push('/favorite')} startIcon={<FavoriteBorderIcon />}>
                  Favoritos
              </Button>
              <Button color="inherit" variant="outlined" size="small" style={{ margin: 5, borderRadius: '50px', borderColor: '#F5811e', borderWidth: '2px' }} onClick={() => history.push('/Shopping')} startIcon={<CartItems />}>
                  Carrito
              </Button>
              {authenticatedUser && authenticatedUser.role === 'admin' ? (
              <Button color="inherit" variant="outlined" size="small" style={{ margin: 5, borderRadius: '50px', borderColor: '#F5811e', borderWidth: '2px' }} onClick={() => history.push('/Administrator')} startIcon={<AdminPanelSettingsIcon />}>
                  Administrador
              </Button>) : null}
              <Button color="inherit" variant="outlined" size="small" style={{ margin: 5, borderRadius: '50px', borderColor: '#F5811e', borderWidth: '2px' }} onClick={() => history.push('/login')} startIcon={<AccountCircleIcon />}>
                  Acceso
              </Button>
              <Button color="inherit" variant="outlined" size="small" style={{ margin: 5, borderRadius: '50px', borderColor: '#F5811e', borderWidth: '2px' }} onClick={() => history.push('/register')} startIcon={<AppRegistrationIcon />}>
                  Registro
              </Button>
              {authenticatedUser && ( authenticatedUser.role === 'admin' || authenticatedUser.role === 'user') ? ( <Logout/> ) : null}
            </Box>
          <IconButton color="inherit" size="large" sx={{ display:{ xs: 'flex', sm: 'none'} }} onClick={()=> setOpen(true)}>
             <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
  
      <Drawer open={open} anchor="left" sx={{ display:{ xs: 'flex', sm: 'block'} }} onClose={handleMenuClose} >
        <NavListDrawer onClose={handleMenuClose}  />
      </Drawer>
      </>
    )
  }
  
  export default Navbar