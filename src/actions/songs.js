import { CREATE_SONG } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const createSong = (song) => async (dispatch) => {
  try {
    const { data } = await api.createSong(song);

    dispatch({ type: CREATE_SONG, payload: data });
  } catch (error) {
    console.log(error);
  }
};