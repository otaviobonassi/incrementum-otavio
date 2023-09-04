import { buildUsers } from "./domain"
import { mockedUsers } from "./mocked.data"

export const UsersActionTypes = {
  getUsers: "USERS/GET_USERS",
  getUsersSuccess: "USERS/GET_USERS_SUCCESS",
  getUsersFail: "USERS/GET_USERS_FAIL",
}

export const getUsers = () => ({
  type: UsersActionTypes.getUsers,
})

export const getUsersSuccess = () => ({
  type: UsersActionTypes.getUsersSuccess,
  payload: buildUsers(mockedUsers),
})
