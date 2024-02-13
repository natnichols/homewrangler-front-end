//css
import styles from './Budgets.module.css'

// components
import BudgetChange from '../BudgetChange/BudgetChange';
import BudgetAvail from '../../components/BudgetAvail/BudgetAvail';

const Budgets = () => {
  return (
    <main className={styles.container}>
      <h1>Budget component</h1>

        <BudgetChange />
        <BudgetAvail />

      <h4>end of Budget component</h4>
    </main>
  )
}

export default Budgets;