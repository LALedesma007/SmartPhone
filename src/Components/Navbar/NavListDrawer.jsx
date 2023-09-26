import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useHistory } from "react-router-use-history";
import { useContext } from "react";
import { dataContext } from "../../context/DataContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import RoofingIcon from '@mui/icons-material/Roofing';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CartItems from "../Cart/CartItems/CartItems";
import LogoutNavListDrawer from "../Logout/LogoutNavListDrawer";


const NavListDrawer = ({onClose}) => {
  const history = useHistory();
  const { authenticatedUser } = useContext(dataContext);

  const handleListItemClick = (path) => {
    history.push(path);
    onClose();
  };

  return (
    <List>
      <ListItem onClick={() => handleListItemClick('/')}>
        <ListItemIcon>
          <RoofingIcon />  
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </ListItem>
      <ListItem onClick={() => handleListItemClick('/product')}>
        <ListItemIcon>
          <PhoneIphoneIcon />  
        </ListItemIcon>
        <ListItemText primary="Productos" />
      </ListItem>
      <ListItem onClick={() => handleListItemClick('/favorite')}>
        <ListItemIcon>
          <FavoriteBorderIcon /> 
        </ListItemIcon>
        <ListItemText primary="Favoritos" />
      </ListItem>
      <ListItem onClick={() => handleListItemClick('/Shopping')}>
        <ListItemIcon>
          <CartItems />  
        </ListItemIcon>
        <ListItemText primary="Carrito" />
      </ListItem>
      {authenticatedUser && authenticatedUser.role === 'admin' ? (
      <ListItem onClick={() => handleListItemClick('/Administrator')}>
        <ListItemIcon>
          <AdminPanelSettingsIcon /> 
        </ListItemIcon>
        <ListItemText primary="Administrador" />
      </ListItem>) : null}
      <ListItem onClick={() => handleListItemClick('/login')}>
        <ListItemIcon>
          <AccountCircleIcon />  
        </ListItemIcon>
        <ListItemText primary="Acceso" />
      </ListItem>
      <ListItem onClick={() => handleListItemClick('/register')}>
        <ListItemIcon>
          <AppRegistrationIcon /> 
        </ListItemIcon>
        <ListItemText primary="Registro" />
      </ListItem>
      <LogoutNavListDrawer/>
    </List>
  );
}

export default NavListDrawer