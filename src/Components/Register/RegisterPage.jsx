import React from 'react'
import { useForm } from 'react-hook-form';
import { addUsers } from '../../service/indexUsers';
import { Box, Button, FormGroup, Grid, TextField, Typography } from '@mui/material';
import { useHistory } from "react-router-use-history"
import { useSnackbar } from "notistack";
import expressions from '../../utils/expressions';
import PatternIcon from '@mui/icons-material/Pattern';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import './RegisterPage.css'

const RegisterPage = () => {

  const {register, getValues, formState: { errors }, reset,  handleSubmit} = useForm();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar()


  const onSubmit = async(data) => {
   try {
    let user ={
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      userName: data.userName,
      password: data.password,
    }

    const resp = await addUsers(user) 
     if (resp === undefined) {
      enqueueSnackbar(`Usuario ya registrado`, { variant: "error", anchorOrigin: { vertical: "top", horizontal: "center", } });
     }else{
      enqueueSnackbar(`Usuario registrado`, { variant: "success", anchorOrigin: { vertical: "top", horizontal: "center", } });
      history.push("/login")
     }
   } catch (error) {
     console.error(err.message);
   }
 
  }

  return (
      <Box className='boxContainerRegister'>
        <Grid container sx={{justifyContent: 'center'}} >
          <Grid item xs={12} md={6} lg={4}>
              <Box sx={{'& .MuiTextField-root': { m: 1 }}} className='conteinerRegister'>
                <Typography variant='h4' className='titleRegister'>Registro</Typography>
                <Grid container>
                  <Grid item xs={12} md={6} lg={6}>
                    <FormGroup className='formRegister' controlid="formBasicNombre">
                      <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                        <BorderColorIcon sx={{ color: 'action.active', mr: 0, my: 1.5 }} /> 
                          <TextField className='prueba' id="standard-basic" label="Nombre" variant="standard" InputProps={{style: { color: 'black' }}} InputLabelProps={{style: { color: '#170D42', fontWeight:'bold'}}} type="text" autoComplete='off'  {...register('name', {
                            required: true,
                            pattern: expressions.name
                          })} />
                        </Box>
                        {errors.name?.type === 'required' && <p className='alertas'>Campos vacios</p>}
                        {errors.name?.type === 'pattern' && <p className='alertas'>Formato incorrecto</p>}
                    </FormGroup>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <FormGroup className='formRegister' controlid="formBasicapellido">
                      <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                        <BadgeIcon sx={{ color: 'action.active', mr: 0, my: 1.5 }} /> 
                          <TextField  className='prueba' variant="standard" label="Apellido" InputProps={{style: { color: 'black' }}} InputLabelProps={{style: { color: '#170D42', fontWeight:'bold'}}} type="text" autoComplete='off'  {...register('lastName', {
                            required: true,
                            pattern: expressions.lastName
                          })} />
                      </Box>
                      {errors.lastName?.type === 'required' && <p className='alertas'>Campos vacios</p>}
                      {errors.lastName?.type === 'pattern' && <p className='alertas'>Formato incorrecto</p>}
                    </FormGroup>
                  </Grid>
                </Grid>

                <Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <FormGroup className='formRegister' controlid="formBasicEmail">
                      <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                        <EmailIcon sx={{ color: 'action.active', mr: 0, my: 1.5 }} /> 
                          <TextField className='prueba' variant="standard" label="Correo Electrónico" InputProps={{style: { color: 'black' }}}   InputLabelProps={{style: { color: '#170D42', fontWeight:'bold'}}} type="email" autoComplete='off' {...register('email', {
                            required: true,
                            pattern: expressions.email
                          })} />
                      </Box>
                      {errors.email?.type === 'required' && <p className='alertas'>Campos Vacios</p>}
                      {errors.email?.type === 'pattern' && <p className='alertas'>Formato incorrecto</p>}
                    </FormGroup>

                    <FormGroup className='formRegister' controlid="formBasicUsuario">
                      <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                        <AccountCircleIcon sx={{ color: 'action.active', mr: 0, my: 1.5 }} /> 
                          <TextField className='prueba' variant="standard" label="Usuario" InputProps={{style: { color: 'black' }}}   InputLabelProps={{style: { color: '#170D42', fontWeight:'bold'}}} type="text" autoComplete='off' placeholder="Usuario" {...register('userName', {
                            required: true,
                            pattern: expressions.userName
                          })} />
                      </Box>
                      {errors.userName?.type === 'required' && <p className='alertas'>Campos Vacios</p>}
                      {errors.userName?.type === 'pattern' && <p className='alertas'>Formato incorrecto</p>}
                    </FormGroup>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={12} md={6} lg={6}>
                    <FormGroup className='formRegister' controlid="formBasicPassword">
                      <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                        <PatternIcon sx={{ color: 'action.active', mr: 0, my: 1.5 }} /> 
                          <TextField className='prueba' variant="standard" label="Contraseña" InputProps={{style: { color: 'black' }}}   InputLabelProps={{style: { color: '#170D42', fontWeight:'bold'}}} type="password" {...register('password', {
                            required: true,
                            pattern: expressions.password
                          })} />
                      </Box>
                      {errors.password?.type === 'required' && <p className='alertas'>Campos Vacios</p>}
                      {errors.password?.type === 'pattern' && <p className='alertas'>Contraseña incorrecta</p>}
                    </FormGroup>
                  </Grid>

                  <Grid item xs={12} md={6} lg={6}>
                    <FormGroup className='formRegister' controlid="formBasicRepitaPassword">
                      <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                        <PatternIcon sx={{ color: 'action.active', mr: 0, my: 1.5}} /> 
                          <TextField className='prueba' variant="standard" label="Repita la Contraseña" InputProps={{style: { color: 'black' }}}   InputLabelProps={{style: { color: '#170D42', fontWeight:'bold'}}} type="password"  {...register('passwordTwo', {
                            required: true,
                            pattern: expressions.password,
                            validate: {
                              confirmacion: (value) => {
                                const { password } = getValues();
                                return password === value
                              }
                            }
                          })} />
                      </Box>
                      {errors.passwordTwo?.type === 'required' && <p className='alertas'>Campos Vacios</p>}
                      {errors.passwordTwo?.type === 'pattern' && <p className='alertas'>Contraseña incorrecta</p>}
                      {errors.passwordTwo && <p className='alertas'>Las contraseñas no son iguales</p>}
                    </FormGroup>
                  </Grid>
                </Grid>

                <Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Box className="containerButton">
                    <Button variant="contained" sx={{backgroundColor: '#F5811e', marginTop: '20px' }} type="submit" className='buttonRegister' onClick={handleSubmit(onSubmit)}>
                      Enviar
                    </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <Box>
                    <Button variant="contained" sx={{backgroundColor: '#F5811e', marginTop: '10px'}} type="submit" className='buttonRegister' href='/'>
                    Cancelar
                    </Button>
                    </Box>
                  </Grid>   
                </Grid>
              </Box>
          </Grid>
        </Grid>
      </Box>
  )
}

export default RegisterPage