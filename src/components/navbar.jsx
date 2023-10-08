import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CustomButton from './button';
import Avatar from './avatar';

const logoPath = process.env.PUBLIC_URL + '/img/logo.jpeg';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Avatar />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginLeft: '20%',
            
            }}
          >
            <CustomButton label="Lorem ipsum" backgroundColor="rgb(233, 179, 132)" color="black" />
            <Box sx={{ marginRight: '15%', marginTop: '10%', marginBottom: '10%' }} />
            <CustomButton label="Lorem ipsum" backgroundColor="rgb(161, 204, 209)" color="black" />
            <Box sx={{ marginRight: '5%', marginTop: '10%', marginBottom: '10%' }}  />
            <CustomButton label="Lorem ipsum" backgroundColor="rgb(161, 204, 209)" color="black" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}




