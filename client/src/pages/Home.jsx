import React, { useState } from 'react';

import '../assets/styles/home-styles/Home.css';
import { Box, Button, ListItem, Typography } from '@mui/material';
import { LuArrowUpRight, LuHand } from 'react-icons/lu';
import LogoLoop from '../components/shared/LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si';
import { useSelector } from 'react-redux';
import AboutMe from '../components/home/AboutMe';
import MyProjects from '../components/home/MyProjects';
import AreaOfExpertise from '../components/home/AreaOfExpertise';
import ChipsLoop from '../components/shared/ChipsLoop';
import Testimonal from '../components/home/Testimonal';
import Footer from '../components/home/Footer';
import SplitText from '../components/shared/SplitText';
import Overlay from '../components/shared/Overlay';
import AnimatedButton from '../components/shared/AnimatedButton';
import { homeData } from '../config';

const Home = () => {
  const styles = useSelector((state) => state.theme.styles); // Get styles from Redux
  const themeValues = useSelector((state) => state.theme);
  const [toggleTestimonial, setToggleTestimonial] = useState(false);
  const buttonClass =
    'knowme-button' +
    ' ' +
    (themeValues.mode === 'light' ? 'light-mode' : 'dark-mode');

  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  const handleToggleTestimonial = () => {
    setToggleTestimonial(true);
  };

  return (
    <>
      <Overlay />
      <Box
        className="main"
        sx={{
          backgroundColor: styles?.mainTheme?.backgroundColor,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box className="inner-wrapper">
          <Typography
            variant="h1"
            sx={{
              fontSize: '16px',
              color: styles?.mainTheme?.color,
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <LuHand
              className="hand-wave"
              size={20}
              style={{ color: styles?.mainTheme?.highlightedColor }}
            />{' '}
            Hey! It's me Harsh,
          </Typography>

          <Typography
            className="headline"
            variant="h1"
            sx={{
              fontSize: '72px',
              fontWeight: '500',
              color: styles?.mainTheme?.color,
              width: '80%',
              lineHeight: '72px',
              marginTop: '2%',
              marginBottom: '4%',
              textAlign: 'center',
            }}
          >
            <SplitText
              text="Crafting purpose driven experiences that inspire & engage."
              delay={30}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              highlightedColor={styles?.mainTheme?.highlightedColor}
            />
          </Typography>
        </Box>

        <Box
          className="mobile-bottom"
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            className="mobile-bottom-inner"
            sx={{
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '15px',
            }}
          >
            {/* LINK PAGE */}
            <Box
              sx={{ color: '#8c8c9d', display: 'flex' }}
              className="all-links"
            >
              <ListItem
                sx={{
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  handleRedirect('https://www.linkedin.com/in/harshuserethe/')
                }
              >
                LinkedIn <LuArrowUpRight size={20} />
              </ListItem>
              <ListItem
                sx={{
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  handleRedirect('https://github.com/HarshUserethe')
                }
              >
                GitHub <LuArrowUpRight size={20} />
              </ListItem>
              <ListItem
                sx={{
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  handleRedirect('https://www.behance.net/harshuserethe')
                }
              >
                Benance <LuArrowUpRight size={20} />
              </ListItem>
              <ListItem
                sx={{
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  handleRedirect('https://www.credly.com/users/harsh-userethe')
                }
              >
                Credly <LuArrowUpRight size={20} />
              </ListItem>
            </Box>

            {/* SHORT SLOGAN */}
            <Box
              className="short-slogan-box"
              sx={{
                width: '45%',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <Typography
                variant="h1"
                sx={{ fontSize: '16px', color: '#8c8c9d' }}
              >
                I collaborate with clients and teams to design and build clean,
                accessible digital experiences that solve real problems and
                support business goals.
              </Typography>
              {/* <Button
                variant="outlined"
                color="primary"
                className={buttonClass}
              >
                Know Me Better
              </Button> */}
              <AnimatedButton
                color={styles?.mainTheme?.color}
                label={'Know Me Better'}
                hoverLabel={'Know Me Better'}
                btnWidth={'fit-content'}
                classMe={buttonClass}
                isClassName={true}
                hyperLink={'/about'}
              />
            </Box>
          </Box>
        </Box>

        {/* Logos Animation Container */}
        <Box
          className="emp-space-divider"
          style={{
            backgroundColor: styles?.mainTheme?.backgroundColor,
            borderColor: themeValues.mode === 'light' ? '#dfdfdf' : '#262626',
          }}
        ></Box>
      </Box>
      <LogoLoop
        logos={homeData.imageLogos}
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
      <AboutMe styles={styles} />
      <MyProjects />
      <AreaOfExpertise />
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
      {toggleTestimonial && <Testimonal />}
      <Footer />
    </>
  );
};

export default Home;
