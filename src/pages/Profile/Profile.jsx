// npm modules
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'

// css
import styles from './Profile.module.css'

const Profile = ({ user }) => {
  {console.log('test display username1', user.name)}  
  {console.log('test nested profile?', user.profile)}  
  {console.log('test nested profile name', user.profile.name)}  

  // const [profile, setProfile] = useState([])


  
  // const profilePhoto = user.profile.photo ? user.profile.photo : ''

  return (
    <main className={styles.container}>
      <h1>Single profile component.</h1>

        {/* <p>
          <img src={user.profile.photo} alt="The user's avatar" />
        </p> */}
        {/* <p>testing nested Profile props: {'-->'} {user.profile.name} {'<--'}</p>
        <p>testing nested Profile props: {'-->'} {user.profile.name} {'<--'}</p> */}

        <p>{user.name}</p>
        <p>{user.email}</p>
        <NavLink to="/auth/change-password">
          <button>change password</button>
        </NavLink>
        <button>edit profile (not active - stretch)</button>


      <h4>end of Profile component</h4>
    </main>
  )
}

export default Profile
