import React from 'react';
import Navbar from './components/navbar';
import MainFeaturedPost from './components/mainFeaturedPost';
import BasicCard from './components/basicCard';
import BasicCard2 from './components/BasicCard2';
import CustomButton from './components/button';
import BasicTextFields from './components/basicTextFields';
import Footer from './components/footer';
import DemoCarousel from './components/carusel';
import './style/style.css'

function App() {
  return (
    <div>
      <div className='nav-container'>
        <Navbar />
      </div>
      <div>
        <MainFeaturedPost />
      </div>
      <div className='basic-container'>
      <BasicCard link="https://www.cityam.com/wp-content/uploads/2022/11/The-White-Lotus-2.jpg" />
      <BasicCard link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlU4UroXBeVtYwvhHc9Np1Zq5BpbuBQfSPtzEKNrsFJfqZwKQFCFP9UmeLZqf-GnkehSU&usqp=CAU" />
      </div>
      <div className='basic2-container'>
        <BasicCard2 link=" https://www.marriott.com/content/dam/marriott-renditions/dm-static-renditions/tx/emea/hws/s/seztx/en_us/photo/unlimited/assets/tx-seztx-pool-21834-square.jpg"/>
        <BasicCard2 link="https://theluxuryeditor.com/wp-content/uploads/2018/07/115888665.jpg" />
        <BasicCard2 link="https://www.travelandleisure.com/thmb/CafHtrdpItiG4XmCt7fHFzgY0y8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/caesar-augustus-lead-ITRESORTSWB20-227e01eef21746ac9320e9341133fd6a.jpg" />
        <BasicCard2 link="https://thumbs.dreamstime.com/b/colors-italy-series-manarola-village-cinque-terre-beautiful-liguria-75217180.jpg" />
      </div>
      <div>
      </div>
      <div className='button-container'>
        <CustomButton label="Lorem Ipsum" backgroundColor="red" color="black" />
      </div>
      <div className='basicTextFields-container'>
       <BasicTextFields />
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </div>
    
  );
}


export default App;

