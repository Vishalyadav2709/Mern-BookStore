import React, {useState} from 'react'
import {AppBar, Typography, Toolbar, Tabs, Tab} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom';

import './Header.css'
import Search from './Search';


const Header = () => {
    const [value, setvalue] = useState()
  return (
    <div>
        <AppBar sx={{ backgroundColor: '#232F3D'
        
      }} position='Sticky' >
            <Toolbar>
              <NavLink to = '/' style={{color:'white'}}>
            <Typography ><LibraryBooksIcon />
            
            </Typography> 
           
            
            </NavLink>

            <Typography>
            <p>Book-Store</p> 
            </Typography>

            <Search />
            <Tabs sx={{ml: 'auto',}}
            textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val) => setvalue(val) } >
                <Tab LinkComponent={NavLink} to="/" label='Home' />
                <Tab LinkComponent={NavLink} to="/add" label='Add Products' />
                <Tab LinkComponent={NavLink} to="/books" label='Books' />
                <Tab LinkComponent={NavLink} to="/about" label='About Us' />

            </Tabs>
            
            </Toolbar>
           

        </AppBar>
    </div>
  )
}

export default Header