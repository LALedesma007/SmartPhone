import React from 'react';
import { useHistory } from 'react-router-use-history';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Button, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

const LogoutNavListDrawer = () => {
  const history = useHistory();

  const handleLogout = () => {
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