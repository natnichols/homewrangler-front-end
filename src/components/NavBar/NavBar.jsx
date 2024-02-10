// npm modules
import { NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <div className={styles.container}>
          <div><NavLink to="/profiles/:profileId">User Profile</NavLink></div>
          <div>Shipping List</div>
          <div>My Pantry</div>
          <div>Repairs</div>
          <div>Budget</div>
          <div><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></div>
        </div>
      :
        <ul>
          <li>leaving for safety - will be removed eventually</li>
          <li>Welcome, {user.name}</li>
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
