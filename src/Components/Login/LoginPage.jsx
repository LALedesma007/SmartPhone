import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { getUser } from '../../service/indexUsers';
import { Box, Button, FormGroup, Grid, TextField, Typography } from '@mui/material';
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-use-history"
import { dataContext } from '../../context/DataContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PatternIcon from '@mui/icons-material/Pattern';
import expressions from '../../utils/expressions'
import './LoginPage.css'

const LoginPage = () => {
  const { login } = useContext(dataContext);
  const { register, formState: { errors }, reset, handleSubmit } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const onSubmit = async(data) =>{
    try {
      let user = {
        userName: data.userName,
        email: data.email,
      }
      const userOne = await getUser(user)
      if (userOne === undefined) {
        enqueueSnackbar(`Acceso denegado ${user.userName}`, { variant: "error", anchorOrigin: { vertical: "top", horizontal: "center", } });
        reset()
      } else {
        login(user);
        localStorage.setItem("userlog", JSON.stringify({ user }))
        enqueueSnackbar(`Bienvenido ${user.userName}`, { variant: "success", anchorOrigin: { vertical: "top", horizontal: "center", } });
        history.push("/")
      }
    } catch (error) {
      console.error(err.message);
    }
  }

  return (
    <Box className='boxContainerLogin'>
        <Grid container>
        <Grid item xs={12} md={6} lg={4} >
          <Box className='loginForm' >
            <Box className='conteinerLogin'>
              <Typography variant='h4' className='titleLogin'>Acceso</Typography>
              <FormGroup className='formLogin' controlid="formBasicUsuario">
                <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                  <AccountCircleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField className='prueba' id="standard-basic" variant="standard" InputProps={{style: { color: 'black'}}} InputLabelProps={{style: { color: '#170D42', fontWeight:'bold'}}} type="text" autoComplete='off' label="Usuario" {...register('userName', {
                    required: true,
                    pattern: expressions.userName
                  })} />
                </Box>  
                  {errors.userName?.type === 'required' && <p className='alertas'>Campos Vacios</p>}
                  {errors.userName?.type === 'pattern'  && <p className='alertas'>Formato incorrecto</p>}
              </FormGroup>

              <FormGroup className='formLogin' controlid="formBasicEmail">
                <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                 <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField className='prueba'  variant="standard" InputProps={{style: { color: 'black' }}}   InputLabelProps={{style: { color: '#170D42', fontWeight:'bold'}}} type="email" autoComplete='off'  label="Correo Electrónico" {...register('email', {
                    required: true,
                    pattern: expressions.email
                  })} />
                </Box>  
                  {errors.email?.type === 'required' && <p className='alertas'>Campos Vacios</p>}
                  {errors.email?.type === 'pattern'  && <p className='alertas'>Formato incorrecto</p>}   
              </FormGroup>

              <FormGroup className='formLogin' controlid="formBasicPassword">
              <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                 <PatternIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> 
                <TextField  className='prueba' variant="standard" InputProps={{style: { color: 'black' }}}   InputLabelProps={{style: { color: '#170D42', fontWeight:'bold'}}} type="password" label="Contraseña" {...register('password', {
                  required: true,
                  pattern: expressions.password
                })} />
              </Box>  
                {errors.password?.type === 'required' && <p className='alertas'>Campos Vacios</p>}
                {errors.password?.type === 'pattern'  && <p className='alertas'>Contraseña incorrecta</p>}
              </FormGroup>   

              <Box className='containerButton'>
              <Button variant="contained" sx={{backgroundColor: '#F5811e', marginTop:'20px'}} type="submit" onClick={handleSubmit(onSubmit)} className='buttonLogin'>
                Ingresar
              </Button>
              </Box>
              <Box className='containerButton'> 
              <Button variant="contained" sx={{backgroundColor: '#F5811e', marginTop:'10px'}} type="submit"  href='/Register' className='buttonLogin'>
                Registrar
              </Button>
              </Box>
            </Box>
          </Box>
          </Grid>
          </Grid>
        </Box>
  )
}

export default LoginPage