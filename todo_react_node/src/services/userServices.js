import api from './axios';

export const login = async (username, password) => {
  try {
    const response = await api.post('/users/login', { username, password });
    return response;
  } catch (error) {
    throw error;
  }
};

export const register = async (fullname, username, password, repassword) => {
  try {
    const response = await api.post('/users/register', { fullname, username, password, repassword });
    return response;
  } catch (error) {
    throw error;
  }
};

export const profile = async () => {
  try {
    const response = await api.get('/users');
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (fullname, password, repassword) => {
  try {
    const response = await api.post('/users', { fullname, password, repassword });
    return response;
  } catch (error) {
    throw error;
  }
};

