import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  Button,
  Typography,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  LuMail,
  LuMenu,
  LuX,
  LuLayoutDashboard,
  LuUsers,
  LuStar,
  LuBadge,
} from 'react-icons/lu';

const SIDEBAR_WIDTH = 220; // match your --sidebar-width CSS variable value

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <LuLayoutDashboard size={17} />,
  },
  { id: 'analytics', label: 'Analytics', icon: <LuBadge size={17} /> },
  { id: 'clients', label: 'Clients', icon: <LuUsers size={17} /> },
  { id: 'messages', label: 'Messages', icon: <LuMail size={17} /> },
  { id: 'reviews', label: 'Reviews', icon: <LuStar size={17} /> },
];

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleMobileMenu = () => setIsMobileOpen((prev) => !prev);

  const handleMenuItemClick = (id) => {
    setActiveTab(id);
    setIsMobileOpen(false);
  };

  const sidebarContent = (
    <Box
      sx={{
        width: SIDEBAR_WIDTH,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'var(--surface)',
        borderRight: '1px solid var(--border)',
      }}
    >
      {/* Brand Header */}
      <Box
        sx={{
          px: '16px',
          pt: '20px',
          pb: '18px',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--accent)',
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
            }}
          >
            Harsh Userethe
          </Typography>
          <Typography
            sx={{
              fontSize: '9px',
              fontWeight: 600,
              color: 'var(--text-muted)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              mt: '2px',
            }}
          >
            Premium Workspace
          </Typography>
        </Box>

        {/* Close button — only visible on mobile inside drawer */}
        {isMobile && (
          <IconButton
            onClick={toggleMobileMenu}
            size="small"
            sx={{ color: 'var(--text-secondary)', p: '4px' }}
          >
            <LuX size={18} />
          </IconButton>
        )}
      </Box>

      {/* Nav Menu */}
      <List
        sx={{
          flex: 1,
          px: '8px',
          py: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
        }}
        disablePadding
      >
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <ListItem key={item.id} disablePadding>
              <Button
                onClick={() => handleMenuItemClick(item.id)}
                fullWidth
                disableRipple={false}
                startIcon={
                  <Box
                    sx={{
                      width: '18px',
                      height: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: 'inherit',
                    }}
                  >
                    {item.icon}
                  </Box>
                }
                sx={{
                  justifyContent: 'flex-start',
                  gap: '10px',
                  px: '10px',
                  py: '8px',
                  borderRadius: 'var(--radius)',
                  fontSize: '13px',
                  fontWeight: 500,
                  textTransform: 'none',
                  lineHeight: 1,
                  position: 'relative',
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  bgcolor: isActive ? 'var(--accent-bg)' : 'transparent',
                  '& .MuiButton-startIcon': {
                    margin: 0,
                    color: 'inherit',
                  },
                  '&:hover': {
                    bgcolor: isActive ? 'var(--accent-bg)' : 'var(--bg)',
                    color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                  },
                  // Active left-bar indicator
                  '&::before': isActive
                    ? {
                        content: '""',
                        position: 'absolute',
                        left: '-8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '3px',
                        height: '20px',
                        bgcolor: 'var(--accent)',
                        borderRadius: '0 3px 3px 0',
                      }
                    : {},
                }}
              >
                {item.label}
              </Button>
            </ListItem>
          );
        })}
      </List>

      {/* Footer */}
      <Box
        sx={{
          px: '16px',
          py: '14px',
          borderTop: '1px solid var(--border-light)',
        }}
      >
        <Typography
          sx={{
            fontSize: '11px',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Admin Panel
        </Typography>
        <Typography
          sx={{
            fontSize: '10px',
            color: 'var(--text-muted)',
            mt: '2px',
          }}
        >
          v1.0
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile hamburger toggle */}
      {isMobile && (
        <IconButton
          onClick={toggleMobileMenu}
          sx={{
            display: 'flex',
            position: 'fixed',
            top: '12px',
            left: '12px',
            zIndex: 300,
            bgcolor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            p: '6px',
            color: 'var(--text-primary)',
            boxShadow: 'var(--shadow)',
            '&:hover': {
              bgcolor: 'var(--surface)',
            },
          }}
        >
          <LuMenu size={20} />
        </IconButton>
      )}

      {/* Desktop: permanent sidebar */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: SIDEBAR_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: SIDEBAR_WIDTH,
              boxSizing: 'border-box',
              border: 'none',
              bgcolor: 'transparent',
            },
          }}
        >
          {sidebarContent}
        </Drawer>
      )}

      {/* Mobile: temporary drawer */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={isMobileOpen}
          onClose={toggleMobileMenu}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': {
              width: SIDEBAR_WIDTH,
              boxSizing: 'border-box',
              border: 'none',
              bgcolor: 'transparent',
              boxShadow: '4px 0 24px rgba(0,0,0,0.12)',
            },
          }}
        >
          {sidebarContent}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
