import initialState from './initialState';
import {WRITE_WIZARD_1, WRITE_WIZARD_2, WRITE_WIZARD_3, WRITE_WIZARD_4, WRITE_WIZARD_5} from '../actions/actionTypes';

export default function wizard(state = initialState, action) {
  let newState;
  switch(action.type) {
    case WRITE_WIZARD_1:
      console.log('WW1', action)
      return Object.assign({}, state, action.payload)
    case WRITE_WIZARD_2:
      console.log('WW2', action)
      return Object.assign({}, state, action.payload)
    case WRITE_WIZARD_3:
      console.log('WW3', action)
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}
