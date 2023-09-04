export interface Message {
  sentAt: string
  message: string
  sender: string
}

export interface Chat {
  id: string
  participants: string[]
  messages: Message[]
}

export const buildChat = (chat: Chat[]) => {
  return chat?.map((c) => ({
    id: c.id || 0,
    participants: c.participants || [],
    messages: c.messages || [],
  }))
}

export const currentUserName = "My Name"
