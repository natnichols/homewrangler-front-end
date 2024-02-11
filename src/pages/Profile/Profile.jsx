// npm modules

// import { useState, useEffect } from 'react'

// // services
// import * as profileService from '../../services/profileService'

// css
import styles from './Profile.module.css'

const Profile = ({ user }) => {
  {console.log('test display username1', user.name)}  
  
  // const profilePhoto = user.profile.photo ? user.profile.photo : ''

  return (
    <main className={styles.container}>
      <h1>Single profile component.</h1>

        {/* <p>
          <img src={user.profile.photo} alt="The user's avatar" />
        </p> */}

        <p>{user.name}</p>
        <p>{user.email}</p>
        <button>change password</button>
        <button>edit profile (not active - stretch)</button>


      <h4>end of Profile component</h4>
    </main>
  )
}

export default Profile
