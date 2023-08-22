
import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144';

export const getAuthorizationToken = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/train/auth`, {
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error obtaining authorization token:', error);
  }
};
