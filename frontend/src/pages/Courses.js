import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
} from '@mui/material';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8000/courses');
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case 'مبتدئ':
        return 'success';
      case 'متوسط':
        return 'warning';
      case 'متقدم':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        الدورات المتاحة
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`https://source.unsplash.com/random/800x600?programming,${course.id}`}
                alt={course.title}
              />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {course.title}
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={course.level}
                    color={getLevelColor(course.level)}
                    size="small"
                  />
                </Box>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {course.description}
                </Typography>

                <Button variant="contained" fullWidth>
                  ابدأ الدورة
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Courses;
