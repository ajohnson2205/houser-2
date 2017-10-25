import initialState from './initialState';
import {WRITE_WIZARD_1, WRITE_WIZARD_2, WRITE_WIZARD_3, WRITE_WIZARD_4, WRITE_WIZARD_5} from '../actions/actionTypes';

export default function wizard(state initialState.wizard, action) {
  let newState;
  switch(action.type) {
    case WRITE_WIZARD_1:
      newState = action.wizard;
      console.log('WRITE_WIZARD_1 Action')
      return action;
    case WRITE_WIZARD_2:
      newState = action.wizard;
      console.log('WRITE_WIZARD_2 Action')
      return action
    default:
      return state;
  }
}
