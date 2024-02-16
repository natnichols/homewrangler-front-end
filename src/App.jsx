// npm modules
import { useState, useEffect } from 'react'
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
import RepairEdit from './pages/RepairEdit/RepairEdit'
import EditRepairTaskCard from './components/EditRepairTaskCard/EditRepairTaskCard'
import Budgets from './pages/Budgets/Budgets'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import RepairAdd from './components/RepairAdd/RepairAdd'

// services
import * as authService from './services/authService'
import * as pantryService from './services/pantryService'
import * as repairService from './services/repairService'
import * as budgetService from './services/budgetService'
import * as profileService from './services/profileService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [pantryItems, setPantryItems] = useState([])
  const [repairs, setRepairs] = useState([])
  const [budgets, setBudgets] = useState([])
  // next line - setting profile in state (initially for use with handleAdd & handleDel from shopping cart) - can pass "profile={profile}" down to any component now
  const [profile, setProfile] = useState([])
  const navigate = useNavigate()

  // to auto-update profile data in state if anything changes (initially for use with handleAdd & handleDel from shopping cart)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (user) {
            const profileData = await profileService.getOneProfile(user.profile)
            setProfile(profileData)
          }
      } catch (error) {
        console.error('Error fetching profile:', error)
      }
    }
    fetchProfile()
  }, [user])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

// Pantry Functions
  useEffect( () => {
    const fetchFullPantry = async () => {
      const data = await pantryService.index()
      setPantryItems(data)
    }
    if (user) fetchFullPantry()
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

  // new Shopping List functions:
  const handleAddToShoppingList = async (pantryItemId) => {
    await pantryService.addToShoppingList(pantryItemId)
    const profileUpdated = await profileService.getOneProfile(user.profile);
    setProfile(profileUpdated)
  }
  const handleDelFromShoppingList = async (pantryItemId) => {
    await pantryService.delFromShoppingList(pantryItemId)
    const profileUpdated = await profileService.getOneProfile(user.profile);
    setProfile(profileUpdated)
  }
  
// Repair Functions
  useEffect(() => {
    const fetchAllRepairs = async () => {
      const data = await repairService.index()
      setRepairs(data)
    }
    if (user) fetchAllRepairs()
  }, [user])

  const handleAddRepair = async (repairFormData) => {
    const newRepair = await repairService.create(repairFormData)
    setRepairs([newRepair, ...repairs])
    navigate('/repairs')
  }

  const handleUpdateRepair = async (repairFormData) => {
    const updatedRepair = await repairService.update(repairFormData)
    setRepairs(repairs.map(repair => repair._id === updatedRepair._id ? updatedRepair : repair ))
    navigate('/repairs')
  }

  const handleDeleteRepair = async (repairId) => {
    const deletedRepair = await repairService.deleteRepair(repairId)
    setRepairs(repairs.filter(repair => repair._id !== deletedRepair._id))
    navigate('/repairs')
  }
  
  // Budget Functions
  useEffect (() => {
    const fetchAllBudgets = async () => {
      const data = await budgetService.index()
      console.log('Budget data', data)
      setBudgets(data)
    }
    if(user) fetchAllBudgets()
  },[user])

  const handleAddBudget = async (budgetFormData) => {
    const newBudget = await budgetService.create(budgetFormData)
    setBudgets([newBudget, ...budgets])
    navigate('/budgets')
  }

  const handleDeleteBudget = async (budgetId) => {
    const deleteBudget = await budgetService.deleteBudget(budgetId)
    setBudgets(budgets.filter(b => b._id !== deleteBudget._id))
    navigate('/budgets')
  }
  return (
    <>
      <div className='position-handle-nav'>
        <NavBar user={user} handleLogout={handleLogout} />
      </div>

      <div className='position-handle-remainder'>
      <Routes>
        {/* LANDING ROUTE */}
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
          path="/profiles/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile
                user={user}
                handleLogout={handleLogout}
              />
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
        {/* VIEW PANTRY */}
        <Route
          path="/pantryItems"
          element={
            <ProtectedRoute user={user}>
              <PantryList
                budgets={budgets}
                user={user}
                profile={profile}
                pantryItems={pantryItems}
                handlePantryItemAdd={handlePantryItemAdd}
                handleAddToShoppingList={handleAddToShoppingList}
                handleDelFromShoppingList={handleDelFromShoppingList}
              />
            </ProtectedRoute>
          }
        />
        {/* VIEW PANTRY ITEM DETAILS */}
        <Route
          path="/pantryItems/:pantryItemId"
          element={
            <ProtectedRoute user={user}>
              <PantryItemDetails handleDeletePantryItem={handleDeletePantryItem} user={user} />
            </ProtectedRoute>
          }
        />
        {/* EDIT PANTRY ITEM */}
        <Route
          path="/pantryItems/:pantryItemId/edit"
          element={
            <ProtectedRoute user={user}>
              <EditPantryItem handleUpdatePantryItem={handleUpdatePantryItem} />
            </ProtectedRoute>
          }
        />
        {/* VIEW SHOPPING LIST */}
        <Route
          path="/shoppingList"
          element={
            <ProtectedRoute user={user}>
              <ShoppingList
                budgets={budgets}
                user={user}
                profile={profile}
                pantryItems={pantryItems}
                handlePantryItemAdd={handlePantryItemAdd}
                handleAddToShoppingList={handleAddToShoppingList}
                handleDelFromShoppingList={handleDelFromShoppingList}
              />
            </ProtectedRoute>
          }
        />

        {/* REPAIR ROUTES */}
        <Route
          path="/repairs"
          element={
            <ProtectedRoute user={user}>
              <Repairs 
                user={user}
                profile={profile}
                repairs={repairs} 
                budgets={budgets}
                handleAddRepair={handleAddRepair} 
              />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/repairs/:repairId"
          element={
            <ProtectedRoute user={user}>
              <RepairDetails user={user} handleDeleteRepair={handleDeleteRepair} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/repairs/:repairId/edit"
          element={
            <ProtectedRoute user={user}>
              <RepairEdit handleUpdateRepair={handleUpdateRepair} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/repairs/new"
          element={
            <ProtectedRoute user={user}>
              <RepairAdd handleAddRepair={handleAddRepair} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/repairs/:repairId/repairTasks/:repairTaskId"
          element={
            <ProtectedRoute user={user}>
              <EditRepairTaskCard />
            </ProtectedRoute>
          }
        />

        {/* BUDGET ROUTE */}
        <Route
          path="/budgets"
          element={
            <ProtectedRoute user={user}>
              <Budgets
                handleDeleteBudget={handleDeleteBudget}
                handleAddBudget={handleAddBudget}
                profile={profile}
                budgets={budgets}
              />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* end of giant position-handle-remainder wrapper: */}
      </div>
    </>
  )
}

export default App