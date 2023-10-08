import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MediaCard from './mediacard';
import './mainFeaturedPostStyle/style.css';


function MainFeaturedPost(props) {
  const post = {
    image: props.imagelink,
    imageText: 'Testo alternativo dell\'immagine',
    title: 'Lorem ipsum dolor sit amet,',
    description: 'Lorem del post.',
    linkText: 'Lorem ipsum dolor sit amet,',
  };

  return (
    <div className='container'>
      <Paper className='main-featured-post'>
        <Grid container>
          <Grid item md={12}>
            <div>
              <Typography component="h1" variant="h5" color="inherit" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body2" color="inherit" paragraph>
                {post.description}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <MediaCard image="https://www.state.gov/wp-content/uploads/2019/04/shutterstock_720444505v2-2208x1406-1.jpg" />
    </div>
  );
  
  }
export default MainFeaturedPost;

