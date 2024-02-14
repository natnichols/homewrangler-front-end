//npm 
import { useState, useEffect } from 'react';

// services
import * as profileService from '../../services/profileService'

//css
import styles from './ShoppingList.module.css'

//components
// import BudgetAvail from '../../components/BudgetAvail/BudgetAvail';
import PantryCard from '../../components/PantryCard/PantryCard';

const ShoppingList = (props) => {
  // console.log('test props.user ', props.user);
  // console.log('test props.user.profile ', props.user.profile);
  // console.log('test props.user.profile._id ', props.user.profile._id);
  // console.log('test props.user.profile.shoppingList ', props.user.profile.shoppingList);

  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getOneProfile(props.user.profile)
      setProfile(profileData)
    }
    fetchProfile()
  }, [props.user.profile])

  console.log('test single profile: ', profile);

  return (
    <main className={styles.container}>
      <h1>My Shopping List</h1>

      <div className={`${styles.container} ${styles.listContainer}`}>
        {/* {props.pantryItems
          .filter(pantryItem => user.profile.shoppingList.includes(pantryItem._id))
          .map(pantryItem =>  */}
        {props.pantryItems.map(pantryItem => 
          <PantryCard
            key={pantryItem._id}
            pantryItem={pantryItem}
            handleAddToShoppingList={props.handleAddToShoppingList}
            handleDelFromShoppingList={props.handleDelFromShoppingList}
            />
        )}
      </div>

        {/* <BudgetAvail/> */}

      <h4>end of ShoppingList component</h4>
    </main>
  )
}

export default ShoppingList;