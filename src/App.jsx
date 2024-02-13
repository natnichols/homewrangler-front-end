// npm modules
import { useState, useEffect} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Landing from './pages/Landing/Landing'
import PantryList from './pages/PantryList/PantryList'
import PantryItemDetails from './pages/PantryItemDetails/PantryItemDetails'
import EditPantryItem from './pages/EditPantryItem/EditPantryItem'
import ShoppingList from './pages/ShoppingList/ShoppingList'
import Repairs from './pages/Repairs/Repairs'
import RepairDetails from './pages/RepairDetails/RepairDetails'
import Budgets from './pages/Budgets/Budgets'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as pantryService from './services/pantryService'
import * as repairService from './services/repairService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [pantryItems, setPantryItems] = useState([])
  const [repairs, setRepairs] = useState([])
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
    const fetchFullPantry = async () => {
      const data = await pantryService.index()
      console.log(data)
      setPantryItems(data)
    }
    if (user) fetchFullPantry()
  }, [user])

  useEffect(() => {
    const fetchAllRepairs = async () => {
      const data = await repairService.index()
      setRepairs(data)
    }
    if (user) fetchAllRepairs()
  }, [user])

  const handlePantryItemAdd = async (pantryItemData) => {
    const newPantryItem = await pantryService.create(pantryItemData)
    setPantryItems([newPantryItem, ...pantryItems])
    navigate('/pantryItems')
  }

  const handleUpdatePantryItem = async (pantryItemData) => {
    const updatedPantryItem = await pantryService.update(pantryItemData)
    setPantryItems(pantryItems.map(pantryItem => pantryItem._id === updatedPantryItem._id ? updatedPantryItem : pantryItem))
    navigate('pantryItems')
  }

  const handleDeletePantryItem = async (pantryItemId) => {
    const deletedPantryItem = await pantryService.deletePantryItem(pantryItemId)
    setPantryItems(pantryItems.filter(p => p._id !== deletedPantryItem._id))
    navigate('/pantryItems')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        {/* LANDING ROUTES */}
        <Route path="/" element={<Landing user={user} />} />

        {/* AUTH ROUTES */}
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

        {/* PROFILE ROUTES */}
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

        {/* PANTRY ROUTES */}
        <Route
          path="/pantryItems/:pantryItemId"
          element={
            <ProtectedRoute user={user}>
              <PantryItemDetails handleDeletePantryItem={handleDeletePantryItem} user={user} />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/pantryItems/shoppingCart/:profileId"
          element={
            <ProtectedRoute user={user}>
              <ShoppingList pantryItems={pantryItems}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/pantryItems"
          element={
            <ProtectedRoute user={user}>
              <PantryList handlePantryItemAdd={handlePantryItemAdd} pantryItems={pantryItems}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/pantryItems/:pantryItemId/edit"
          element={
            <ProtectedRoute user={user}>
              <EditPantryItem handleUpdatePantryItem={handleUpdatePantryItem} />
            </ProtectedRoute>
          }
        />
        

        {/* REPAIR ROUTES */}
        <Route
          path="/repairs"
          element={
            <ProtectedRoute user={user}>
              <Repairs repairs={repairs} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/repairs/:repairId"
          element={
            <ProtectedRoute user={user}>
              <RepairDetails user={user} />
            </ProtectedRoute>
          }
        />

        {/* BUDGET ROUTES */}
        <Route
          path="/budgets"
          element={
            <ProtectedRoute user={user}>
              <Budgets />
            </ProtectedRoute>
          }
        />


      </Routes>
      
    </>
  )
}

export default App
