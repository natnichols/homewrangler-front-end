// npm modules
import { NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  // this test was for passing profile ID to Single Profile component
  // {console.log('TEST USER ', user);}
  if (user) {
    return (
      <nav>
            <div className={styles.navwrapouter}>
            <div className={styles.navwrapinner}>

            <div className={styles.linkbox}>
              <NavLink
                title='Profile'
                to={`/profiles/profile`}
                className={styles.link}
              >🤠
              </NavLink>
            </div>

            &nbsp;&nbsp;
            <div className={styles.linkbox}>
              <NavLink
                title='Shipping List'
                to={`/shoppingList`}
                className={styles.link}
              >🛒
              </NavLink>
            </div>

            
            <div className={styles.linkbox}>
              <NavLink
                title='Pantry'
                to="/pantryItems"
                className={styles.link}
                // Not working yet:
                // className={location.pathname === "/pantryItems" ? "styles.active" : "styles.link"} 
              >🥫
              </NavLink>
            </div>

            &nbsp;&nbsp;
            <div className={styles.linkbox}>
              <NavLink
                title='Repair'
                to="/repairs"
                className={styles.link}
              >🔧
              </NavLink>
            </div>
            &nbsp;&nbsp;
            <div className={styles.linkbox}>
              <NavLink
                title='Budget'
                to="/budgets"
                className={styles.link}
              >💰
              </NavLink>
            </div>
            &nbsp;&nbsp;
            
            <NavLink
              to=""
              onClick={handleLogout}
            >
              <button>LogOut</button>
            </NavLink>

          {/* end of both nav wrappers below */}
          </div>
          </div> 
      </nav>
    )
  }
}

export default NavBar
