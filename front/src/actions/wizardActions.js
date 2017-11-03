import {
  WRITE_WIZARD_1,
  WRITE_WIZARD_2,
  WRITE_WIZARD_3,
  WRITE_WIZARD_4,
  WRITE_WIZARD_5,
  WRITE_LOAN_FIELD,
  WRITE_MORTGAGE_FIELD,
  RESET_STORE
}
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

export function writeLoanField (data) {
  return {
    type: WRITE_LOAN_FIELD,
    payload: data
  }
}

export function writeMortgageField (data) {
  return {
    type: WRITE_MORTGAGE_FIELD,
    payload: data
  }
}

export function resetStore (data) {
  return {
    type: RESET_STORE,
    payload: data
  }
}
