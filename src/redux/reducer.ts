import { combineReducers } from "@reduxjs/toolkit"
import UsersReducer from "../containers/home/reducer"
import UserReducer from "../containers/user/reducer"
import ChatReducer from "../containers/chat/reducer"

export const reducers = combineReducers({
  chat: ChatReducer,
  user: UserReducer,
  users: UsersReducer,
})
