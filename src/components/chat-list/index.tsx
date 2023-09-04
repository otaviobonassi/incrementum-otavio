import List from "@mui/material/List"
import { connect } from "react-redux"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import { useEffect } from "react"
import { getUsersSuccess } from "../../containers/home/actions"
import { User } from "../../containers/home/domain"

interface UsersListProps {
  actionToPerform: (id: string | number) => void
  getUsersSuccessAction: () => void
  usersList: User[]
}

const UsersList = ({
  actionToPerform,
  getUsersSuccessAction,
  usersList,
}: UsersListProps) => {
  useEffect(() => {
    getUsersSuccessAction()
  }, [])

  return (
    <List
      sx={{
        width: "100%",
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      {usersList?.map((user) => (
        <ListItem onClick={() => actionToPerform(user.id)}>
          <ListItemAvatar>
            <Avatar alt="User photo" src={user.avatarUrl} />
          </ListItemAvatar>
          <ListItemText
            primary={user.name}
            secondary={`${user.currentRole} @ ${user.currentCompany}`}
          />
        </ListItem>
      ))}
    </List>
  )
}

const mapStateToProps = (state: any) => ({
  usersList: state.users.usersList,
})

export default connect(mapStateToProps, {
  getUsersSuccessAction: getUsersSuccess,
})(UsersList)
