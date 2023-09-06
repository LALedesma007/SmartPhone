import { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import slider from '../../Helpers/slider.json'
import './CarouselHome.css'
import ReactPlayer from 'react-player/youtube'


const CarouselHome = () => {

  const style = {
      position: 'absolute',
      top: '44%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 600,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 0,
  };
  

  return (
<Carousel>
    {
    slider.map(item => {
      const [open, setOpen] = useState(false);

      const handleOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      return (
        <Box key={item.id}>
          <Button onClick={handleOpen}>
            <img src={item.image} alt={item.title} height={'100%'} width={'100%'} />
          </Button>
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <ReactPlayer url={item.video} controls width='100%'/>
            </Box>
          </Modal>
        </Box>
      );
    })}
  </Carousel>
  )
}

export default CarouselHome  