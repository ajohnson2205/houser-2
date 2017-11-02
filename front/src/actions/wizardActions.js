import {
  WRITE_WIZARD_1,
  WRITE_WIZARD_2,
  WRITE_WIZARD_3,
  WRITE_WIZARD_4,
  WRITE_WIZARD_5}
  from './actionTypes';


//action creators
export function saveWizardOne (data) {
  return {
    type: WRITE_WIZARD_1,
    payload: data
  }
}


export function saveWizardTwo (data) {
  return {
    type: WRITE_WIZARD_2,
    payload: data
  }
}


export function saveWizardThree (data) {
  return {
    type: WRITE_WIZARD_3,
    payload: data
  }
}


export function saveWizardFour (data) {
  return {
    type: WRITE_WIZARD_4,
    payload: data
  }
}


export function saveWizardFive (data) {
  return {
    type: WRITE_WIZARD_5,
    payload: data
  }
}
