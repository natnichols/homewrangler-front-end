// // npm modules
// import { useState, useEffect } from 'react'

// // services
// import * as profileService from '../../services/profileService'

// css
import styles from './Profile.module.css'

const Profile = () => {
  // const [profiles, setProfiles] = useState([])

  // useEffect(() => {
  //   const fetchProfiles = async () => {
  //     const profileData = await profileService.getAllProfiles()
  //     setProfiles(profileData)
  //   }
  //   fetchProfiles()
  // }, [])

  // if (!profiles.length) {
  //   return <main className={styles.container}><h1>Loading...</h1></main>
  // }
  
  return (
    <main className={styles.container}>
      <h1>Single profile component.</h1>
      {/* {profiles.map(profile => (
        <p key={profile._id}>{profile.name}</p>
      ))} */}
        <p>user photo will go here</p>
        <p>user's name</p>
        <p>user's email</p>
        <p>change password button</p>
        <p>edit profile button (stretch)</p>


      <h3>end of Profile component</h3>
    </main>
  )
}

export default Profile
