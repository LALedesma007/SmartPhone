import React from "react";
import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShowProduct from "../ShowProduct/ShowProduct";
import AddProduct from "../AddProduct/AddProduct";
import EditProduct from "../EditProduct/EditProduct"
import DeleteProduct from "../DeleteProduct/DeleteProduct"


const CrudProductPage = () => {
  return (
    <>
    <Box>
      <Typography>Bienvenido edicion de Productos</Typography>
    </Box>
    <Box marginTop={'10px'}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Lista Productos Existente</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component='div'>
           <ShowProduct/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    <Box marginTop={'10px'}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Agregar Nuevos Productos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component='div'>
            <AddProduct/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    <Box marginTop={'10px'}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Editar Productos Existentes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component='div'>
            <EditProduct/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    <Box marginTop={'10px'}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Eliminar Productos Existentes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component='div'>
            <DeleteProduct/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  </>
  )
}

export default CrudProductPage