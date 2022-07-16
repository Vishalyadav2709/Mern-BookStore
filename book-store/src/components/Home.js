import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Carousels, { CarouselsItem } from './Carousels'


const Home = () => {
  return (
    <div className='home'>

      <Carousels >
        <CarouselsItem ><img src={'https://clubrunner.blob.core.windows.net/00000008602/Images/Kayako/2017-carousel/Partner-With-Us-Alt3.jpg'} alt={"Book"} width="100%" /></CarouselsItem>
        <CarouselsItem><img src={'https://clubrunner.blob.core.windows.net/00000008602/Images/Kayako/2017-carousel/Partner-With-Us-Alt4.jpg'} alt={"Book"} width="100%" /></CarouselsItem>
        <CarouselsItem><img src={'https://clubrunner.blob.core.windows.net/00000008602/Images/Kayako/2017-carousel/Take-Action-Alt4.jpg'} alt={"Book"} width="100%" /></CarouselsItem>

      </Carousels>
    
<div className="card1">
 
 
<img src={'https://image.cnbcfm.com/api/v1/image/106574283-1591894891653coursera-notext.png?v=1591906737&w=929&h=523'} alt={"Book"} />
     
     
      <Button sx={{ mt: "auto", color:"black" }}>
        Read More...
      </Button>
      
    </div>
    <div className="card2">
 
 
<img src={'https://image.cnbcfm.com/api/v1/image/106885417-1621444601674-UDACITY-NOTEXT.png?v=1621444661&w=720&h=405'} alt={"Book"} />
     
     
      <Button sx={{ mt: "auto", color:"black"  }}>
      Read More...
      </Button>

     
      
    </div>
    <div className="card3">
 
 
<img src={'https://cdn.theatlantic.com/thumbor/tr8Fs4-_ja0FEirk5Df00uw4K5o=/0x38:2000x1163/1600x900/media/img/mt/2018/01/theatlantic_02_lead/original.png'} alt={"Book"} />
     
     
      <Button sx={{ mt: "auto", color:"black"  }}>
      Read More...
      </Button>
      
    </div>
      <Box display='flex' flexDirection='column' alignItems='center' flexWrap='wrap' marginLeft='30px' marginRight='30px' >
        <Button LinkComponent={Link} to ='/books'  sx={{marginTop:'30px', background:'orangered'}} variant='contained'>
          <Typography variant='h3'>
          😃 📚  Explore All Books 📚 😃 
          </Typography>
        </Button>

      
        
      </Box>
    </div>
    
    
  )
}

export default Home