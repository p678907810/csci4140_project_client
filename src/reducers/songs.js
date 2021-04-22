import { CREATE_SONG } from '../constants/actionTypes';

export default (songs = [], action) => {
  switch (action.type) {
    case CREATE_SONG:
      return [...songs, action.payload];
    default:
      return songs;
  }
};