// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Landing component</h1>
      <h2>hello, {user ? user.name : 'friend'}</h2>
      <h3>end of Landing component</h3>
    </main>
  )
}

export default Landing
