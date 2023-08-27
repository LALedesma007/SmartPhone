import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { getUsers } from '../../../../../service/indexUsersAdm'

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
        width: '15%',
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


const ShowUser = () => {

  const [ addUsers , setAddUsers  ] = useState([])
  
  const getAddUsers = async () => {
    const resp = await getUsers()
    setAddUsers(resp.data.getData)
  } 

  useEffect(() => {
  getAddUsers()
  }, [addUsers])

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell  align='center'> Nombre</StyledTableCell>
          <StyledTableCell  align='center'>Apellido</StyledTableCell>
          <StyledTableCell  align='center'>Email</StyledTableCell>
          <StyledTableCell  align='center'>Usuario</StyledTableCell>
          <StyledTableCell  align='center'>Contraseña</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {addUsers.map((row) => (
          <StyledTableRow key={row._id}>
            <StyledTableCell component="th" scope="row" className='name'>{row.name}</StyledTableCell>
            <StyledTableCell className='lastName' align='center'>{row.lastName}</StyledTableCell>
            <StyledTableCell className='email'    align='center'>{row.email}</StyledTableCell>
            <StyledTableCell className='user'     align='center'>{row.userName}</StyledTableCell>
            <StyledTableCell className='password' align='center'>{row.password}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default ShowUser