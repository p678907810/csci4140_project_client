import { CREATE_SONG, FETCH_ALL_SONGS, FETCH_SONGS_BY_VTUBER } from '../constants/actionTypes';

export default (songs = [], action) => {
  switch (action.type) {
    case FETCH_ALL_SONGS:
      return action.payload;
    case FETCH_SONGS_BY_VTUBER:
      return action.payload;
    case CREATE_SONG:
      return [...songs, action.payload];
    default:
      return songs;
  }
};