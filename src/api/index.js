import axios from 'axios'

const url = 'http://localhost:5000/vtubers';

// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);
export const fetchVtubers = () => axios.get(url);
export const createVtuber = (newVtuber) => axios.post(url, newVtuber);