import { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import slider from '../../Helpers/slider.json'
import ReactPlayer from 'react-player/youtube'
import './CarouselHome.css'

const CarouselHome = () => {

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
              <div className='videoContainer'>
                <ReactPlayer url={item.video} controls width='100%' height='60vh'/>
              </div>
            </Modal>
          </Box>
        );
      })}
    </Carousel>
    )
}

export default CarouselHome  