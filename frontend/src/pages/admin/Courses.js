import React, { useState, useEffect } from 'react';
import { createCourse, getCourses, updateCourse, deleteCourse } from '../../api/admin';
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from '@mui/icons-material';

const Courses = () => {
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editingCourse, setEditingCourse] = useState(null);
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    thumbnail: null,
    price: '',
    duration: '',
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const data = await getCourses();
      setCourses(data);
    } catch (err) {
      setError('Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (course = null) => {
    if (course) {
      setEditingCourse(course);
      setCourseData({
        title: course.title,
        description: course.description,
        price: course.price,
        duration: course.duration,
      });
    } else {
      setEditingCourse(null);
      setCourseData({
        title: '',
        description: '',
        thumbnail: null,
        price: '',
        duration: '',
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingCourse(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      if (editingCourse) {
        await updateCourse(editingCourse._id, courseData);
        setSuccess('Course updated successfully');
      } else {
        await createCourse(courseData);
        setSuccess('Course created successfully');
      }
      handleClose();
      fetchCourses();
    } catch (err) {
      setError(err.message || 'Failed to save course');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        setLoading(true);
        await deleteCourse(courseId);
        setSuccess('Course deleted successfully');
        fetchCourses();
      } catch (err) {
        setError('Failed to delete course');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Container maxWidth="lg">
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h5">إدارة الدورات</Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => handleOpen()}
              disabled={loading}
            >
              إضافة دورة جديدة
            </Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>عنوان الدورة</TableCell>
                  <TableCell>الوصف</TableCell>
                  <TableCell>السعر</TableCell>
                  <TableCell>المدة</TableCell>
                  <TableCell>الإجراءات</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course._id}>
                    <TableCell>{course.title}</TableCell>
                    <TableCell>{course.description}</TableCell>
                    <TableCell>${course.price}</TableCell>
                    <TableCell>{course.duration} ساعة</TableCell>
                    <TableCell>
                      <IconButton 
                        color="primary" 
                        onClick={() => handleOpen(course)}
                        disabled={loading}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton 
                        color="error" 
                        onClick={() => handleDelete(course._id)}
                        disabled={loading}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle>
            {editingCourse ? 'تعديل الدورة' : 'إضافة دورة جديدة'}
          </DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <TextField
                fullWidth
                label="عنوان الدورة"
                value={courseData.title}
                onChange={(e) => setCourseData({ ...courseData, title: e.target.value })}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                multiline
                rows={4}
                label="وصف الدورة"
                value={courseData.description}
                onChange={(e) => setCourseData({ ...courseData, description: e.target.value })}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="السعر"
                type="number"
                value={courseData.price}
                onChange={(e) => setCourseData({ ...courseData, price: e.target.value })}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="المدة (بالساعات)"
                type="number"
                value={courseData.duration}
                onChange={(e) => setCourseData({ ...courseData, duration: e.target.value })}
                margin="normal"
                required
              />
              {!editingCourse && (
                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  رفع صورة مصغرة
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) => setCourseData({ ...courseData, thumbnail: e.target.files[0] })}
                  />
                </Button>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} disabled={loading}>
                إلغاء
              </Button>
              <Button type="submit" variant="contained" disabled={loading}>
                {loading ? 'جاري الحفظ...' : 'حفظ'}
              </Button>
            </DialogActions>
          </form>
        </Dialog>

        <Snackbar 
          open={!!error || !!success} 
          autoHideDuration={6000} 
          onClose={() => {
            setError('');
            setSuccess('');
          }}
        >
          <Alert 
            severity={error ? 'error' : 'success'} 
            sx={{ width: '100%' }}
          >
            {error || success}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Courses;
