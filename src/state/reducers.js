import {combineReducers} from 'redux';
import { SET_USERNAME } from './actions';

const initialState = {
  username: {},
};

const username = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {...state, username: action.username};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  username
});

export default rootReducer;
