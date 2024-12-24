import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import CssBaseline from '@mui/material/CssBaseline';

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminCourses from './pages/admin/Courses';
import AdminVideos from './pages/admin/Videos';

// Create RTL cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// Create modern theme
const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Tajawal, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      background: 'linear-gradient(45deg, #60A5FA, #34D399)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#fff',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#fff',
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#60A5FA',
      light: '#93C5FD',
      dark: '#2563EB',
    },
    secondary: {
      main: '#34D399',
      light: '#6EE7B7',
      dark: '#059669',
    },
    background: {
      default: '#111827',
      paper: '#1F2937',
    },
    text: {
      primary: '#F9FAFB',
      secondary: '#D1D5DB',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          textTransform: 'none',
          fontSize: '1.1rem',
          padding: '10px 24px',
        },
        contained: {
          background: 'linear-gradient(45deg, #60A5FA, #34D399)',
          '&:hover': {
            background: 'linear-gradient(45deg, #2563EB, #059669)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          background: 'rgba(31, 41, 55, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div style={{ 
            minHeight: '100vh',
            background: 'linear-gradient(to bottom right, #111827, #1F2937)',
          }}>
            <Routes>
              {/* Admin Routes */}
              <Route path="/admin" element={
                <AdminLayout>
                  <Routes>
                    <Route index element={<AdminDashboard />} />
                    <Route path="courses" element={<AdminCourses />} />
                    <Route path="videos" element={<AdminVideos />} />
                  </Routes>
                </AdminLayout>
              } />

              {/* Public Routes */}
              <Route path="/" element={
                <>
                  <Navbar />
                  <Home />
                </>
              } />
              <Route path="/courses" element={<Courses />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
