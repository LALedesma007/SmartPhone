import { styled } from '@mui/material/styles';
import { Button, Alert, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { editProducts, getProducts, getProductsById } from '../../../../../service/indexProductsAdm';
import expressionsProducts from '../../../../../utils/expressionsproducts';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';


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

const EditProduct = () => {

  const [ allProd , setAllProd  ] = useState([])
  const[ prodById , setProdById]=useState([])
  const [successMessage, setSuccessMessage] = useState()
  const {register, getValues, reset, formState: { errors }, handleSubmit} = useForm();

  const Img = styled('img')({
    width: 70,
    height: "11vh",
    objectPosition: 'center',
  })
  
  const getAllProd = async () => {
    const resp = await getProducts()
    setAllProd(resp.data.getData)
  } 

  useEffect(() => {
    getAllProd()
  }, [allProd])

  const getOneProd =  async(_id) => {
    const { data } = await getProductsById(_id)
    setProdById(data.getDataOneById)
    reset()
  }

  const editOneProd =async (datas) => {
    const id = (prodById.map(prod => prod._id))
    editProducts(id, datas)
    reset()
    setSuccessMessage('Producto editado exitosamente');
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
    <>
    <form>
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
            {prodById.map((row) =>(
                <StyledTableRow key={row._id}>
                  <StyledTableCell><TextField id="outlined-basic" label={row.title} variant="outlined" type="text" autoComplete='off' {...register("title", { required: true, minLength: 3, maxLength: 40, pattern: expressionsProducts.title })} />
                      {errors.title?.type === 'required' && <Typography className='alert'>Campos vacios</Typography>}
                      {errors.title?.type === 'minLength' && <Typography className='alert'>Minimo 3 caracteres</Typography>}
                      {errors.title?.type === 'maxLength' && <Typography className='alert'>Maximo 40 caracteres</Typography>}  
                  </StyledTableCell>
                  <StyledTableCell><TextField id="outlined-basic" label={row.model} variant="outlined" type="text" autoComplete='off'{...register("model", { required: true, minLength: 3, maxLength: 40, pattern: expressionsProducts.model })} />
                      {errors.model?.type === 'required' && <Typography className='alertas'>Campos Vacios</Typography>}
                      {errors.model?.type === 'minLength' && <Typography className='alert'>Minimo 3 caracteres</Typography>}
                      {errors.model?.type === 'maxLength' && <Typography className='alert'>Maximo 40 caracteres</Typography>}
                  </StyledTableCell>
                  <StyledTableCell><TextField id="outlined-basic" label={row.description} variant="outlined" type="text" autoComplete='off' {...register("description", { required: true, minLength: 3, maxLength: 500, pattern: expressionsProducts.description })} />
                      {errors.description?.type === 'required' && <Typography className='alert'>Campos vacios</Typography>}
                      {errors.description?.type === 'minLength' && <Typography className='alert'>Minimo 3 caracteres</Typography>}
                      {errors.description?.type === 'maxLength' && <Typography className='alert'>Maximo 500 caracteres</Typography>}
                  </StyledTableCell>
                  <StyledTableCell><TextField id="outlined-basic" label={row.price} variant="outlined" type="text" autoComplete='off' {...register("price", { required: true,  minLength: 1, maxLength: 9, pattern: expressionsProducts.price })} />
                      {errors.price?.type === 'required' && <Typography className='alert'>Campos vacios</Typography> }
                      {errors.price?.type === 'minLength' && <Typography className='alert'>Minimo 1 caracteres</Typography>}
                      {errors.price?.type === 'maxLength' && <Typography className='alert'>Maximo 9 caracteres</Typography>}
                  </StyledTableCell>
                  <StyledTableCell><TextField id="outlined-basic" label={row.quanty} variant="outlined" type="text" autoComplete='off' {...register("quanty", { required: true })} />
                      {errors.quanty?.type === 'required' && <Typography className='alert'>Campos vacios</Typography> }
                  </StyledTableCell>
                  <StyledTableCell><TextField id="outlined-basic" label={row.category} variant="outlined" type="text" autoComplete='off' {...register("category", { required: true })} />
                      {errors.category?.type === 'required' && <Typography className='alert'>Campos vacios</Typography> }
                  </StyledTableCell>
                  <StyledTableCell><TextField id="outlined-basic" label={row.image} variant="outlined" type="text" autoComplete='off'{...register("image", { required: true })} />
                      {errors.image?.type === 'required' && <Typography className='alert'>Campos vacios</Typography>}
                  </StyledTableCell>
                  <StyledTableCell >
                        <Button variant="contained" type='submit'onClick={handleSubmit(editOneProd)}>Modificar</Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {successMessage && (<Alert variant="filled" severity="success">{successMessage}</Alert>)}
    </form>
    <form>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell  align='center'>Imagen</StyledTableCell>
              <StyledTableCell  align='center'>Titulo</StyledTableCell>
              <StyledTableCell  align='center'>Modelo</StyledTableCell>
              <StyledTableCell  align='center'>Precio</StyledTableCell>
              <StyledTableCell  align='center'></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allProd.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row" align='center'><Img src={row.image} /></StyledTableCell>
                <StyledTableCell align='center'><Typography variant='h6'>{row.title}</Typography></StyledTableCell>
                <StyledTableCell align='center'><Typography variant='h6'>{row.model}</Typography></StyledTableCell>
                <StyledTableCell align='center'><Typography variant='h6' color='primary' fontWeight="fontWeightBold" className="typogra"><CurrencyExchangeSharpIcon style={{ margin: '5px' }} />{row.price}</Typography></StyledTableCell>
                <StyledTableCell ><Button variant="contained" color="primary" onClick={()=>getOneProd(row._id)}>Editar</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </form>
    </>
  )
}

export default EditProduct