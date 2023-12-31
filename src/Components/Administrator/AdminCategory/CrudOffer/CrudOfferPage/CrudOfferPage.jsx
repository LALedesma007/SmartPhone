import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography } from "@mui/material";
import ShowOffer from "../ShowOffer/ShowOffer";
import AddOffer from "../AddOffer/AddOffer";
import DeleteOffer from "../DeleteOffer/DeleteOffer";
import EditOffer from "../EditOffer/EditOffer";


const CrudOfferPage = () => {
  return (
    <>
      <Box>
        <Typography>Bienvenido edicion de Ofertas</Typography>
      </Box>
      <Box marginTop={'10px'}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Lista Ofertas Ingresadas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component='div'>
             <ShowOffer/>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box marginTop={'10px'}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Agregar Nuevas Ofertas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component='div'>
              <AddOffer/>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box marginTop={'10px'}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Editar Ofertas Existentes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component='div'>
              <EditOffer/>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box marginTop={'10px'}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Eliminar Ofertas Existentes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component='div'>
              <DeleteOffer/>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
  
}

export default CrudOfferPage