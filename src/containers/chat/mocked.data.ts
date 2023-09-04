import { Chat, currentUserName } from "./domain"

export const mockedChatUserOtavio: Chat = {
  id: "1",
  participants: [currentUserName, "Otavio Bonassi"],
  messages: [
    {
      sentAt: new Date().toISOString(),
      message: "Hey, this is our first message!",
      sender: currentUserName,
    },
    {
      sentAt: new Date().toISOString(),
      message: "Hihoooo!!!",
      sender: "Otavio Bonassi",
    },
    {
      sentAt: new Date().toISOString(),
      message: "Now this is our second message!",
      sender: currentUserName,
    },
  ],
}

export const mockedChatUserJon: Chat = {
  id: "2",
  participants: [currentUserName, "Jon O'Bryan"],
  messages: [
    {
      sentAt: new Date().toISOString(),
      message: "Welcome aboard!",
      sender: currentUserName,
    },
    {
      sentAt: new Date().toISOString(),
      message: "It's going to be great to have you here!",
      sender: currentUserName,
    },
    {
      sentAt: new Date().toISOString(),
      message: "Thank you for having me!",
      sender: "Jon O'Bryan",
    },
  ],
}
