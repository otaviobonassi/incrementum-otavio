import { UserChatActionTypes } from "./actions"
import { Chat, Message } from "./domain"

type Keys = keyof typeof UserChatActionTypes

interface Action {
  payload: Chat
  type: (typeof UserChatActionTypes)[Keys]
}

const initialState = {
  errorGettingUserChatChat: false,
  gettingUserChat: false,
  participants: [],
  messages: [],
}

const ChatReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UserChatActionTypes.getUserChat:
      return {
        ...state,
        errorGettingUserChat: false,
        gettingUserChat: true,
        participants: [],
        messages: [],
      }
    case UserChatActionTypes.getUserChatSuccess:
      return {
        ...state,
        errorGettingUserChat: false,
        gettingUserChat: false,
        participants: action.payload.participants,
        messages: action.payload.messages,
      }
    case UserChatActionTypes.getUserChatFail:
      return {
        ...state,
        errorGettingUserChat: true,
        gettingUserChat: false,
        participants: [],
        messages: [],
      }
    case UserChatActionTypes.sendMessage:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }
    case UserChatActionTypes.sendMessageSuccess:
      return {
        ...state,
      }
    case UserChatActionTypes.sendMessageFail:
      return {
        ...state,
        errorGettingUserChat: true,
        gettingUserChat: false,
        participants: [],
        messages: [],
      }
    default:
      return state
  }
}

export default ChatReducer
