import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ label, backgroundColor, color }) => {
  return (
    <Button
      sx={{
        backgroundColor: backgroundColor,
        color: color,
        padding: '1% 1%',
        '&:hover': {
          backgroundColor: backgroundColor,
        },
      }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;

