import React, { useState } from 'react';
import { Box, Typography, Avatar, Button, Collapse, Link } from '@mui/material';
import { LuSparkle } from 'react-icons/lu';
import ShinyText from '../shared/ShinyText';
import { useSelector } from 'react-redux';
import '../../assets/styles/about-styles/Expeience.css';
import { experienceData } from '../../config';

const Experience = () => {
  const [showMore, setShowMore] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const styles = useSelector((state) => state.theme.styles);
  const initialDisplayCount = 4;

  const displayedExperiences = showMore
    ? experienceData
    : experienceData.slice(0, initialDisplayCount);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleToggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Box
      className="experience-container"
      sx={{ backgroundColor: styles?.mainTheme?.backgroundColor }}
    >
      {/* Left Section */}
      <Box className="experience-left">
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
              text="Work History"
              disabled={false}
              speed={1.2}
              className="shinny-txt"
              highlightedColor={styles?.mainTheme?.highlightedColor}
            />
          </Typography>
        </Box>
        <Typography
          sx={{ color: styles?.mainTheme?.color }}
          className="experience-title"
        >
          Experience
        </Typography>
        <Typography className="experience-description">
          I have worked with some of the most innovative industry leaders to
          help build their top-notch products.
        </Typography>
      </Box>

      {/* Right Section */}
      <Box className="experience-right">
        <Box className={`experience-list ${showMore ? 'expanded' : ''}`}>
          {displayedExperiences.map((exp, index) => (
            <Box key={exp.id} className="experience-item-wrapper">
              <Box className="experience-item">
                <Avatar
                  src={exp.logo}
                  className="experience-avatar"
                  sx={{ bgcolor: exp.color, padding: 0.5 }}
                  alt={exp.company}
                >
                  {exp.company.charAt(1)}
                </Avatar>
                <Box className="experience-details">
                  <Typography
                    className="experience-role"
                    onClick={() => handleToggleExpand(exp.id)}
                    sx={{ cursor: 'pointer', color: styles?.mainTheme?.color }}
                  >
                    {exp.role}
                  </Typography>
                  <Link href={exp.companylink} target="_blank" rel="noopener">
                    <Typography className="experience-company">
                      {exp.company}
                    </Typography>
                  </Link>
                </Box>
                <Typography className="experience-duration">
                  {exp.startDate} — {exp.endDate}
                </Typography>
              </Box>

              <Collapse in={expandedId === exp.id} timeout="auto" unmountOnExit>
                <Box className="experience-description-box">
                  <Typography className="experience-description-text">
                    {exp.description}
                  </Typography>
                </Box>
              </Collapse>
            </Box>
          ))}
        </Box>

        {experienceData.length > initialDisplayCount && (
          <Box className="show-more-container">
            <Button
              sx={{ color: styles?.mainTheme?.color }}
              className="show-more-btn"
              onClick={handleShowMore}
            >
              {showMore ? 'Show Less' : 'Show More'}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Experience;
