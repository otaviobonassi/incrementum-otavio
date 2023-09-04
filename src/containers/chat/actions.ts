import { Message, currentUserName } from "./domain"
import { mockedChatUserJon, mockedChatUserOtavio } from "./mocked.data"

export const UserChatActionTypes = {
  getUserChat: "USER/GET_CHAT",
  getUserChatSuccess: "USER/GET_CHAT_SUCCESS",
  getUserChatFail: "USER/GET_CHAT_FAIL",
  sendMessage: "USER/SEND_MESSAGE",
  sendMessageSuccess: "USER/SEND_MESSAGE_SUCCESS",
  sendMessageFail: "USER/SEND_MESSAGE_FAIL",
}

export const getUserChat = () => ({
  type: UserChatActionTypes.getUserChat,
})

export const sendNewMessage = (message: string) => {
  const payload: Message = {
    sender: currentUserName,
    sentAt: new Date().toISOString(),
    message,
  }

  return {
    type: UserChatActionTypes.sendMessage,
    payload,
  }
}

export const getUserChatSuccess = (id: string | undefined) => {
  if (!id) return

  if (id === "1")
    return {
      type: UserChatActionTypes.getUserChatSuccess,
      payload: mockedChatUserOtavio,
    }

  if (id === "2")
    return {
      type: UserChatActionTypes.getUserChatSuccess,
      payload: mockedChatUserJon,
    }
}
