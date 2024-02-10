// npm modules
import { NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <div className={styles.container}>
          <div><NavLink to="/profiles/:profileId">User Profile</NavLink></div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div>Shopping List /</div>
          <div>My Pantry</div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div>Repairs</div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div>Budget</div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></div>
        </div>
      :
        <ul>
          <li>leaving for safety - will be removed eventually</li>
          {/* <li>Welcome, {user.name}</li> */}
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
