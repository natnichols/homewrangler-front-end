//css
import styles from './BudgetAvail.module.css'

const BudgetAvail = ({budgets}) => {
  const totalAmount = budgets.reduce((total, budget) => total + budget.amount, 0);
  return (
    <main className={styles.container}>
      <h2>Budget Avaliable: ${totalAmount}</h2>
      
    </main>
  )
}

export default BudgetAvail


