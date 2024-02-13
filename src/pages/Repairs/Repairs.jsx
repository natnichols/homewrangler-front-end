//css
import styles from './Repairs.module.css'

//component
import BudgetAvail from '../../components/BudgetAvail/BudgetAvail';
import RepairCard from '../../components/RepairCard/RepairCard';
import RepairAdd from '../../components/RepairAdd/RepairAdd';

const Repairs = () => {
  return (
    <main className={styles.container}>
      <h1>Repairs component</h1>
        <RepairAdd />
        <RepairCard />
        <BudgetAvail />
      <h4>end of Repairs component</h4>
    </main>
  )
}

export default Repairs;