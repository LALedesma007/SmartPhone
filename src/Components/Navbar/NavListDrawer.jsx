import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import InboxIcon from '@mui/icons-material/Inbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import RoofingIcon from '@mui/icons-material/Roofing';
import { useHistory } from "react-router-use-history";
import CartItems from "../Cart/CartItems/CartItems";
import LogoutNavListDrawer from "../Logout/LogoutNavListDrawer";
import { useContext } from "react";
import { dataContext } from "../../context/DataContext";

const NavListDrawer = () => {
  const history = useHistory();
  const { authenticatedUser } = useContext(dataContext);

  const handleListItemClick = (path) => {
    history.push(path);
  };

  return (
    <List>
      <ListItem onClick={() => handleListItemClick('/')}>
        <ListItemIcon>
          <RoofingIcon /> {/* Utiliza el ícono de inicio de Material-UI */}
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </ListItem>
      <ListItem onClick={() => handleListItemClick('/login')}>
        <ListItemIcon>
          <AccountCircleIcon /> {/* Utiliza el ícono de inicio de Material-UI */}
        </ListItemIcon>
        <ListItemText primary="Acceso" />
      </ListItem>
      <ListItem onClick={() => handleListItemClick('/register')}>
        <ListItemIcon>
          <AppRegistrationIcon /> {/* Utiliza el ícono de inicio de Material-UI */}
        </ListItemIcon>
        <ListItemText primary="Registro" />
      </ListItem>
      <ListItem onClick={() => handleListItemClick('/product')}>
        <ListItemIcon>
          <PhoneIphoneIcon /> {/* Utiliza el ícono de inicio de Material-UI */}
        </ListItemIcon>
        <ListItemText primary="Productos" />
      </ListItem>
      <ListItem onClick={() => handleListItemClick('/Shopping')}>
        <ListItemIcon>
          <CartItems /> {/* Utiliza el ícono de inicio de Material-UI */}
        </ListItemIcon>
        <ListItemText primary="Carrito" />
      </ListItem>
      {authenticatedUser && authenticatedUser.role === 'admin' ? (
      <ListItem onClick={() => handleListItemClick('/Administrator')}>
        <ListItemIcon>
          <AdminPanelSettingsIcon />{/* Utiliza el ícono de inicio de Material-UI */}
        </ListItemIcon>
        <ListItemText primary="Administrador" />
      </ListItem>) : null}
      <LogoutNavListDrawer/>
    </List>
  );
}

export default NavListDrawer