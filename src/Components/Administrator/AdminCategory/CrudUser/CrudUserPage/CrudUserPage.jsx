import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography } from "@mui/material";
import ShowUser from "../ShowUser/ShowUser";
import AddUser from "../AddUser/AddUser";
import DeleteUser from "../DeleteUser/DeleteUser";
import EditUser from "../EditUser/EditUser";

const CrudUserPage = () => {
  return (
    <>
      <Box>
        <Typography>Bienvenido edicion de usuario</Typography>
      </Box>
      <Box marginTop={'10px'}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Lista Ususarios Registrados</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component='div'>
             <ShowUser/>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box marginTop={'10px'}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Agregar Nuevos Usuarios</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component='div'>
              <AddUser/>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box marginTop={'10px'}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Editar Usuarios Existentes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component='div'>
              <EditUser/>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box marginTop={'10px'}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Eliminar Usuarios Existentes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component='div'>
              <DeleteUser/>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default CrudUserPage;
