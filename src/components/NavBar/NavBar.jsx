// npm modules
import { NavLink } from 'react-router-dom'

// styles
import styles from './NavBar.module.css'

// image
import cowboyHatSmall from '../../assets/cowboy-hat-tp-bg-small.png'

const NavBar = ({ user }) => {

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
          >
            <img
              src={cowboyHatSmall}
              alt="Cowboy hat."
              style={{ width: '40px' }} 
            />
          </NavLink>
        </div>

        &nbsp;&nbsp;
        <div className={styles.linkbox}>
          <NavLink
            title='Pantry'
            to="/pantryItems"
            className={styles.link}
          >🥫
          </NavLink>
        </div>

        <div className={styles.linkbox}>
          <NavLink
            title='Shipping List'
            to={`/shoppingList`}
            className={styles.link}
          >🛒
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

        {/* end of both nav wrappers here - inner then outer */}
        </div>
        </div> 
      </nav>
    )
  }
}

export default NavBar