// css
import styles from './ShoppingList.module.css'

// components
import ShoppingListCard from '../../components/ShoppingListCard/ShoppingListCard'
import BudgetAvail from '../../components/BudgetAvail/BudgetAvail'

const ShoppingList = (props) => {

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
            // can utilize later with some ice-box features
            // handleAddToShoppingList={props.handleAddToShoppingList}
            handleDelFromShoppingList={props.handleDelFromShoppingList}
          />
        )}
      </div>
    </main>
  )
}

export default ShoppingList