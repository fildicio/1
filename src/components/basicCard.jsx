import React from 'react';
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
  Minwidth: '30%',
  Minheight: '30%',
  marginRight: '3%', 
  marginLeft: '3%',

};

const imgContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

export default function BasicCard(props) {
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography sx={{ fontSize: '1rem' }} color="text.secondary" gutterBottom>
        Lorem ipsum
        </Typography>
        <div style={imgContainerStyle}>
          <img
            src={props.link}
            alt="Description of the image"
            style={{ width: '200px', height: '150px' , minwidth: '100px', minheight: '150px' }}
          />
        </div>
        <Typography sx={{ mb: '1.5%', fontSize: '0.8rem' }} color="text.secondary">
        Lorem ipsum
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          <br />
        </Typography>
      </CardContent>
      <CardActions sx={cardActionsStyle}>
        <CustomButton
          label=" Lorem ipsum"
          backgroundColor="rgb(233, 179, 132)"
          color="black"
        />
      </CardActions>
    </Card>
  );
}
