import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/admin-dashboard/',
});

// For Dashboard
export const getStats = () => API.get('analytics/').then(res => ({
  users: res.data.totalUsers,
  quizzes: res.data.totalQuizzes,
  attempts: res.data.totalAttempts
}));

export const getRecentActivity = () => API.get('analytics/').then(res => res.data.recentActivity);

export const getPopularQuiz = async () => ({
  name: "Tunisian Culture & Traditions",
  category: "Heritage",
  difficulty: "Medium",
  attempts: 85,
  avgScore: 78,
  questions: 15
});

// For Users.jsx
export const getUsers = () => API.get('admin-users/');
export const toggleUserStatus = (id) => API.patch(`admin-users-toggle/${id}/toggle/`);
//for auth
export const login = async (credentials) => {
  // This points to wherever your friends set up the login endpoint
  // Usually it's something like 'http://127.0.0.1:8000/api/users/login/'
  const response = await axios.post('http://127.0.0.1:8000/api/users/login/', credentials);
  return response.data;
};

export default API;