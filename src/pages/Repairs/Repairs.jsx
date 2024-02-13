//css
import styles from './Repairs.module.css'

//component
import BudgetAvail from '../../components/BudgetAvail/BudgetAvail';
import RepairCard from '../../components/RepairCard/RepairCard';

const Repairs = () => {
  return (
    <main className={styles.container}>
      <h1>Repairs component</h1>

        <p>Link to Add Repair here (or whole component)</p>
        <p>Link to Edit Repair here</p>
        <p>Link to Repair Details here</p>


        <BudgetAvail />
        <RepairCard />
      <h4>end of Repairs component</h4>
    </main>
  )
}

export default Repairs;