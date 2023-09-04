import { UsersActionTypes } from "./actions"

type Keys = keyof typeof UsersActionTypes

interface Action {
  payload: string
  type: (typeof UsersActionTypes)[Keys]
}

const initialState = {
  errorGettingUsersList: false,
  gettingUsersList: false,
  usersList: [],
}

const UsersReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UsersActionTypes.getUsers:
      return {
        ...state,
        gettingUsersList: true,
        usersList: [],
        errorGettingUsersList: false,
      }
    case UsersActionTypes.getUsersSuccess:
      return {
        ...state,
        gettingUsersList: false,
        usersList: action.payload,
        errorGettingUsersList: false,
      }
    case UsersActionTypes.getUsersFail:
      return {
        ...state,
        gettingUsersList: false,
        usersList: [],
        errorGettingUsersList: true,
      }
    default:
      return state
  }
}

export default UsersReducer
