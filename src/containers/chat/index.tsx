import {
  Container,
  Button,
  Grid,
  Typography,
  TextareaAutosize,
} from "@mui/material"

import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"

import { getUserChatSuccess, sendNewMessage } from "./actions"
import { Chat, currentUserName } from "./domain"
import ChatList from "../../components/chat-list"

interface UserProps {
  getUserChatSuccessAction: (id: string | undefined) => void
  chat: Chat
  sendMessageAction: (msg: string) => void
}

const ChatPage = ({
  getUserChatSuccessAction,
  chat,
  sendMessageAction,
}: UserProps) => {
  const [newMessage, setNewMessage] = useState("")
  const { userId } = useParams()
  const navigate = useNavigate()

  const openChat = (id: string | number) => {
    navigate(`/users/${id}/chat`)
    getUserChatSuccessAction(String(id))
  }

  useEffect(() => {
    getUserChatSuccessAction(userId)
  }, [])

  const handleTyping = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const msg = evt?.target.value
    setNewMessage(msg)
  }

  const handleSendMessage = () => {
    sendMessageAction(newMessage)
    setNewMessage("")
  }

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid container>
        <ChatList actionToPerform={openChat} />
      </Grid>
      <Grid container maxWidth="70%">
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            sx={{
              fontSize: "0.875rem",
              textAlign: "left",
              fontWeight: "700",
            }}
          >
            Chat Participants:{" "}
            {chat.participants.map((p, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: "0.875rem",
                  textAlign: "left",
                  fontWeight: "700",
                }}
              >
                {p}
              </Typography>
            ))}
          </Typography>
          <Grid
            item
            xs={2}
            sm={12}
            md={12}
            sx={{ justifyContent: "flex-start" }}
          >
            <Button variant="outlined" onClick={() => navigate("./..")}>
              Back to profile
            </Button>
          </Grid>
        </Grid>
        {chat?.messages?.map((msg, index) => {
          return (
            <React.Fragment key={index}>
              <Grid
                item
                xs={2}
                sm={10}
                md={10}
                sx={{
                  marginTop: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems:
                    msg.sender === currentUserName ? "flex-end" : "flex-start",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    textAlign: "left",
                    fontWeight: "700",
                  }}
                >
                  {msg.sender}
                </Typography>
                <Typography sx={{ fontSize: "1rem", textAlign: "left" }}>
                  {msg.message}
                </Typography>
                <Typography sx={{ fontSize: "0.75rem", textAlign: "left" }}>
                  {msg.sentAt}
                </Typography>
              </Grid>
            </React.Fragment>
          )
        })}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            width: "50vw",
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <TextareaAutosize
            value={newMessage}
            minRows={5}
            onChange={(evt) => handleTyping(evt)}
          />
          <Button
            variant="outlined"
            sx={{ maxWidth: "200px" }}
            onClick={handleSendMessage}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

const mapStateToProps = (state: any) => ({
  chat: state.chat,
})

export default connect(mapStateToProps, {
  getUserChatSuccessAction: getUserChatSuccess,
  sendMessageAction: sendNewMessage,
})(ChatPage)
