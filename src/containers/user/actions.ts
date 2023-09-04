import { mockedUserJohn, mockedUserOtavio } from "./mocked.data"

export const UserActionTypes = {
  getUser: "USER/GET_USER",
  getUserSuccess: "USER/GET_USER_SUCCESS",
  getUserFail: "USER/GET_USER_FAIL",
}

export const getUser = () => ({
  type: UserActionTypes.getUser,
})

export const getUserSuccess = (id: string | undefined) => {
  if (!id) return

  if (id === "1")
    return {
      type: UserActionTypes.getUserSuccess,
      payload: mockedUserOtavio,
    }

  if (id === "2")
    return {
      type: UserActionTypes.getUserSuccess,
      payload: mockedUserJohn,
    }
}
