import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import {
  VideoLibrary as VideoIcon,
  People as PeopleIcon,
  School as CourseIcon,
  Dashboard as DashboardIcon,
} from '@mui/icons-material';

const AdminDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2 }}>
              <List>
                <ListItem button selected>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="لوحة التحكم" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <CourseIcon />
                  </ListItemIcon>
                  <ListItemText primary="الدورات" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <VideoIcon />
                  </ListItemIcon>
                  <ListItemText primary="الفيديوهات" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="المستخدمين" />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={9}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h5" gutterBottom>
                إحصائيات عامة
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <Paper
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      background: 'linear-gradient(45deg, #3B82F6, #10B981)',
                      color: 'white',
                    }}
                  >
                    <Typography variant="h6">عدد الدورات</Typography>
                    <Typography variant="h4">12</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
                      color: 'white',
                    }}
                  >
                    <Typography variant="h6">عدد الفيديوهات</Typography>
                    <Typography variant="h4">156</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper
                    sx={{
                      p: 2,
                      textAlign: 'center',
                      background: 'linear-gradient(45deg, #F59E0B, #EF4444)',
                      color: 'white',
                    }}
                  >
                    <Typography variant="h6">عدد المستخدمين</Typography>
                    <Typography variant="h4">1,234</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>

            {/* Recent Courses */}
            <Paper sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h5">
                  آخر الدورات المضافة
                </Typography>
                <Button variant="contained" color="primary">
                  إضافة دورة جديدة
                </Button>
              </Box>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <VideoIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="مقدمة في البرمجة" 
                    secondary="تم الإضافة: 2024-12-24" 
                  />
                  <Button color="primary">تعديل</Button>
                  <Button color="error" sx={{ ml: 1 }}>حذف</Button>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <VideoIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="تطوير تطبيقات الويب" 
                    secondary="تم الإضافة: 2024-12-23" 
                  />
                  <Button color="primary">تعديل</Button>
                  <Button color="error" sx={{ ml: 1 }}>حذف</Button>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
