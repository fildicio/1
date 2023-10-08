import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CustomButton from './button';
import Typography from '@mui/material/Typography';

function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h6" sx={{ alignSelf: 'flex-start' }}>
        Do you want to subscribe?
      </Typography>
      <TextField
        id="outlined-basic-1"
        label="Field 1"
        variant="outlined"
        disableAnimation // Don't know why but the animation doesn't turn off
      />
      <TextField
        id="outlined-basic-2"
        label="Field 2"
        variant="outlined"
        disableAnimation // Don't know why but the animation doesn't turn off
      />
      <CustomButton
        label="Black Button 1"
        backgroundColor="rgb(233, 179, 132)"
        color="black"
      />
    </Box>
  );
}

export default BasicTextFields;