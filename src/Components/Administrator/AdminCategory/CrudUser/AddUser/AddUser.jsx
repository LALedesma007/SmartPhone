import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import {addUsers} from '../../../../../service/indexUsersAdm.js'
import { useForm } from 'react-hook-form';
import { Alert, Button, TextField, Typography } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import expressions from '../../../../../utils/expressions';
import './AddUser.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#170D42',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
    '&.name': {
        width: '15%',
      },
      '&.lastName': {
        width: '15%',
      },
      '&.email': {
        width: '25%',
      },
      '&.user': {
        width: '15%',
      },
      '&.password': {
        width: '15%',
      },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  const AddUser = () => {

   
    const [successMessage, setSuccessMessage] = useState()

    const {register, getValues, reset, formState: { errors }, handleSubmit} = useForm();

    const onSubmit = (data) => {
      try { 
      
          let user ={
            name: data.name,
            lastName: data.lastName,
            email: data.email,
            userName: data.userName,
            password: data.password,
            role: data.role
          }
        
          addUsers(user) 
          reset();
          setSuccessMessage('Usuario agregado exitosamente');
        } catch (error) {
          console.error(error.message);
        } 
      }
    
      useEffect(() => {
        if (successMessage) {
          const timer = setTimeout(() => {
            setSuccessMessage('');
          }, 3000); // Tiempo en milisegundos (3 segundos en este caso)
          
          return () => clearTimeout(timer);
        }
      }, [successMessage]);
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align='center'>Nombre</StyledTableCell>
                <StyledTableCell align='center'>Apellido</StyledTableCell>
                <StyledTableCell align='center'>Email</StyledTableCell>
                <StyledTableCell align='center'>Usuario</StyledTableCell>
                <StyledTableCell align='center'>Rol</StyledTableCell>
                <StyledTableCell align='center'>Contraseña</StyledTableCell>
                <StyledTableCell ></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell ><TextField id="outlined-basic" label="Nombre" variant="outlined" type="text" autoComplete='off'{...register("name", { required: true, minLength: 4, maxLength: 30, pattern: expressions.name })} />
                      {errors.name?.type === 'required' && <Typography className='alert'>Campos vacios</Typography>}
                      {errors.name?.type === 'minLength' && <Typography className='alert'>Minimo 4 caracteres</Typography>}
                      {errors.name?.type === 'maxLength' && <Typography className='alert'>Maximo 30 caracteres</Typography>}
                </StyledTableCell>
                <StyledTableCell ><TextField id="outlined-basic" label="Apellido" variant="outlined" type="text" autoComplete='off' {...register("lastName", { required: true, minLength: 4, maxLength: 16, pattern: expressions.lastName })} />
                      {errors.lastName?.type === 'required' && <Typography className='alert'>Campos vacios</Typography>}  
                      {errors.lastName?.type === 'minLength' && <Typography className='alert'>Minimo 4 caracteres</Typography>}
                      {errors.lastName?.type === 'maxLength' && <Typography className='alert'>Maximo 16 caracteres</Typography>}
                </StyledTableCell>
                <StyledTableCell className='email'><TextField id="outlined-basic" label="Email" variant="outlined" type="email" autoComplete='off' fullWidth {...register("email", { required: true, pattern: expressions.email })} />
                      {errors.email?.type === 'required' && <Typography className='alertas'>Campos Vacios</Typography>}
                      {errors.email?.type === 'pattern' && <Typography className='alertas'>Formato incorrecto</Typography>}
                </StyledTableCell>
                <StyledTableCell ><TextField id="outlined-basic" label="Usuario" variant="outlined" type="text" autoComplete='off' {...register("userName", { required: true, minLength: 4, maxLength: 30, pattern: expressions.userName })} />
                      {errors.userName?.type === 'required' && <Typography className='alert'>Campos vacios</Typography>}
                      {errors.userName?.type === 'minLength' && <Typography className='alert'>Minimo 4 caracteres</Typography>}
                      {errors.userName?.type === 'maxLength' && <Typography className='alert'>Maximo 16 caracteres</Typography>}
                </StyledTableCell>
                <StyledTableCell ><TextField id="outlined-basic" label="Rol" variant="outlined" type="text" autoComplete='off' {...register("role", { required: true })} />
                      {errors.role?.type === 'required' && <Typography className='alert'>Campos vacios</Typography>}
                </StyledTableCell>
                <StyledTableCell ><TextField id="outlined-basic" label="Contraseña" variant="outlined" type="text" autoComplete='off' {...register("password", { required: true, minLength: 8, maxLength: 16 ,pattern: expressions.password })} />
                      {errors.password?.type === 'required' && <Typography className='alert'>Campos vacios</Typography>}
                      {errors.password?.type === 'minLength' && <Typography className='alert'>Minimo 8 caracteres</Typography>}
                      {errors.password?.type === 'maxLength' && <Typography className='alert'>Maximo 16 caracteres</Typography>}
                </StyledTableCell>
                <StyledTableCell ><Button variant="contained" type='submit'>Agregar</Button></StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {successMessage && (<Alert variant="filled" severity="success">{successMessage}</Alert>)}
      </form>
    )
  }
  
  export default AddUser