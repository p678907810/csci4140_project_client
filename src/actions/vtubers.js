import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getVtubers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchVtubers();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }

}

export const createVtuber = (vtuber) => async (dispatch) => {
  try {
    const { data } = await api.createVtuber(vtuber);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};