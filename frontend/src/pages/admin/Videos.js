import React, { useState, useEffect } from 'react';
import { uploadVideo, getVideos, updateVideo, deleteVideo, getCourses } from '../../api/admin';
import VideoPreview from './VideoPreview';
import {
  Box,
  Container,
  Grid,
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  LinearProgress,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  PlayArrow as PlayIcon,
  CloudUpload as UploadIcon,
} from '@mui/icons-material';

const Videos = () => {
  const [open, setOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [editingVideo, setEditingVideo] = useState(null);
  const [videoData, setVideoData] = useState({
    title: '',
    description: '',
    courseId: '',
    videoFile: null,
    thumbnail: null,
  });

  useEffect(() => {
    fetchVideos();
    fetchCourses();
  }, []);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const data = await getVideos();
      setVideos(data);
    } catch (err) {
      setError('Failed to fetch videos');
    } finally {
      setLoading(false);
    }
  };

  const fetchCourses = async () => {
    try {
      const data = await getCourses();
      setCourses(data);
    } catch (err) {
      setError('Failed to fetch courses');
    }
  };

  const handleOpen = (video = null) => {
    if (video) {
      setEditingVideo(video);
      setVideoData({
        title: video.title,
        description: video.description,
        courseId: video.courseId,
      });
    } else {
      setEditingVideo(null);
      setVideoData({
        title: '',
        description: '',
        courseId: '',
        videoFile: null,
        thumbnail: null,
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingVideo(null);
    setUploadProgress(0);
  };

  const handlePreview = (video) => {
    setSelectedVideo(video);
    setPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setPreviewOpen(false);
    setSelectedVideo(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      if (editingVideo) {
        await updateVideo(editingVideo._id, videoData);
        setSuccess('Video updated successfully');
      } else {
        await uploadVideo({
          ...videoData,
          onProgress: (progress) => setUploadProgress(progress),
        });
        setSuccess('Video uploaded successfully');
      }
      handleClose();
      fetchVideos();
    } catch (err) {
      setError(err.message || 'Failed to save video');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (videoId) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      try {
        setLoading(true);
        await deleteVideo(videoId);
        setSuccess('Video deleted successfully');
        fetchVideos();
      } catch (err) {
        setError('Failed to delete video');
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
            <Typography variant="h5">إدارة الفيديوهات</Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => handleOpen()}
              disabled={loading}
            >
              إضافة فيديو جديد
            </Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>عنوان الفيديو</TableCell>
                  <TableCell>الدورة</TableCell>
                  <TableCell>المدة</TableCell>
                  <TableCell>تاريخ الرفع</TableCell>
                  <TableCell>الإجراءات</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {videos.map((video) => (
                  <TableRow key={video._id}>
                    <TableCell>{video.title}</TableCell>
                    <TableCell>
                      {courses.find(c => c._id === video.courseId)?.title || 'N/A'}
                    </TableCell>
                    <TableCell>{video.duration}</TableCell>
                    <TableCell>{new Date(video.createdAt).toLocaleDateString('ar-EG')}</TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handlePreview(video)}
                        disabled={loading}
                      >
                        <PlayIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        onClick={() => handleOpen(video)}
                        disabled={loading}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(video._id)}
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
            {editingVideo ? 'تعديل الفيديو' : 'إضافة فيديو جديد'}
          </DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <TextField
                fullWidth
                label="عنوان الفيديو"
                value={videoData.title}
                onChange={(e) => setVideoData({ ...videoData, title: e.target.value })}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                multiline
                rows={4}
                label="وصف الفيديو"
                value={videoData.description}
                onChange={(e) => setVideoData({ ...videoData, description: e.target.value })}
                margin="normal"
                required
              />
              <FormControl fullWidth margin="normal" required>
                <InputLabel>الدورة</InputLabel>
                <Select
                  value={videoData.courseId}
                  onChange={(e) => setVideoData({ ...videoData, courseId: e.target.value })}
                >
                  {courses.map((course) => (
                    <MenuItem key={course._id} value={course._id}>
                      {course.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {!editingVideo && (
                <>
                  <Button
                    variant="outlined"
                    component="label"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    رفع الفيديو
                    <input
                      type="file"
                      hidden
                      accept="video/*"
                      onChange={(e) => setVideoData({ ...videoData, videoFile: e.target.files[0] })}
                      required
                    />
                  </Button>
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
                      onChange={(e) => setVideoData({ ...videoData, thumbnail: e.target.files[0] })}
                    />
                  </Button>
                </>
              )}
              {uploadProgress > 0 && (
                <Box sx={{ width: '100%', mt: 2 }}>
                  <LinearProgress variant="determinate" value={uploadProgress} />
                  <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                    {uploadProgress}%
                  </Typography>
                </Box>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} disabled={loading}>
                إلغاء
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={loading || (uploadProgress > 0 && uploadProgress < 100)}
              >
                {loading ? 'جاري الحفظ...' : 'حفظ'}
              </Button>
            </DialogActions>
          </form>
        </Dialog>

        <VideoPreview
          open={previewOpen}
          onClose={handleClosePreview}
          video={selectedVideo}
        />

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

export default Videos;
