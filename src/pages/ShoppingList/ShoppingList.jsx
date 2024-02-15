//npm 
// import { useState, useEffect } from 'react';

// services
// import * as profileService from '../../services/profileService'

//css
import styles from './ShoppingList.module.css'

//components
// import BudgetAvail from '../../components/BudgetAvail/BudgetAvail';
import PantryCard from '../../components/PantryCard/PantryCard';
import ShoppingListCard from '../../components/ShoppingListCard/ShoppingListCard';

const ShoppingList = (props) => {
  // console.log('test props.user ', props.user);
  // console.log('test props.user.profile ', props.user.profile);
  // console.log('test props.user.profile._id ', props.user.profile._id);
  // console.log('test props.user.profile.shoppingList ', props.user.profile.shoppingList);

  console.log('test single profile ON SHOPPING LIST PAGE! ', props.profile);

  if (!props.profile) {
    return <main className={styles.container}><h2>Loading...</h2></main>
  }

  return (
    <main className={styles.container}>
      <h1>My Shopping List</h1>

      <div className={`${styles.container} ${styles.listContainer}`}>
        {/* {props.pantryItems.map(pantryItem =>  */}
        {props.pantryItems
          .filter(pantryItem => props.profile.shoppingList.includes(pantryItem._id))
          .map(pantryItem => 
          <ShoppingListCard
            key={pantryItem._id}
            pantryItem={pantryItem}
            handleAddToShoppingList={props.handleAddToShoppingList}
            handleDelFromShoppingList={props.handleDelFromShoppingList}
            // location={'shopping-list'}
          />
        )}
      </div>

        {/* <BudgetAvail/> */}

      <h4>end of ShoppingList component</h4>
    </main>
  )
}

export default ShoppingList;