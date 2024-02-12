// npm modules
import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'

// css
import styles from './Profile.module.css'

const Profile = ({ user }) => {
  const { profileId } = useParams()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getOneProfile(profileId)
      setProfile(profileData)
    }
    fetchProfile()
  }, [profileId])

  // console.log('test single profile: ', profile);

  if (!profile) {
    return <main className={styles.container}><h2>Loading profile.</h2></main>
  }

  return (
    <main className={styles.container}>
      <h1>Single profile component.</h1>
        <p>
          <img
            src={profile.photo}
            alt="No profile photo! But that's ok. You look great."
            style={{ width: '300px' }}
          />
        </p>
        <p>Name: {profile.name}</p>
        <p>Email: {user.email}</p>
        <NavLink to="/auth/change-password">
          <button>change password</button>
        </NavLink>
        <button>edit profile (not active - stretch)</button>

      <h4>end of Profile component</h4>
    </main>
  )
}

export default Profile
