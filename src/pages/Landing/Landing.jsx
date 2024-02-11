// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Landing component</h1>
      <h2>howdy, {user ? user.name : 'pardner'}</h2>
      <h2>test section below:</h2>
      {user ? (
      <>
        'LOGGED-IN USER SHOULD SEE THIS'
        <h1>HomeWrangler</h1>

      </>
      ) : (
      <>
        'NOT-LOGGED IN SHOULD SEE THIS'
      </>
      )}


      <h4>end of Landing component</h4>
    </main>
  )
}

export default Landing
