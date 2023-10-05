import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Grid, Modal, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useRef } from 'react';
import { useSnackbar } from "notistack";
import emailjs from '@emailjs/browser';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoFooter from '../../../img/LogosPages/LogoFooter.png'



const HelpPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '600px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const stackStyle = {
    backgroundColor: '#170D42', 
    padding: '10px',  
    marginBottom: '15px'
  };

  const form = useRef();
  const serviceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        enqueueSnackbar(`Correo enviado`, { variant: "success", anchorOrigin: { vertical: "top", horizontal: "center", } });
        form.current.reset();
      }, () => {
        enqueueSnackbar(`Error al enviar el correo`, { variant: "error", anchorOrigin: { vertical: "top", horizontal: "center", } });
        form.current.reset();
      });
  };

  return (
    <>
      <Typography variant="h6" style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Divider textAlign="center">Preguntas Frecuentes</Divider>
      </Typography>
      <Paper elevation={3} style={{ padding: '16px', margin: '20px' }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Realizar un pedido</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 15, color: 'blue' }}>
              ¿Cómo realizo un pedido?
            </Typography>
            <Typography>
              Solo tenés que seleccionar todos los productos que deseas adquirir. Seguidamente, en el carrito de compras, para conocer el costo del envío colocás tu código postal en el recuadro correspondiente, elegís la mensajería de tu preferencia y debajo seleccionas la forma de pago. Luego hacés clic en el botón COMPRAR y podés acceder como cliente (si ya tenés cuenta en Compra Gamer) o crear un cliente nuevo. Por último, completás los pasos brindados por el asistente, hasta confirmar la compra. Se te asignará un número de pedido y se mostrarán los datos del mismo. También enviaremos un mail a tu correo electrónico registrado con los detalles del pedido realizado.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Precio</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 15, color: 'blue' }}>
              ¿El precio que figura en la web es el precio final?
            </Typography>
            <Typography>
              Todos los precios en la web incluyen el IVA, y se encuentran expresados en pesos argentinos.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Formas de pagos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 15, color: 'blue' }}>
              ¿Cuáles son las formas de pago?
            </Typography>
            <Typography>
              Contamos con dos formas de pago: a través de depósito/transferencia bancaria, con la cual obtenés el precio especial, o bien, a través de los métodos Pago (Visa o MasterCard) o MercadoPago (Tarjetas online, PagoFácil y RapiPago) con los cuales podés abonar en cuotas, al precio de lista.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Depósitos - Transferencias bancarias</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 15, color: 'blue' }}>
              ¿Cómo abono a través de depósito/transferencia?
            </Typography>
            <Typography>
              Una vez se realiza el pedido, te facilitamos los datos del CBU. Debes abonar e informar el pago desde nuestra web, antes de la fecha de vencimiento de la reserva.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Mercadopago</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 15, color: 'blue' }}>
              ¿Cómo puedo abonar a través de MercadoPago?
            </Typography>
            <Typography>
              Podés hacerlo de tres formas: Con tarjetas online en cuotas (no se puede acceder a cuotas sin interés); A través de RapiPago/ PagoFácil (se abona al precio de lista, pero no se pueden hacer cuotas, sólo se puede abonar en un pago); y realizando una transferencia desde tu cuenta de MercadoPago.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Envíos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 15, color: 'blue' }}>
              ¿Cómo gestiono el envío de mi pedido?
            </Typography>
            <Typography>
              En primer lugar, para conocer el costo del envío, una vez al agregues al carrito tu compra, solo debes colocar tu código postal en el recuadro correspondiente, seleccionar la mensajería de tu preferencia y elegir si deseas el retiro en alguna sucursal o la entrega a domicilio. Actualmente realizamos envíos a todo el país través de Oca y Andreani; y si te encontrás en CABA o alrededores, podrás seleccionar el servicio de Mensajería Privada que es exclusivo de Compra Gamer. Tené en cuenta que, para calcular el costo del envío, se toman en consideración tanto las dimensiones y peso del paquete como la distancia de la localidad de entrega.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Facturación</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 15, color: 'blue' }}>
              ¿Cómo tramito la factura de mi compra?
            </Typography>
            <Typography>
              En todas las compras efectuadas en la web, brindamos sin excepción alguna, la factura de compra. Una vez que realiza y abona el pedido, enviamos a tu dirección de correo electrónico la factura correspondiente. Por supuesto, también podés descargarla desde la sección Mi cuenta  Mis facturas. En caso de que precises factura A, solo debes ingresar tu CUIT al cargar el pedido por la web. Tené en cuenta que la factura A puede tener percepciones.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
      <Paper elevation={3} style={{ padding: '16px', margin: '20px' }}>
        <Typography style={{ marginBottom: '10px', fontSize: 'large', fontWeight: 'bold' }}>Servicio de garantías</Typography>
        <Typography style={{ marginBottom: '10px' }}>Para realizar consultas/reclamos relacionadas con la garantía o devolución de alguna de tus compras, debajo de esta sección contamos con el apartado "SamrtPhone Store te ayuda. ¿Cuál es tu consulta?" donde debes exponer tu caso, seleccionando el motivo que se adapte a tu requerimiento y uno de nuestros representantes te ofrecerá la información correspondiente sobre cómo proceder.</Typography>
        <Typography>También podes sacar un turno para venir en forma presencial a gestionar tu garantía:</Typography>
        <Button variant="contained" color="success" onClick={handleOpen} style={{ marginTop: '20px' }}>Turnos para garantías</Button>
      </Paper>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
            <Stack sx={stackStyle}>
              <img src={LogoFooter} alt='Logo' className="logoFooter" />
            </Stack>
          <form ref={form} onSubmit={sendEmail}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField id="outlined-basic" required label="Nombre" variant="outlined" name="user_name" autoComplete='off' fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField id="outlined-basic" required label="Email" variant="outlined" type='email' name="user_email" autoComplete='off' fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField id="outlined-basic" required label="Turno dd/mm/aaaa" variant="outlined" type='text' name="message" autoComplete='off' fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type='submit' value='Send'>Enviar Correo</Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption">* Los correos son respondido dentro de las 48 hs. Muchas Gracias...</Typography>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  )
}

export default HelpPage