import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>Hello coder</h1>

      <Login />
      <Profile />

      {/* 37:40 */}

    </UserContextProvider>
  )
}

export default App
