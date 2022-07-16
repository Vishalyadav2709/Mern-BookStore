import React from 'react'

import {Avatar, Button, Typography} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './About.css';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className='contain'>
     <div className="cardd">
     <Avatar alt="Remy Sharp" src="https://cdn.dribbble.com/users/3293507/screenshots/14667603/media/d8cbe035a61f64afdf6deabca5182842.jpg?compress=1&resize=400x300&vertical=top" 
     sx={{ mt: "auto", 
      width:'100%',
      height:'100%'
     }}/>
      
      
       <Button sx={{ mt: "auto"}}>
        <h1> About Us </h1>
       </Button>
       <Typography style={{fontSize:'20px',padding:'10px'}}> A good book description is a detailed, descriptive copy that is good for public display, used for your book marketing, book discovery, and for sales purposes. It helps potential buyers find and understand your book. It's your pitch. Your chance to get people interested. </Typography>
       <Typography  style={{fontSize:'20px' ,padding:'10px'}}> A good book description is a detailed, descriptive copy that is good for public display, used for your book marketing, book discovery, and for sales purposes. It helps potential buyers find and understand your book. It's your pitch. Your chance to get people interested. </Typography>
       <Button sx={{ mt: "auto"}}>
        <h1> Contact Us </h1>
       </Button>
       <Typography style={{fontSize:'20px' ,padding:'10px'}}> <h2> Feel Free To Contact Us </h2></Typography>
       <div className='icons'>
       <a href='#' target='_blank' > <WhatsAppIcon sx={{ mt: "auto", fontSize:"50px", color:"green"}} /> </a>
       <a href='#' target='_blank' > <InstagramIcon  sx={{ mt: "auto", fontSize:"50px", color:"red"}} /></a>
        <a href='https://www.linkedin.com/in/vishal-yadav-0a8365209/' target='_blank' > <LinkedInIcon  sx={{ mt: "auto", fontSize:"50px", color:"blue"}} /> </a> 
        <a href='https://github.com/Vishalyadav2709/Vishalyadav2709' target='_blank' >  <GitHubIcon  sx={{ mt: "auto", fontSize:"50px",color:"black"}} /></a>

       </div>
       
     </div>
    </div>
  )
}

export default About