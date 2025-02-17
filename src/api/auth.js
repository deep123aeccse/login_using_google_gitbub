import axios from "axios";

// Get backend URL from environment variable
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const loginWithGoogle = () => {
  window.location.href = `${API_BASE_URL}/login/oauth2/authorization/google`;
};

export const loginWithGitHub = () => {
  window.location.href = `${API_BASE_URL}/login/oauth2/authorization/github`;
};

export const logout = async () => {
  await axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true });
  window.location.href = "/login";
};

export const fetchUser = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user`, { withCredentials: true });
    return response.data;
  } catch (error) {
    return null;
  }
};
