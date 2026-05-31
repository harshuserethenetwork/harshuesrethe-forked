import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/styles/home-styles/About.css';
import Overlay from '../components/shared/Overlay';
import { Box, Button, ListItem, Typography } from '@mui/material';
import AboutHero from '../components/about/AboutHero';
import ChipsLoop from '../components/shared/ChipsLoop.jsx';
import Experience from '../components/about/Experience.jsx';
import MyProccess from '../components/about/MyProccess.jsx';
import MyAwards from '../components/about/MyAwards.jsx';
import Footer from '../components/home/Footer.jsx';
// import HarshUseretheImage from '../assets/images/harshuseretheimg.png';'
import { homeData, aboutData } from '../config.js';

const About = () => {
  const styles = useSelector((state) => state.theme.styles);
  const themeValues = useSelector((state) => state.theme);
  const HarshUseretheImage = aboutData[0].hero_image_url;
  return (
    <>
      <Overlay />
      <Box
        className="main-about"
        sx={{
          backgroundColor: styles?.mainTheme?.backgroundColor,
        }}
      >
        <AboutHero
          imageUrl={HarshUseretheImage}
          title={'A creative developer & digital designer'}
          titleHighlight={'creative developer'}
          subtitle={'& digital designer'}
          description={
            'I collaborate with brands globally to design impactful, mission-focused websites that drive results and achieve business goals.'
          }
          circularTagText={'LETS TALK • LETS TALK • LETS TALK • '}
          fontFamily={"'Poppins', sans-serif"}
          styles={styles}
        />

        <Box className="chip-logo-wrapper">
          <ChipsLoop
            logos={homeData.chipLogos}
            speed={100}
            direction="left"
            logoHeight={100}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor={styles?.mainTheme?.backgroundColor}
            ariaLabel="Technology partners"
          />
        </Box>
        <Experience />
        <MyProccess />
        <MyAwards />
        <Footer />
      </Box>
    </>
  );
};

export default About;
