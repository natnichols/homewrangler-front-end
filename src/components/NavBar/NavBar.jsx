// npm modules
import { NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  if (user) {
    return (
      <nav>
          <div className={styles.container}>
            <div><NavLink to="/profiles/:profileId">🤠</NavLink></div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>🛒</div> / 
            <div><NavLink to="/pantryItems">🥫</NavLink></div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>🔧</div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>💰</div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></div>
          </div>
      </nav>
    )
  }
}

export default NavBar
