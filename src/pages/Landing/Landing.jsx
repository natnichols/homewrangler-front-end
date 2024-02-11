//npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {/* <h1>Landing component</h1> */}
      {/* <h2>test section below:</h2> */}
      {user ? (
      <>
        <br></br>
        'LOGGED-IN USER SHOULD SEE THIS'
        <h1>HomeWrangler</h1>
        <h2>howdy, {user ? user.name : 'pardner'}</h2>
        <br></br>
        <button>Shopping List (not active)</button>
        <br></br>
        <NavLink to="/pantryItems"><button>My Pantry</button></NavLink>
        <br></br>
        <br></br>
        <button>Repairs (not active)</button>
        <br></br>
        <br></br>
        <button>Budget button (not active)</button>
      </>
      ) : (
      <>
        NOT-LOGGED IN SHOULD SEE THIS:
        <h1>HomeWrangler</h1>
        <h4>(logo will go here)</h4>
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
