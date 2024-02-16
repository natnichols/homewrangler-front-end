// npm
import { useState} from 'react'

//css
import styles from './PantryList.module.css'

// services

//components
import PantryCard from '../../components/PantryCard/PantryCard'
import PantryItemAdd from '../../components/PantryItemAdd/PantryItemAdd'
import BudgetAvail from '../../components/BudgetAvail/BudgetAvail'

const PantryList = (props) => {
  const [showItemAdd, setShowItemAdd] = useState(false)

  const toggleAddForm = () => {
    setShowItemAdd(!showItemAdd)
  }
  // useEffect(() => {
  //   const fetchBudgets = async () => {
  //     try {
  //       const data = await budgetService.index()
  //       setBudgets(data)
  //     } catch (error) {
  //       console.error('Error fetching budgets:', error)
  //     }
  //   }

  //   fetchBudgets()
  // }, [])

  // set this variable to use down below for mapping items - will show ONLY owner's items.
  const filteredPantryItems = props.pantryItems.filter(pantryItem => pantryItem.owner._id === props.profile._id)

  // const totalAmount = budgets.reduce((total, budget) => total + budget.amount, 0)

  return (  
    <main>
      {/* {props.BudgetAvail.totalAmount}
      <BudgetAvail totalAmount={totalAmount} /> */}
      <BudgetAvail budgets={props.budgets} profile={props.profile}/>
      <h1>My Pantry</h1>
      <div style={{ width: 'fit-content' }}>
        <button onClick={toggleAddForm}>
          {showItemAdd ? "Collapse This Form" : "Add New Item(s)"}
        </button>
      </div>
      {showItemAdd && <PantryItemAdd handlePantryItemAdd={props.handlePantryItemAdd} /> }

      <div className={`${styles.container} ${styles.listContainer}`}>
        {/* using variable from above to map thru ONLY owner's items */}
        {filteredPantryItems.map(pantryItem => 
          <PantryCard
            key={pantryItem._id}
            pantryItem={pantryItem}
            handleAddToShoppingList={props.handleAddToShoppingList}
            handleDelFromShoppingList={props.handleDelFromShoppingList}
            />
        )}
      </div>
    </main>
  )
}

export default PantryList