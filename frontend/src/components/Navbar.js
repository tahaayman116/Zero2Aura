import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'الرئيسية', path: '/' },
    { label: 'الدورات', path: '/courses' },
    { label: 'المسار التعليمي', path: '/learning-path' },
    { label: 'المجتمع', path: '/community' },
  ];

  const isActive = (path) => location.pathname === path;

  const NavLink = ({ item }) => (
    <Button
      component={RouterLink}
      to={item.path}
      sx={{
        position: 'relative',
        color: 'white',
        fontSize: '1rem',
        fontWeight: 500,
        px: 3,
        py: 1,
        borderRadius: '30px',
        transition: 'all 0.3s ease',
        background: isActive(item.path) 
          ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))'
          : 'transparent',
        '&:hover': {
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.15), rgba(16, 185, 129, 0.15))',
          transform: 'translateY(-2px)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: isActive(item.path) ? '100%' : '0%',
          height: '2px',
          background: 'linear-gradient(90deg, #3B82F6, #10B981)',
          transition: 'all 0.3s ease',
          transform: 'translateX(-50%)',
        },
      }}
    >
      {item.label}
    </Button>
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled
          ? 'rgba(17, 24, 39, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={2}
          px={{ xs: 2, md: 4 }}
        >
          <Typography
            component={RouterLink}
            to="/"
            sx={{
              fontSize: '1.5rem',
              fontWeight: 700,
              textDecoration: 'none',
              color: '#60A5FA',
              letterSpacing: '0.5px',
            }}
          >
            Zero2Aura
          </Typography>

          {!isMobile ? (
            <Stack direction="row" spacing={1} alignItems="center">
              {navItems.map((item) => (
                <NavLink key={item.label} item={item} />
              ))}
              <Button
                variant="contained"
                component={RouterLink}
                to="/register"
                sx={{
                  ml: 2,
                  px: 4,
                  py: 1,
                  borderRadius: '30px',
                  background: 'linear-gradient(45deg, #3B82F6, #10B981)',
                  boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.3)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px 0 rgba(59, 130, 246, 0.4)',
                  },
                }}
              >
                ابدأ الآن
              </Button>
            </Stack>
          ) : (
            <IconButton
              onClick={() => setIsOpen(true)}
              sx={{
                color: 'white',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                '&:hover': { background: 'rgba(255, 255, 255, 0.2)' },
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Container>

      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 300,
            background: 'rgba(17, 24, 39, 0.95)',
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <Typography
              sx={{
                fontSize: '1.5rem',
                fontWeight: 700,
                background: 'linear-gradient(45deg, #3B82F6, #10B981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Zero2Aura
            </Typography>
            <IconButton
              onClick={() => setIsOpen(false)}
              sx={{ color: 'white' }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>

          <Divider sx={{ mb: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

          <List>
            <AnimatePresence>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ListItem
                    component={RouterLink}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    sx={{
                      borderRadius: '15px',
                      mb: 1,
                      background: isActive(item.path)
                        ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))'
                        : 'transparent',
                      '&:hover': {
                        background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.15), rgba(16, 185, 129, 0.15))',
                      },
                    }}
                  >
                    <ListItemText 
                      primary={item.label}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: '1.1rem',
                          fontWeight: 500,
                          color: isActive(item.path) ? '#3B82F6' : 'white',
                        },
                      }}
                    />
                  </ListItem>
                </motion.div>
              ))}
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <ListItem sx={{ mt: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  component={RouterLink}
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  sx={{
                    py: 1.5,
                    borderRadius: '30px',
                    background: 'linear-gradient(45deg, #3B82F6, #10B981)',
                    boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.3)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    '&:hover': {
                      background: 'linear-gradient(45deg, #2563EB, #059669)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  ابدأ الآن
                </Button>
              </ListItem>
            </motion.div>
          </List>
        </Box>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Navbar;
