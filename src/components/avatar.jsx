import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const logoPath = process.env.PUBLIC_URL + '/img/logo.jpeg'; 

export default function CustomAvatar() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Logo"
        src={logoPath}
        sx={{ width: 50, height: 50 }}
      />
    </Stack>
  );
}
