// npm modules
import { NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  if (user) {
    return (
      <nav>
          <div className={styles.container}>

            <div className={styles.linkbox}>
              <NavLink
                to="/profiles/:profileId"
                className={styles.link}
              >🤠
              </NavLink>
            </div>

            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.linkbox}>🛒</div>

            &nbsp;
            <div className={styles.linkbox}>
              <NavLink
                to="/pantryItems"
                className={styles.link}
                // Not working yet:
                // className={location.pathname === "/pantryItems" ? "styles.active" : "styles.link"} 
              >🥫
              </NavLink>
            </div>

            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.linkbox}>🔧</div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.linkbox}>💰</div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            
            <NavLink
              to=""
              onClick={handleLogout}
            >
              <button>LogOut</button>
            </NavLink>
          </div>
      </nav>
    )
  }
}

export default NavBar
