import axios from 'axios';

export function axiosWithAuth() {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
}
