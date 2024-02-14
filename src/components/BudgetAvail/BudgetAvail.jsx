//css
import styles from './BudgetAvail.module.css'


const BudgetAvail = ({budgets}) => {
  // Check if budgets is defined before using reduce
  if (!budgets || budgets.length === 0) {
    return <div>No budgets available</div>
  }
  

  const totalAmount = budgets.reduce((total, budget) => total + budget.amount, 0);
  return (
    <main className={styles.container}>
      <h2>Budget Avaliable: ${totalAmount}</h2>
    </main>
  )
}

export default BudgetAvail


