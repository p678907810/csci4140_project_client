import { CREATE_SONG, FETCH_ALL_SONGS, FETCH_SONGS_BY_VTUBER } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getSongs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSongs();
    dispatch({ type: FETCH_ALL_SONGS, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const getSongsByVtuber = (vtuber) => async (dispatch) => {
  try {
    const { data } = await api.fetchSongsByVtuber(vtuber);
    dispatch({ type: FETCH_SONGS_BY_VTUBER, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const createSong = (song) => async (dispatch) => {
  try {
    const { data } = await api.createSong(song);

    dispatch({ type: CREATE_SONG, payload: data });
  } catch (error) {
    console.log(error);
  }
};