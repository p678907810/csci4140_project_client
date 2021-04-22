import axios from 'axios'

// const url = 'http://localhost:5000/vtubers';
const API = axios.create({ baseURL: 'http://localhost:5000' });

// export const fetchVtubers = () => axios.get(url);
export const fetchVtubers = () => API.get('/vtubers');
// export const createVtuber = (newVtuber) => axios.post(url, newVtuber);
export const createVtuber = (newVtuber) => API.post('/vtubers', newVtuber);

export const createSong = (newSong) => API.post('/songs', newSong);
