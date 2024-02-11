// // npm modules
// import { useState, useEffect } from 'react'

// // services
// import * as profileService from '../../services/profileService'

// css
import styles from './Profile.module.css'

const Profile = ({ user }) => {
  {console.log('test display username1', user.name)}  
  
  const profilePhoto = user.profile.photo ? user.profile.photo : ''

  return (
    <main className={styles.container}>
      <h1>Single profile component.</h1>

        <p><img src={profilePhoto} alt="The user's avatar" />
        </p>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>change password button</p>
        <p>edit profile button (stretch)</p>


      <h3>end of Profile component</h3>
    </main>
  )
}

export default Profile
