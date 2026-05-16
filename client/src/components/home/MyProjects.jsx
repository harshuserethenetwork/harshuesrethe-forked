import { Typography, Box, Button } from '@mui/material';
import { LuSparkle } from 'react-icons/lu';
import React, { useState } from 'react';
import '../../assets/styles/home-styles/MyProjects.css';
import { useSelector } from 'react-redux';
import ShinyText from '../shared/ShinyText';
import SplitText from '../shared/SplitText';
import AnimatedButton from '../shared/AnimatedButton';
import { homeData } from '../../config';
import { Link } from 'react-router-dom';

const MyProjects = () => {
  const styles = useSelector((state) => state.theme.styles); // Get styles from Redux
  const themeValues = useSelector((state) => state.theme);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const buttonClass =
    'knowme-button' +
    ' ' +
    (themeValues.mode === 'light' ? 'light-mode' : 'dark-mode');

  const handleHoverState = (index) => {
    setHoveredIndex(index);
  };

  const clearHoverState = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      {/* SECTION HEADER */}
      <Box
        sx={{
          backgroundColor: styles?.mainTheme?.backgroundColor,
          padding: '90px',
          paddingTop: '150px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <LuSparkle color={styles?.mainTheme?.highlightedColor} />
          <Typography
            sx={{
              color: 'greenyellow',
              fontSize: '16px',
              textTransform: 'uppercase',
            }}
            variant="h3"
            color="initial"
          >
            <ShinyText
              text="My Work"
              disabled={false}
              speed={1.2}
              className="shinny-txt"
              highlightedColor={styles?.mainTheme?.highlightedColor}
            />
          </Typography>
        </Box>

        <Typography
          variant="h3"
          sx={{
            color: styles?.mainTheme?.color,
            fontSize: '48px',
            marginTop: '10px',
            fontFamily: 'clash_display',
          }}
        >
          <SplitText
            key="featured-projects"
            text="Featured Projects"
            delay={30}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
        </Typography>

        <Typography sx={{ color: '#8c8c9d', marginTop: '5px' }}>
          Here's a curated selection showcasing my expertise and the achieved
          results.
        </Typography>
      </Box>

      {/* PROJECT GRID */}
      <Box
        sx={{
          pl: 8,
          pr: 8,
          pb: 8,
          backgroundColor: styles?.mainTheme?.backgroundColor,
        }}
        className="projects-wrapper py-md grid grid-cols-1 grid-rows-[masonry] gap-y-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-0 px-10"
      >
        {homeData?.projects?.map((p, index) => (
          <div
            key={index}
            onMouseEnter={() => handleHoverState(index)}
            onMouseLeave={clearHoverState}
            style={{ position: 'relative' }}
            className="opacity-container-child group h-fit w-full cursor-pointer sm:even:mt-14"
          >
            {/* Hovering Overlay */}
            <Box
              sx={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                inset: 0,
                backgroundColor:
                  hoveredIndex === null
                    ? 'transparent'
                    : hoveredIndex === index
                      ? 'transparent'
                      : styles?.mainTheme?.specialHoverColor,
                transition: 'background-color 0.3s ease',
                pointerEvents: 'none',
                zIndex: '1',
              }}
            />
            {/* <a href={p.link} className="h-fit w-full"> */}
            <Link to={p.link} className="h-fit w-full">
              <div
                style={{
                  backgroundColor: styles?.mainTheme?.backgroundColor,
                  padding: '25px',
                  marginTop: p.margin,
                }}
                className="aspect-3/2 w-full overflow-hidden rounded-3xl prj-cards"
              >
                <div
                  style={{
                    backgroundColor: p.bg,
                    width: '100%',
                    height: '100%',
                    borderRadius: '25px',
                  }}
                >
                  <img
                    alt={p.title}
                    src={p.img}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '25px',
                      scale:
                        hoveredIndex === null
                          ? '1.05'
                          : hoveredIndex === index
                            ? '1.05'
                            : '1',
                      transition: 'all .5s',
                    }}
                  />
                </div>
              </div>

              {/* TEXT SECTION */}
              <div className="mt-4 space-y-2 inner-card-lable">
                <h5
                  className="text-white text-xl"
                  style={{ color: styles?.mainTheme?.color }}
                >
                  {p.title}
                </h5>

                <div className="flex justify-between">
                  <div className="flex flex-wrap gap-2">
                    <p className="text-sm text-text-secondary text-gray-400">
                      {p.tag}
                    </p>
                  </div>

                  <p className="text-sm text-text-secondary text-gray-400">
                    {p.year}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: styles?.mainTheme?.backgroundColor,
          width: '100%',
        }}
      >
        <AnimatedButton
          color={styles?.mainTheme?.color}
          label={'View All Projects'}
          hoverLabel={'View All Projects'}
          btnWidth={'fit-content'}
          classMe={buttonClass}
          isClassName={true}
          hyperLink={'/project'}
        />
      </Box>
    </>
  );
};

export default MyProjects;
