import { useNavigate } from "react-router-dom"
import UsersList from "../../components/users-list"

const HomePage = () => {
  const navigate = useNavigate()

  const handleGoToUsersPage = (id: number | string) => {
    navigate(`./users/${id}`)
  }

  return <UsersList actionToPerform={handleGoToUsersPage} />
}

export default HomePage
