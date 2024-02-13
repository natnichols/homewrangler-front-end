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
  console.log('Repair List props:', props)
  return (
    <main className={styles.container}>
      <h1>List of Repairs</h1>
        <RepairAdd />
        <RepairCard />
        {props.repairs.map(repair => (
          <h1 key={repair._id}>
            {repair.name}
          </h1>
        ))}
        <BudgetAvail />
      <h4>end of Repairs component</h4>
    </main>
  )
}

export default Repairs