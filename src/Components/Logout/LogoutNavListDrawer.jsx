import React, { useContext } from 'react';
import { useHistory } from 'react-router-use-history';
import {  ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { dataContext } from '../../context/DataContext';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const LogoutNavListDrawer = () => {
  const history = useHistory();
  const { logout } = useContext(dataContext);

  const handleLogout = () => {
    logout()
    localStorage.removeItem("userlog");
    history.push('/login');
  };

  return (
    <ListItemButton onClick={handleLogout}>
        <ListItemIcon><ExitToAppIcon/></ListItemIcon>
        <ListItemText>Salir</ListItemText>
    </ListItemButton>
  )
}

export default LogoutNavListDrawer