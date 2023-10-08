import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CustomButton from './button';

const cardActionsStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const cardStyle = {
  minWidth: '200px',
  marginRight: '20px',
  marginLeft: '20px',
  marginBottom: '20px', 
  minHeight:  '100px', 
};

const imageStyle = {
  height: '200px', 
  width: '150px', 
  margin: 'auto', 
};


export default function BasicCard2(props) {
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <div style={imageStyle}>
          <img
            alt="The house from the offer."
            src={props.link}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions sx={cardActionsStyle}>
        <CustomButton
          label="Lorem ipsum"
          backgroundColor="rgb(233, 179, 132)"
          color="black"
        />
      </CardActions>
    </Card>
  );
}

