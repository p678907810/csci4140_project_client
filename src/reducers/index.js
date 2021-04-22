import { combineReducers } from 'redux';

import songs from './songs';
import vtubers from './vtubers';

export default combineReducers({
    vtubers,
    songs
});