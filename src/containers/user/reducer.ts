import { UserActionTypes } from "./actions"

type Keys = keyof typeof UserActionTypes

interface Action {
  payload: string
  type: (typeof UserActionTypes)[Keys]
}

const initialState = {
  errorGettingUser: false,
  gettingUser: false,
  user: {},
}

const UserReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UserActionTypes.getUser:
      return {
        ...state,
        errorGettingUser: false,
        gettingUser: true,
        user: {},
      }
    case UserActionTypes.getUserSuccess:
      return {
        ...state,
        errorGettingUser: false,
        gettingUser: false,
        user: action.payload,
      }
    case UserActionTypes.getUserFail:
      return {
        ...state,
        errorGettingUser: true,
        gettingUser: false,
        user: {},
      }
    default:
      return state
  }
}

export default UserReducer
