import React, { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard as DashboardIcon,
  VideoLibrary as VideoIcon,
  School as CourseIcon,
  People as PeopleIcon,
  ExitToApp as LogoutIcon,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const AdminLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const menuItems = [
    { text: 'لوحة التحكم', icon: <DashboardIcon />, path: '/admin' },
    { text: 'الدورات', icon: <CourseIcon />, path: '/admin/courses' },
    { text: 'الفيديوهات', icon: <VideoIcon />, path: '/admin/videos' },
    { text: 'المستخدمين', icon: <PeopleIcon />, path: '/admin/users' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap sx={{ color: '#60A5FA' }}>
          Zero2Aura Admin
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              '&.Mui-selected': {
                background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))',
              },
            }}
          >
            <ListItemIcon sx={{ color: location.pathname === item.path ? '#3B82F6' : 'inherit' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="تسجيل الخروج" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          background: 'rgba(17, 24, 39, 0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            لوحة التحكم
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'rgba(17, 24, 39, 0.95)',
              color: 'white',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: 8,
          background: theme.palette.background.default,
          minHeight: '100vh',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
