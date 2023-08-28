import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useForm } from 'react-hook-form';
import { Alert, Button, TextField, Typography } from '@mui/material';
import {addProductsOffers} from '../../../../../service/indexProductsOffers'
import expressionsProducts from '../../../../../utils/expressionsproducts';
import './AddOffer.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#170D42',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
    '&.title': {
        width: '15%',
      },
      '&.model': {
        width: '15%',
      },
      '&.description': {
        width: '15%',
      },
      '&.price': {
        width: '15%',
      },
      '&.category': {
        width: '15%',
      },
      '&.image': {
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

const AddOffer = () => {

    const [successMessage, setSuccessMessage] = useState()

    const {register, getValues, reset, formState: { errors }, handleSubmit} = useForm();

    const onSubmit = (data) => {
      try { 
      
          let prod ={
            title: data.title,
            model: data.model,
            description: data.description,
            price: data.price,
            quanty: data.quanty,
            category: data.category,
            image:data.image,
          }
        
          addProductsOffers(prod) 
          reset();
          setSuccessMessage('Oferta agregada exitosamente');
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
                <StyledTableCell align='center'>Título</StyledTableCell>
                <StyledTableCell align='center'>Modelo</StyledTableCell>
                <StyledTableCell align='center'>Descripción</StyledTableCell>
                <StyledTableCell align='center'>Precio</StyledTableCell>
                <StyledTableCell align='center'>Cantidad</StyledTableCell>
                <StyledTableCell align='center'>Categoria</StyledTableCell>
                <StyledTableCell align='center'>Imagen</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow> 
                <StyledTableCell><TextField id="outlined-basic" label="Título" variant="outlined" type="text" autoComplete='off' {...register("title", { required: true, minLength: 3, maxLength: 40, pattern: expressionsProducts.title })} />
                      {errors.title?.type === 'required' && <Typography className='alert'>Campos vacios</Typography>}
                      {errors.title?.type === 'minLength' && <Typography className='alert'>Minimo 3 caracteres</Typography>}
                      {errors.title?.type === 'maxLength' && <Typography className='alert'>Maximo 40 caracteres</Typography>}  
                </StyledTableCell>
                <StyledTableCell><TextField id="outlined-basic" label="Modelo" variant="outlined" type="text" autoComplete='off'{...register("model", { required: true, minLength: 3, maxLength: 40, pattern: expressionsProducts.model })} />
                      {errors.model?.type === 'required' && <Typography className='alertas'>Campos Vacios</Typography>}
                      {errors.model?.type === 'minLength' && <Typography className='alert'>Minimo 3 caracteres</Typography>}
                      {errors.model?.type === 'maxLength' && <Typography className='alert'>Maximo 40 caracteres</Typography>}
                </StyledTableCell>
                <StyledTableCell><TextField id="outlined-basic" label="Descripción" variant="outlined" type="text" autoComplete='off' {...register("description", { required: true, minLength: 3, maxLength: 500, pattern: expressionsProducts.description })} />
                      {errors.description?.type === 'required' && <Typography className='alert'>Campos vacios</Typography>}
                      {errors.description?.type === 'minLength' && <Typography className='alert'>Minimo 3 caracteres</Typography>}
                      {errors.description?.type === 'maxLength' && <Typography className='alert'>Maximo 500 caracteres</Typography>}
                </StyledTableCell>
                <StyledTableCell><TextField id="outlined-basic" label="Precio" variant="outlined" type="text" autoComplete='off' {...register("price", { required: true,  minLength: 3, maxLength: 4, pattern: expressionsProducts.price })} />
                      {errors.price?.type === 'required' && <Typography className='alert'>Campos vacios</Typography> }
                      {errors.price?.type === 'minLength' && <Typography className='alert'>Minimo 3 caracteres</Typography>}
                      {errors.price?.type === 'maxLength' && <Typography className='alert'>Maximo 500 caracteres</Typography>}
                </StyledTableCell>
                <StyledTableCell><TextField id="outlined-basic" label="Cantidad" variant="outlined" type="text" autoComplete='off' {...register("quanty", { required: true })} />
                      {errors.quanty?.type === 'required' && <Typography className='alert'>Campos vacios</Typography> }
                </StyledTableCell>
                <StyledTableCell><TextField id="outlined-basic" label="Categoria" variant="outlined" type="text" autoComplete='off' {...register("category", { required: true })} />
                      {errors.category?.type === 'required' && <Typography className='alert'>Campos vacios</Typography> }
                </StyledTableCell>
                <StyledTableCell><TextField id="outlined-basic" label="Imagen" variant="outlined" type="text" autoComplete='off'{...register("image", { required: true })} />
                      {errors.image?.type === 'required' && <Typography className='alert'>Campos vacios</Typography>}
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

export default AddOffer