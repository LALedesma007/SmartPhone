import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { editUsers, getUserById, getUsers } from '../../../../../service/indexUsersAdm';
import { useEffect, useState } from 'react';
import { Button, Alert, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import expressions from '../../../../../utils/expressions';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#170D42',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  '&.name': {
      width: '20%',
    },
    '&.lastName': {
      width: '20%',
    },
    '&.email': {
      width: '35%',
    },
    '&.user': {
      width: '20%',
    },
    '&.password': {
      width: '20%',
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


const EditUser = () => {

  const [ addUsers , setAddUsers  ] = useState([])
  const[ userById , setUsersById]=useState([])
  const [successMessage, setSuccessMessage] = useState()
  const {register, getValues, reset, formState: { errors }, handleSubmit} = useForm();
  
  const getAddUsers = async () => {
    const resp = await getUsers()
    setAddUsers(resp.data.getData)
  } 

  useEffect(() => {
  getAddUsers()
  }, [addUsers])

  const getOneUser =  async(_id) => {
    const { data } = await getUserById(_id)
    setUsersById(data.getDataOneById)
    reset()
  }

  
  const editOneUser =async (datas) => {
    const id = (userById.map(user => user._id))
    editUsers(id, datas)
    reset()
    setSuccessMessage('Usuario editado exitosamente');
    
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
              <StyledTableCell  align='center'>Nombre</StyledTableCell>
              <StyledTableCell  align='center'>Apellido</StyledTableCell>
              <StyledTableCell  align='center'>Email</StyledTableCell>
              <StyledTableCell  align='center'>Usuario</StyledTableCell>
              <StyledTableCell  align='center'></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userById.map((row) =>(
                <StyledTableRow key={row._id}>
                  <StyledTableCell ><TextField id="outlined-basic" label={row.name} variant="outlined" type="text" autoComplete='off'{...register("name", { required: true, minLength: 4, maxLength: 30, pattern: expressions.name })} />
                        {errors.name?.type === 'required' && <Typography className='alert'>Campos vacios</Typography>}
                        {errors.name?.type === 'minLength' && <Typography className='alert'>Minimo 4 caracteres</Typography>}
                        {errors.name?.type === 'maxLength' && <Typography className='alert'>Maximo 30 caracteres</Typography>}
                  </StyledTableCell>
                  <StyledTableCell ><TextField id="outlined-basic" label={row.lastName} variant="outlined" type="text" autoComplete='off' {...register("lastName", { required: true, minLength: 4, maxLength: 16, pattern: expressions.lastName })} />
                        {errors.lastName?.type === 'required' && <Typography className='alert'>Campos vacios</Typography>}  
                        {errors.lastName?.type === 'minLength' && <Typography className='alert'>Minimo 4 caracteres</Typography>}
                        {errors.lastName?.type === 'maxLength' && <Typography className='alert'>Maximo 16 caracteres</Typography>}
                  </StyledTableCell>
                  <StyledTableCell className='email'><TextField id="outlined-basic" label={row.email} variant="outlined" type="email" autoComplete='off' fullWidth {...register("email", { required: true, pattern: expressions.email })} />
                        {errors.email?.type === 'required' && <Typography className='alertas'>Campos Vacios</Typography>}
                        {errors.email?.type === 'pattern' && <Typography className='alertas'>Formato incorrecto</Typography>}
                  </StyledTableCell>
                  <StyledTableCell ><TextField id="outlined-basic" label={row.userName} variant="outlined" type="text" autoComplete='off' {...register("userName", { required: true, minLength: 4, maxLength: 30, pattern: expressions.userName })} />
                        {errors.userName?.type === 'required' && <Typography className='alert'>Campos vacios</Typography>}
                        {errors.userName?.type === 'minLength' && <Typography className='alert'>Minimo 4 caracteres</Typography>}
                        {errors.userName?.type === 'maxLength' && <Typography className='alert'>Maximo 16 caracteres</Typography>}
                  </StyledTableCell>
                  <StyledTableCell >
                        <Button variant="contained" type='submit'onClick={handleSubmit(editOneUser)}>Modificar</Button>
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
              <StyledTableCell  align='center'>Nombre</StyledTableCell>
              <StyledTableCell  align='center'>Apellido</StyledTableCell>
              <StyledTableCell  align='center'>Email</StyledTableCell>
              <StyledTableCell  align='center'>Usuario</StyledTableCell>
              <StyledTableCell  align='center'></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addUsers.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row" className='name'>{row.name}</StyledTableCell>
                <StyledTableCell className='lastName' align='center'>{row.lastName}</StyledTableCell>
                <StyledTableCell className='email'    align='center'>{row.email}</StyledTableCell>
                <StyledTableCell className='user'     align='center'>{row.userName}</StyledTableCell>
                <StyledTableCell ><Button variant="contained" color="primary" onClick={()=>getOneUser(row._id)}>Editar</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </form>
    </>
  )
}

export default EditUser