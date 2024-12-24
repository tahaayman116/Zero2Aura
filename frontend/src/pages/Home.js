import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  useTheme,
  Avatar,
  IconButton,
  Chip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const features = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'تعلم البرمجة',
      description: 'ابدأ رحلتك في عالم البرمجة مع دروس تفاعلية وتمارين عملية',
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      title: 'مسار تعليمي متكامل',
      description: 'خطة دراسية منظمة تأخذك من المبتدئ إلى المحترف',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40, color: '#F59E0B' }} />,
      title: 'مجتمع داعم',
      description: 'تواصل مع مجتمع من المبرمجين العرب وشارك خبراتك',
    },
  ];

  const popularCourses = [
    {
      title: 'Python للمبتدئين',
      instructor: 'أحمد محمد',
      rating: 4.8,
      students: 1234,
      duration: '12 ساعة',
      level: 'مبتدئ',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
    },
    {
      title: 'React.js المتقدم',
      instructor: 'سارة أحمد',
      rating: 4.9,
      students: 856,
      duration: '15 ساعة',
      level: 'متقدم',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80',
    },
    {
      title: 'تطوير تطبيقات الويب',
      instructor: 'محمد علي',
      rating: 4.7,
      students: 2156,
      duration: '20 ساعة',
      level: 'متوسط',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80',
    },
  ];

  const stats = [
    { number: '10K+', label: 'طالب', icon: <GroupIcon /> },
    { number: '100+', label: 'دورة تدريبية', icon: <SchoolIcon /> },
    { number: '50+', label: 'مدرب محترف', icon: <StarIcon /> },
    { number: '95%', label: 'نسبة النجاح', icon: <TrendingUpIcon /> },
  ];

  return (
    <MotionBox>
      {/* Hero Section */}
      <MotionBox
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
          minHeight: '100vh',
          pt: { xs: 16, md: 24 },
          pb: { xs: 12, md: 16 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.3), transparent 70%), radial-gradient(circle at bottom left, rgba(16, 185, 129, 0.3), transparent 70%)',
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '150%',
            height: '150%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            animation: 'pulse 15s ease-in-out infinite',
          },
          '@keyframes pulse': {
            '0%, 100%': {
              transform: 'translate(-50%, -50%) scale(1)',
            },
            '50%': {
              transform: 'translate(-50%, -50%) scale(1.2)',
            },
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid 
            container 
            spacing={4} 
            alignItems="center" 
            direction="row-reverse"
          >
            <Grid 
              item 
              xs={12} 
              md={6}
              sx={{
                textAlign: 'right',
                pl: { md: 8 },
                '& button': {
                  ml: { xs: 1, md: 2 },
                  mr: { xs: 1, md: 0 },
                },
              }}
            >
              <MotionTypography
                variant="h1"
                gutterBottom
                sx={{
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  fontWeight: 800,
                  lineHeight: 1.2,
                  mb: 3,
                  direction: 'rtl',
                  background: 'linear-gradient(45deg, #60A5FA 30%, #34D399 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 10px rgba(96, 165, 250, 0.3)',
                }}
              >
                تعلم البرمجة مع
                <Box
                  component="div"
                  sx={{
                    background: 'linear-gradient(45deg, #3B82F6, #10B981)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    position: 'relative',
                    display: 'inline-block',
                    px: 2,
                    mx: 1,
                    textShadow: '0 2px 10px rgba(59, 130, 246, 0.3)',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-8px',
                      left: 0,
                      width: '100%',
                      height: '8px',
                      background: 'linear-gradient(90deg, #3B82F6, #10B981)',
                      borderRadius: '4px',
                      opacity: 0.3,
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-4px',
                      left: '10%',
                      width: '80%',
                      height: '2px',
                      background: 'linear-gradient(90deg, #3B82F6, #10B981)',
                      borderRadius: '2px',
                    },
                  }}
                >
                  Zero2Aura
                </Box>
              </MotionTypography>
              <MotionTypography
                variant="h5"
                color="textSecondary"
                sx={{
                  mb: 6,
                  maxWidth: '100%',
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.9)',
                  direction: 'rtl',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                }}
              >
                منصة تعليمية تهدف لاخذك من الصفر للاحتراف
              </MotionTypography>
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 2,
                  justifyContent: 'flex-end',
                  flexWrap: 'wrap',
                }}
              >
                <MotionButton
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/courses')}
                  sx={{
                    px: 4,
                    py: 2,
                    borderRadius: '30px',
                    background: 'linear-gradient(45deg, #3B82F6, #10B981)',
                    boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 28px rgba(59, 130, 246, 0.4)',
                      background: 'linear-gradient(45deg, #2563EB, #059669)',
                    },
                  }}
                >
                  ابدأ التعلم مجاناً
                </MotionButton>
                <MotionButton
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/courses')}
                  sx={{
                    px: 4,
                    py: 2,
                    borderRadius: '30px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'white',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      borderColor: '#3B82F6',
                      background: 'rgba(59, 130, 246, 0.1)',
                    },
                  }}
                >
                  استكشف الدورات
                </MotionButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  component="div"
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '300px', md: '500px' },
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(16, 185, 129, 0.15))',
                    borderRadius: '30px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '80%',
                      height: '80%',
                      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(16, 185, 129, 0.3) 100%)',
                      transform: 'translate(-50%, -50%)',
                      filter: 'blur(50px)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.4), transparent 70%)',
                      opacity: 0.1,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '60%',
                      height: '60%',
                      background: 'url(https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg) center/contain no-repeat',
                      opacity: 0.8,
                      animation: 'float 6s ease-in-out infinite',
                      '@keyframes float': {
                        '0%, 100%': {
                          transform: 'translate(-50%, -50%) translateY(0px)',
                        },
                        '50%': {
                          transform: 'translate(-50%, -50%) translateY(-20px)',
                        },
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '30%',
                      left: '30%',
                      width: '20%',
                      height: '20%',
                      background: 'url(https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg) center/contain no-repeat',
                      opacity: 0.6,
                      animation: 'float 4s ease-in-out infinite',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '30%',
                      right: '30%',
                      width: '25%',
                      height: '25%',
                      background: 'url(https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg) center/contain no-repeat',
                      opacity: 0.6,
                      animation: 'float 5s ease-in-out infinite',
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </MotionBox>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 16 } }}>
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <MotionCard
                sx={{
                  textAlign: 'center',
                  height: '100%',
                  p: 4,
                  borderRadius: '24px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                    {stat.icon}
                  </Box>
                  <MotionTypography variant="h3" gutterBottom>
                    {stat.number}
                  </MotionTypography>
                  <MotionTypography variant="body1" color="textSecondary">
                    {stat.label}
                  </MotionTypography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Popular Courses Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 16 } }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <MotionTypography variant="h2" gutterBottom>
            الدورات الأكثر شعبية
          </MotionTypography>
          <MotionTypography variant="h5" color="textSecondary">
            اكتشف أفضل الدورات التدريبية لدينا
          </MotionTypography>
        </Box>
        <Grid container spacing={4}>
          {popularCourses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MotionCard
                sx={{
                  height: '100%',
                  transition: 'transform 0.2s',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                <Box
                  sx={{
                    height: 200,
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      display: 'flex',
                      gap: 1,
                    }}
                  >
                    <Chip
                      label={course.level}
                      color={
                        course.level === 'مبتدئ'
                          ? 'success'
                          : course.level === 'متوسط'
                          ? 'warning'
                          : 'error'
                      }
                      size="small"
                    />
                  </Box>
                </Box>
                <CardContent>
                  <MotionTypography variant="h5" gutterBottom>
                    {course.title}
                  </MotionTypography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ width: 24, height: 24, mr: 1 }} />
                    <MotionTypography variant="body2" color="textSecondary">
                      {course.instructor}
                    </MotionTypography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 2,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <StarIcon sx={{ color: '#F59E0B', mr: 0.5 }} />
                      <MotionTypography variant="body2">
                        {course.rating} ({course.students})
                      </MotionTypography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTimeIcon sx={{ mr: 0.5 }} />
                      <MotionTypography variant="body2">{course.duration}</MotionTypography>
                    </Box>
                  </Box>
                  <MotionButton
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: '8px',
                      background: 'linear-gradient(45deg, #60A5FA, #34D399)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #2563EB, #059669)',
                      },
                    }}
                  >
                    ابدأ الآن
                  </MotionButton>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <MotionBox
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
          py: 12,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <MotionTypography variant="h2" gutterBottom>
              لماذا Zero2Aura؟
            </MotionTypography>
            <MotionTypography variant="h5" color="textSecondary">
              نقدم لك تجربة تعليمية فريدة ومميزة
            </MotionTypography>
          </Box>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionCard
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                    <MotionTypography variant="h5" component="h3" gutterBottom>
                      {feature.title}
                    </MotionTypography>
                    <MotionTypography variant="body1" color="textSecondary">
                      {feature.description}
                    </MotionTypography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MotionBox>

      {/* CTA Section */}
      <MotionBox
        sx={{
          position: 'relative',
          py: 12,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(96, 165, 250, 0.1), rgba(52, 211, 153, 0.1))',
            transform: 'skewY(-6deg)',
            transformOrigin: 'top left',
          },
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <MotionTypography variant="h2" gutterBottom>
              ابدأ رحلتك التعليمية اليوم
            </MotionTypography>
            <MotionTypography variant="h5" color="textSecondary" sx={{ mb: 4 }}>
              انضم إلى آلاف المتعلمين وابدأ في تطوير مهاراتك البرمجية
            </MotionTypography>
            <MotionButton
              variant="contained"
              size="large"
              onClick={() => navigate('/register')}
              startIcon={<WhatshotIcon />}
              sx={{
                py: 2,
                px: 6,
                borderRadius: '12px',
                background: 'linear-gradient(45deg, #60A5FA, #34D399)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #2563EB, #059669)',
                },
              }}
            >
              سجل الآن مجاناً
            </MotionButton>
          </Box>
        </Container>
      </MotionBox>
    </MotionBox>
  );
};

export default Home;
