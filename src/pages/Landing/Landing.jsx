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
        {/* 'LOGGED-IN USER SHOULD SEE THIS' */}
        <h2>howdy, {user ? user.name : 'pardner'}</h2>
        <br></br>
        <NavLink to={`/pantryItems/${user.profile}`}><button>Shopping List</button></NavLink>
        <br></br>
        <NavLink to="/pantryItems"><button>My Pantry</button></NavLink>
        <br></br>
        <br></br>
        <NavLink to="/repairs"><button>Repairs</button></NavLink>
        <br></br>
        <br></br>
        <NavLink to="/budgets"><button>Budget button</button></NavLink>
      </>
      ) : (
      <>
        {/* NOT-LOGGED IN SHOULD SEE THIS: */}
        <h1>HomeWrangler</h1>
        <div>
          <img
            src='/public/favicon/favicon-cowboy-hat.png'
            alt="Temporary."
            style={{ width: '300px' }} 
          />
        </div>
        <h3>"catchy app slogan goes here"</h3>
        <NavLink to="/auth/login"><button>Log In</button></NavLink>
        <br></br>
        <NavLink to="/auth/signup"><button>Sign Up</button></NavLink>
      </>
      )}

      <h4>(end of Landing component)</h4>
    </main>
  )
}

export default Landing
