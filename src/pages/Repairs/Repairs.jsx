// npm modules


// pages


// components
import BudgetAvail from '../../components/BudgetAvail/BudgetAvail'
import RepairCard from '../../components/RepairCard/RepairCard'
import RepairAdd from '../../components/RepairAdd/RepairAdd'

// services


// css
import styles from './Repairs.module.css'

const Repairs = (props) => {
  return (
    <main className={styles.container}>
      <h1>List of Repairs</h1>
        <RepairAdd />
        {props.repairs.map(repair => (
          <RepairCard key={repair._id} repair={repair} />
        ))}
        <BudgetAvail />
      <h4>end of Repairs component</h4>
    </main>
  )
}

export default Repairs