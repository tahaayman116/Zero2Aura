import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('كلمات المرور غير متطابقة');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
      
      if (response.ok) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          إنشاء حساب جديد
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="الاسم"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
            dir="rtl"
          />
          
          <TextField
            fullWidth
            label="البريد الإلكتروني"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            dir="rtl"
          />
          
          <TextField
            fullWidth
            label="كلمة المرور"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
            dir="rtl"
          />
          
          <TextField
            fullWidth
            label="تأكيد كلمة المرور"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            margin="normal"
            required
            dir="rtl"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
          >
            إنشاء حساب
          </Button>
          
          <Button
            fullWidth
            variant="text"
            sx={{ mt: 1 }}
            onClick={() => navigate('/login')}
          >
            لديك حساب بالفعل؟ سجل دخول
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
