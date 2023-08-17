import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material"
import LogoFooter from '../../../img/LogoFooter.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css'

const Footer = () => {
  return (
    <Box className='containerFooter'>
      <Container maxWidth='sx'>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <Stack>
              <img src={LogoFooter} className="logoFooter" />
            </Stack>
            <Stack spacing={3} direction="row" className="logoRedes">
              <Typography component='a' href="https://www.facebook.com/" target="_blank" className="redesLogos">
                <FacebookIcon fontSize="medium" />
              </Typography>
              <Typography component='a' href="https://www.whatsapp.com/?lang=es" target="_blank" className="redesLogos">
                <WhatsAppIcon fontSize="medium" />
              </Typography>
              <Typography component='a' href="https://www.instagram.com/" target="_blank" className="redesLogos">
                <InstagramIcon fontSize="medium" />
              </Typography>
              <Typography component='a' href="https://twitter.com/" target="_blank" className="redesLogos">
                <TwitterIcon fontSize="medium" />
              </Typography>
            </Stack>
            <Stack spacing={2} divider={<Divider orientation="vertical" flexItem color='#00AFEF' />} direction="row" className="tipografRedes">
              <Typography component='a' href="#" className="linkFooter">
                Contacto
              </Typography>
              <Typography component='a' href="#" className="linkFooter">
                Dirección
              </Typography>
              <Typography component='a' href="#" className="linkFooter">
                Nosotros
              </Typography>
            </Stack>
            <Typography className="copyryghtFooter">
              Copyright © 2023 Smartphone. Todos los derechos reservados.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer