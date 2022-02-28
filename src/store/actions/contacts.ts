import { Dispatch } from 'redux'

import {
  EDIT_CONTACT,
  GET_CONTACTS_FAILED,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../constants'

type Contacts = {
  data: Contact[];
}

type Contact = {
    id?: number,
    name: string,
    address: {
      country: string,
      city: string,
      streetC: string,
    },
    phone: string,
    company: {
      name: string,
      bs: string,
    },
    email: string,
    username: string,
    favorite?: boolean,
}

export const getContacts = () => (dispatch: Dispatch) => {
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

export const editContact = (data: Contacts) => ({ type: EDIT_CONTACT, data })
