// npm modules
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'

// css
import styles from './Profile.module.css'

// images
import hwLogoBrown from '../../assets/hw-logo-border-brown.png'

const Profile = ({ user }) => {
  // removed! no need to do by URL anymore.
  // const { profileId } = useParams()

  // will provide profile id:
  // console.log('test user.profile: ', user.profile);
  // will not work - 'profile' property is already an id
  // console.log('test user.profile._id: ', user.profile._id);
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getOneProfile(user.profile)
      setProfile(profileData)
    }
    fetchProfile()
  }, [user.profile])

  console.log('test single profile: ', profile)

  if (!profile) {
    return <main className={styles.container}><h2>Loading profile.</h2></main>
  }

  return (
    <main className={styles.container}>
      <h1>HomeWrangler</h1>
      <br></br>
      <h4>Cowpoke info:</h4>
        <p>
          <img
            src={profile.photo}
            alt="No profile photo! But that's ok. You look great."
            style={{ width: '400px', maxWidth: '100%' }}
          />
        </p>
        <p>Name: {profile.name}</p>
        <p>Email: {user.email}</p>
        <NavLink to="/auth/change-password">
          <button>Change Password</button>
        </NavLink>
        
        {/* ** ICE BOX ** */}
        {/* <div style={{ width: 'fit-content' }}>
          <button>edit profile</button>
        </div> */}
      <br></br>
      <br></br>
      <img
        src={hwLogoBrown}
        alt="Logo."
        style={{ width: '200px', maxWidth: '100%' }} 
      />
      <h4>Gather 'round the campfire:</h4>

      <p style={{ textAlign: 'center', marginBottom: '8px' }}>
        Life is complicated out on the range. Why waste all yer perfectly good mind juice on simple things like grocery lists or repairs? Let us wrangle it for ya.
      </p>
      <p style={{ textAlign: 'center', marginBottom: '8px' }}>
        The goal of HomeWrangler is to help you spend <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>less time & mental energy</span> on those repetitive-yet-necessary household tasks. Groceries and home repairs can be logged with only a few button presses. When you realize you're running low on milk, simply look in your (digital) pantry and add it to your shopping list. When you're at the hardware store, just look at your to-do list to see what you need. Decide how much money you want to set aside & reference it easily when shopping. 
      </p>
      <p style={{ textAlign: 'center', marginBottom: '8px' }}>
        Our goal is to make your life easier. We have more features planned for the future, so grab your saddle and join the posse!
      </p>
      <br></br>
      <h4>Carrier pigeon:</h4>
      <p>Nat: natalie.e.nichols ( at ) gmail.com</p>
      <p>Shawn: shawnkang0818 ( at ) gmail.com</p>
      <p>Rich: rbozek ( at ) gmail.com</p>
    </main>
  )
}

export default Profile
