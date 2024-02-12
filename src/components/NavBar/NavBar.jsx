// npm modules
import { NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  {console.log('TEST USER ', user);}
  if (user) {
    return (
      <nav>
          <div className={styles.container}>

            <div>
              <NavLink
                to={`/profiles/${user.profile}`}
                className={styles.link}
              >🤠
              </NavLink>
            </div>

            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>🛒</div> / 

            <div>
              <NavLink
                to="/pantryItems"
                className={styles.link}
                // Not working yet:
                // className={location.pathname === "/pantryItems" ? "styles.active" : "styles.link"} 
              >🥫
              </NavLink>
            </div>

            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>🔧</div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>💰</div>
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
