import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const FavoriteEmpty = () => {
  return (
    <>
    <Box sx={{display:'flex', justifyContent:'center', marginTop: 5}}> 
      <img src="../../../../img/LogoFovorite.png" style={{width:'7%'}}/>
      
    </Box>
    <Box sx={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
     <Button variant="contained" component={Link} to='/product'>Elige tus productos favoritos</Button> 
    </Box>
    </>
  )
}

export default FavoriteEmpty