import axios from 'axios'

const url = 'http://localhost:5000/vtubers';

export const fetchPosts = () => axios.get(url);