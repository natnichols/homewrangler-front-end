//npm 
// import { useState, useEffect } from 'react'

// services
// import * as profileService from '../../services/profileService'

//css
import styles from './ShoppingList.module.css'

//components
// import BudgetAvail from '../../components/BudgetAvail/BudgetAvail'
import ShoppingListCard from '../../components/ShoppingListCard/ShoppingListCard'
import BudgetAvail from '../../components/BudgetAvail/BudgetAvail'

const ShoppingList = (props) => {
  // console.log('test props.user ', props.user)
  // console.log('test props.user.profile ', props.user.profile)
  // console.log('test props.user.profile._id ', props.user.profile._id)
  // console.log('test props.user.profile.shoppingList ', props.user.profile.shoppingList)

  // console.log('test single profile ON SHOPPING LIST PAGE! ', props.profile)

  if (!props.profile) {
    return <main className={styles.container}><h2>Loading...</h2></main>
  }

  return (
    <main>
      <header className={styles.container}>

        <h1>My Shopping List</h1>
        <br></br>
        <BudgetAvail budgets={props.budgets} profile={props.profile}/>

      </header>
      <br></br>

      <div className={`${styles.listContainer}`}>
        {props.pantryItems
          .filter(pantryItem => props.profile.shoppingList.includes(pantryItem._id))
          .map(pantryItem => 
          <ShoppingListCard
            key={pantryItem._id}
            pantryItem={pantryItem}
            // handleAddToShoppingList={props.handleAddToShoppingList}
            handleDelFromShoppingList={props.handleDelFromShoppingList}
          />
        )}
      </div>

        {/* <BudgetAvail/> */}

    </main>
  )
}

export default ShoppingList