//npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {user ? (
      <>
        <br></br>
        {/* 'LOGGED-IN USER WILL SEE THIS' */}
        <h2>Well howdy, {user ? user.name : 'pardner'}!</h2>
        <div>
          <img
            src='/src/assets/hw-logo-border-brown.png'
            alt="Logo."
            style={{ width: '400px', maxWidth: '100%' }} 
          />
        </div>
        <NavLink to={`/shoppingList`}><button>Shopping List</button></NavLink>
        <NavLink to="/pantryItems"><button>My Pantry</button></NavLink>
        <br/>
        <NavLink to="/repairs"><button>Repairs</button></NavLink>
        <br/>
        <NavLink to="/budgets"><button>Budgets</button></NavLink>
      </>
      ) : (
      <>
        {/* NOT-LOGGED IN SHOULD SEE THIS: */}
        <h1>HomeWrangler</h1>
        <div>
          <img
            src='/src/assets/hw-logo-border-brown.png'
            alt="Logo."
            style={{ width: '400px', maxWidth: '100%' }} 
          />
        </div>
        <h3>Take control of yer household, pardner.</h3>
        <NavLink to="/auth/login"><button>Log In</button></NavLink>
        <NavLink to="/auth/signup"><button>Sign Up</button></NavLink>
      </>
      )}

    </main>
  )
}

export default Landing
