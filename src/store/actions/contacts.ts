import {
  EDIT_CONTACT,
  GET_CONTACTS_FAILED,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../constants'

export const getContacts = () => (dispatch: any) => {
  dispatch({ type: GET_CONTACTS_LOADING })
  fetch('https://demo.sibers.com/users')
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: GET_CONTACTS_SUCCESS, data })
    })
    .catch(() => {
      dispatch({ type: GET_CONTACTS_FAILED, error: 'error load CONTACTS' })
    })
}

export const editContact = (data: object) => ({ type: EDIT_CONTACT, data })
