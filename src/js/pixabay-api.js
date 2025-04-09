import axios from 'axios';

const API_KEY = '49623840-0f31145568b741aa8d3c39eac';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;

const defaultParams = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 15,
};

export async function getImagesByQuery(query, page) {
  const params = { ...defaultParams, q: query, page };

  const responce = await axios.get('', { params });
  return responce.data;
}