import initialState from './initialState';
import
  {
  WRITE_WIZARD_1,
  WRITE_WIZARD_2,
  WRITE_WIZARD_3,
  WRITE_WIZARD_4,
  WRITE_WIZARD_5,
  WRITE_LOAN_FIELD,
  WRITE_MORTGAGE_FIELD,
  RESET_STORE
  }
from '../actions/actionTypes';

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
    case WRITE_WIZARD_4:
      console.log('WW4', action)
      return Object.assign({}, state, action.payload)
    case WRITE_WIZARD_5:
      console.log('WW5', action)
      return Object.assign({}, state, action.payload)
    case WRITE_LOAN_FIELD:
      console.log('Writing loan field', action)
      return Object.assign({}, state, action.payload)
    case WRITE_MORTGAGE_FIELD:
        console.log('Writing mortgage field', action)
        return Object.assign({}, state, action.payload)
    case RESET_STORE:
        console.log('Resetting the store', action)
        return Object.assign({}, state, initialState)
    default:
      return state;
  }
}
