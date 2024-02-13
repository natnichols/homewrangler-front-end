// npm modules
import { NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  // this test was for passing profile ID to Single Profile component
  // {console.log('TEST USER ', user);}
  if (user) {
    return (
      <nav>
          <div className={styles.container}>

            <div className={styles.linkbox}>
              <NavLink
                to={`/profiles/${user.profile}`}
                className={styles.link}
              >🤠
              </NavLink>
            </div>

            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.linkbox}>
              <NavLink
                to={`/pantryItems/${user.profile}`}
                className={styles.link}
              >🛒
              </NavLink>
            </div>

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
            <div className={styles.linkbox}>
              <NavLink
                to="/repairs"
                className={styles.link}
              >🔧
              </NavLink>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.linkbox}>
              <NavLink
                to="/budgets"
                className={styles.link}
              >💰
              </NavLink>
            </div>
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
