import React from 'react';
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { LuWifiOff, LuGithub, LuArrowLeft } from 'react-icons/lu';

const NotLive = () => {
  const themeValues = useSelector((state) => state.theme);
  const styles = themeValues?.styles;

  const mode = themeValues?.mode || 'dark';
  const isDark = mode === 'dark';

  const mainText = styles?.mainTheme?.color || (isDark ? '#fff' : '#000');
  const accent = styles?.mainTheme?.highlightedColor || (isDark ? '#b5fe6c' : '#30AF5B');
  const border =
    styles?.mainTheme?.chipBorder ||
    (isDark ? '1px solid rgba(82, 82, 82, 1)' : '1px solid rgba(180, 180, 180, 1)');

  const surface = isDark ? '#111116' : '#ffffff';

  const overlayGlow = isDark
    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 100%)'
    : '#fafef7';

  const handleViewSource = () => {
    const url = new URL(window.location.href);
    const source = url.searchParams.get('source');

    if (source) {
      window.open(source, '_blank', 'noopener,noreferrer');
      return;
    }

    alert('Source link not provided for this project.');
  };

  return (
    <Container maxWidth="md" sx={{ minHeight: '100vh', minWidth: '100vw', py: 4, backgroundColor:surface, display:'flex', justifyContent:'center', alignItems:'center' }}>
      <Box
        minHeight="100vh" 
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ background: 'surface '}}
      >
        <Paper
          elevation={0}
          sx={{
            width: '100%',
            p: { xs: 3.5, md: 6 },
            borderRadius: { xs: 4, md: 5 },
            textAlign: 'center',
            bgcolor: surface,
            color: mainText,
          }}
        >
          <Box
            sx={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              mx: 'auto',
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0,0,0,0.04)',
              border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
            }}
          >
            <LuWifiOff size={44} style={{ opacity: 0.85, color: mainText }} />
          </Box>

          <Typography
            variant="h3"
            fontWeight={800}
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem' },
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: '-0.02em',
            }}
          >
            Project Not Live
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 620,
              mx: 'auto',
              mb: 4,
              lineHeight: 1.85,
              color: isDark ? 'rgba(255,255,255,0.72)' : 'rgba(0,0,0,0.65)',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            This project currently doesn’t have a live deployment. It may still be under development,
            hosted privately, or available only as source code.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            {/* <Button
              variant="contained"
              size="large"
              startIcon={<LuGithub size={18} />}
              onClick={handleViewSource}
              sx={{
                background: accent,
                color: '#0a0b0c',
                fontWeight: 700,
                fontFamily: "'Poppins', sans-serif",
                '&:hover': {
                  background: isDark ? 'rgba(181, 254, 108, 0.92)' : 'rgba(48, 175, 91, 0.92)',
                },
              }}
            >
              View Source Code
            </Button> */}

            <Button
              variant="outlined"
              size="large"
              startIcon={<LuArrowLeft size={18} />}
              onClick={() => window.history.back()}
              sx={{
                borderColor: isDark ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.22)',
                color: mainText,
                fontWeight: 700,
                fontFamily: "'Poppins', sans-serif",
                '&:hover': {
                  borderColor: accent,
                  background: isDark ? 'rgba(181, 254, 108, 0.06)' : 'rgba(48, 175, 91, 0.06)',
                },
              }}
            >
              Go Back
            </Button>
          </Stack>

          <Typography
            variant="caption"
            display="block"
            sx={{
              mt: 5,
              color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)',
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: '0.03em',
            }}
          >
            Check back later for deployment updates.
          </Typography>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: { xs: 160, sm: 220 },
                height: 2,
                borderRadius: 999,
                background: isDark ? 'rgba(181, 254, 108, 0.35)' : 'rgba(48, 175, 91, 0.35)',
                boxShadow: isDark ? '0 0 24px rgba(181, 254, 108, 0.25)' : '0 0 20px rgba(48, 175, 91, 0.18)',
              }}
            />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default NotLive;

