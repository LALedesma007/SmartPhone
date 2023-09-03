import { AppBar, Box, Button, Drawer, IconButton, Toolbar} from "@mui/material"
import NavListDrawer from "./NavListDrawer"
import MenuIcon from '@mui/icons-material/Menu';
import RoofingIcon from '@mui/icons-material/Roofing';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState } from "react"
import { useContext } from 'react';
import { dataContext } from "../../context/DataContext";
import { useHistory } from "react-router-use-history";
import LogoNavbar from '../../../img/LogoNavbar.png'
import CartItems from "../Cart/CartItems/CartItems";
import Logout from "../Logout/Logout";
import './Navbar.css'

const Navbar = () => {

    const [ open , setOpen ] = useState(false)
    const history = useHistory();
    const { authenticatedUser } = useContext(dataContext);

    const handleMenuButtonClick = () => {
      setOpen(true);
    };
  
    return (
      <>
      <AppBar position="static" style={{ backgroundColor: '#170D42', width: '100%'}}>
        <Toolbar>
            <img src={LogoNavbar} alt='logo' className="logonavbar"/>
            <Box sx={{ display:{ xs: 'none', sm: 'block'} }}>
              <Button color="inherit" variant="outlined" size="small" style={{ margin: 5, borderRadius: '50px', borderColor: '#F5811e', borderWidth: '2px' }} onClick={() => history.push('/')} startIcon={<RoofingIcon />}>
                  Inicio
              </Button>
              <Button color="inherit" variant="outlined" size="small" style={{ margin: 5, borderRadius: '50px', borderColor: '#F5811e', borderWidth: '2px' }} onClick={() => history.push('/product')} startIcon={<PhoneIphoneIcon />}>
                  Productos
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
              <Logout/>
            </Box>
          <IconButton color="inherit" size="large" sx={{ display:{ xs: 'flex', sm: 'none'} }} onClick={()=> setOpen(true)}>
             <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
  
      <Drawer open={open} anchor="left" sx={{ display:{ xs: 'flex', sm: 'block'} }} onClose={()=>setOpen(false)} >
        <NavListDrawer />
      </Drawer>
      </>
    )
  }
  
  export default Navbar