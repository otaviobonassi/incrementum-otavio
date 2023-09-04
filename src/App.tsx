import Container from "@mui/material/Container"
import { Routes, Route } from "react-router-dom"

import "./App.css"
import Navbar from "./components/navbar"
import { routes } from "./routes"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          padding: "2vh 2vw",
        }}
      >
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} element={route.element} path={route.path} />
          ))}
        </Routes>
      </Container>
    </div>
  )
}

export default App
