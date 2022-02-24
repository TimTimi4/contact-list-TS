import {
  EDIT_CONTACT,
  GET_CONTACTS_FAILED,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../constants'

const initalStatuses = {
  success: false,
  loading: false,
  failed: false,
  error: '',
}

const initialState = {
  contacts: [],
  getСontacts: initalStatuses,
}

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.data,
        getСontacts: {
          ...initalStatuses,
          success: true,
        },
      }
    case GET_CONTACTS_LOADING:
      return {
        ...state,
        getСontacts: {
          ...initalStatuses,
          loading: true,
        },
      }
    case GET_CONTACTS_FAILED:
      return {
        ...state,
        getСontacts: {
          ...initalStatuses,
          failed: true,
          error: action.error,
        },
      }
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: action.data,
      }
    default:
      return state
  }
}

export default reducer
