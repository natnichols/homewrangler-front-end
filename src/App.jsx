// npm modules
import { useState, useEffect} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profile from './pages/Profile/Profile'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import PantryList from './pages/PantryList/PantryList'
import PantryItemDetails from './pages/PantryItemDetail/PantryItemDetail'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as pantryService from './services/pantryService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [pantryItems, setPantryItems] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  useEffect( () => {
    const fetchAllPantrys = async () => {
      const data = await pantryService.index()
      console.log(data)
      setPantryItems(data)
    }
    if (user) fetchAllPantrys()
  }, [user])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles/:profileId"
          element={
            <ProtectedRoute user={user}>
              <Profile user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pantryItems"
          element={
            <ProtectedRoute user={user}>
              <PantryList pantryItems={pantryItems}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/pantryItems/:pantryItemId"
          element={
            <ProtectedRoute user={user}>
              <PantryItemDetails PantryItemDetails={PantryItemDetails}/>
            </ProtectedRoute>
          }
        />
      </Routes>
      
    </>
  )
}

export default App
