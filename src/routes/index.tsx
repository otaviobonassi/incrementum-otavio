import HomePage from "../containers/home"
import UserPage from "../containers/user"
import ChatPage from "../containers/chat"

export const routes = [
  {
    path: "/",
    exact: true,
    element: <HomePage />,
  },
  {
    path: "/users/:userId",
    exact: true,
    element: <UserPage />,
  },
  {
    path: "/users/:userId/chat",
    exact: true,
    element: <ChatPage />,
  },
]
