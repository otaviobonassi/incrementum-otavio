import { Avatar, Button, Grid, Typography } from "@mui/material"

import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"

import { getUserSuccess } from "./actions"
import { FullUser } from "./domain"

interface UserProps {
  getUserSuccessAction: (id: string | undefined) => void
  user: FullUser
}

const UserPage = ({ getUserSuccessAction, user }: UserProps) => {
  const { userId } = useParams()
  const navigate = useNavigate()

  const handleGoToChatPage = () => {
    navigate("./chat")
  }

  useEffect(() => {
    getUserSuccessAction(userId)
  }, [])

  return (
    <Grid container>
      <Grid
        item
        alignItems="center"
        justifyContent="center"
        sx={{ width: 100, height: 80 }}
      >
        <Avatar
          alt={user.name}
          src={user.avatarUrl}
          sx={{ width: 80, height: 80 }}
        />
      </Grid>
      <Grid item xs={2} sm={10} md={10}>
        <Typography variant="h4" sx={{ textAlign: "left" }}>
          {user.name}
        </Typography>
        <Typography
          sx={{ textAlign: "left" }}
        >{`${user.currentRole} @ ${user.currentCompany}`}</Typography>
      </Grid>
      <Grid item xs={2} sm={12} md={12} sx={{ justifyContent: "flex-start" }}>
        <Button
          variant="contained"
          onClick={handleGoToChatPage}
        >{`Chat with ${user.name}`}</Button>
      </Grid>
      {user.experiences?.map((exp) => (
        <Grid item xs={2} sm={8} md={8} sx={{ marginTop: "2rem" }}>
          <Typography variant="h5" sx={{ textAlign: "left" }}>
            {exp.name}
          </Typography>
          <Typography sx={{ textAlign: "left", fontSize: "0.875rem" }}>
            {exp.endDate
              ? `${exp.startDate} to ${exp.endDate}`
              : `${exp.startDate} - current`}
          </Typography>
          <Typography sx={{ textAlign: "left", marginTop: "0.5rem" }}>
            {exp.description}
          </Typography>
        </Grid>
      ))}
    </Grid>
  )
}

const mapStateToProps = (state: any) => ({
  user: state.user.user,
})

export default connect(mapStateToProps, {
  getUserSuccessAction: getUserSuccess,
})(UserPage)
