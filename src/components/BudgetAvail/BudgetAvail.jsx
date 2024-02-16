//css
import styles from './BudgetAvail.module.css'


const BudgetAvail = (props) => {
  // Check if budgets is defined before using reduce
  if (!props.budgets || props.budgets.length === 0) {
    return <div>No budgets available</div>
  }
  
  const filteredBudgets = props.budgets.filter(budget => budget.owner._id === props.profile._id)

  const totalAmount = filteredBudgets.reduce((total, budget) => total + budget.amount, 0)
  
  return (
    <main className={styles.container}>
      <h4>Amount Available: ${totalAmount}</h4>
    </main>
  )
}

export default BudgetAvail

