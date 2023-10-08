import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card
      sx={{
        margin: '0 auto',
        marginBottom: '5%',
        minHeight: '200px', 
        minWidth: '200px', 
        width: '30%', 
        marginTop: '5%',
        marginLeft: '5%',
      }}
    >
      <CardMedia
        component="img"
        height="150"
        image={props.image}
        alt="city" 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lorem ipsum dolor
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </CardContent>
    </Card>
  );
}
