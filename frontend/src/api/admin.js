import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Course Management
export const createCourse = async (courseData) => {
  const formData = new FormData();
  Object.keys(courseData).forEach(key => {
    formData.append(key, courseData[key]);
  });
  const response = await axios.post(`${API_URL}/admin/courses`, formData);
  return response.data;
};

export const updateCourse = async (courseId, courseData) => {
  const formData = new FormData();
  Object.keys(courseData).forEach(key => {
    formData.append(key, courseData[key]);
  });
  const response = await axios.put(`${API_URL}/admin/courses/${courseId}`, formData);
  return response.data;
};

export const deleteCourse = async (courseId) => {
  const response = await axios.delete(`${API_URL}/admin/courses/${courseId}`);
  return response.data;
};

export const getCourses = async () => {
  const response = await axios.get(`${API_URL}/admin/courses`);
  return response.data;
};

// Video Management
export const uploadVideo = async (videoData) => {
  const formData = new FormData();
  Object.keys(videoData).forEach(key => {
    formData.append(key, videoData[key]);
  });
  const response = await axios.post(`${API_URL}/admin/videos`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      if (videoData.onProgress) {
        videoData.onProgress(percentCompleted);
      }
    },
  });
  return response.data;
};

export const updateVideo = async (videoId, videoData) => {
  const formData = new FormData();
  Object.keys(videoData).forEach(key => {
    formData.append(key, videoData[key]);
  });
  const response = await axios.put(`${API_URL}/admin/videos/${videoId}`, formData);
  return response.data;
};

export const deleteVideo = async (videoId) => {
  const response = await axios.delete(`${API_URL}/admin/videos/${videoId}`);
  return response.data;
};

export const getVideos = async () => {
  const response = await axios.get(`${API_URL}/admin/videos`);
  return response.data;
};

// Dashboard Statistics
export const getStats = async () => {
  const response = await axios.get(`${API_URL}/admin/stats`);
  return response.data;
};

// User Management
export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/admin/users`);
  return response.data;
};

export const updateUserRole = async (userId, role) => {
  const response = await axios.put(`${API_URL}/admin/users/${userId}/role`, { role });
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await axios.delete(`${API_URL}/admin/users/${userId}`);
  return response.data;
};
