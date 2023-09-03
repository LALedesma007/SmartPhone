import React, { useContext } from 'react';
import { useHistory } from 'react-router-use-history';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Button } from '@mui/material';
import { dataContext } from '../../context/DataContext';

const Logout = () => {
  const history = useHistory();
  const { logout } = useContext(dataContext);

  const handleLogout = () => {
    logout()
    localStorage.removeItem("userlog");
    history.push('/login');
  };

  return (
    <Button color="inherit" variant="outlined" size="small" style={{ margin: 5, borderRadius: '50px', borderColor: '#F5811e', borderWidth: '2px'}} onClick={handleLogout} startIcon={<ExitToAppIcon/>}>Salir</Button>
  );
};

export default Logout;