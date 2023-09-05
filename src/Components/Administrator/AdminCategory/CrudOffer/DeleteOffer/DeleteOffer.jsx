import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { deleteProductsOffers, getProductsOffers } from '../../../../../service/indexProductsOffers';
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

const DeleteOffer = () => {
    const [ allOffer , setAllOffer  ] = useState([])

    const Img = styled('img')({
        width: 70,
        height: "13vh",
        objectPosition: 'center',
      })
  
    const getAllOffer = async () => {
        const resp = await getProductsOffers()
        setAllOffer(resp.data.getDataOffers)
      } 
    
      useEffect(() => {
        getAllOffer()
      }, [allOffer])
    
    const deleteOneOffer = async(_id) => {
      try {    
        await deleteProductsOffers(_id);
        getAllOffer()
      } catch (error) {
        console.error(error.message);
      }
    }

  return (
    <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
            <TableRow>
                <StyledTableCell  align='center'>Imagen</StyledTableCell>
                <StyledTableCell  align='center'>Titulo</StyledTableCell>
                <StyledTableCell  align='center'>Modelo</StyledTableCell>
                <StyledTableCell  align='center'>Precio</StyledTableCell>
                <StyledTableCell></StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {allOffer.map((row) => (
                <StyledTableRow key={row._id}>
                    <StyledTableCell component="th" scope="row" align='center'><Img src={row.image} /></StyledTableCell>
                    <StyledTableCell align='center'><Typography variant='h6'>{row.title}</Typography></StyledTableCell>
                    <StyledTableCell align='center'><Typography variant='h6'>{row.model}</Typography></StyledTableCell>
                    <StyledTableCell align='center'><Typography variant='h6' color='primary' fontWeight="fontWeightBold" className="typogra"><CurrencyExchangeSharpIcon style={{ margin: '5px' }} />{row.price}</Typography></StyledTableCell>
                    <StyledTableCell ><Button variant="contained" color='error' onClick={()=>deleteOneOffer(row._id)}>Eliminar</Button></StyledTableCell>
                </StyledTableRow>
            ))}
        </TableBody>
    </Table>
  </TableContainer>
  )
}

export default DeleteOffer