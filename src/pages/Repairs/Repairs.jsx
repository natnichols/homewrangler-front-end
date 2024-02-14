// npm modules
import { useState } from 'react'

// pages

// components
import RepairAdd from '../../components/RepairAdd/RepairAdd'
import RepairCard from '../../components/RepairCard/RepairCard'
import BudgetAvail from '../../components/BudgetAvail/BudgetAvail'

// services

// css
import styles from './Repairs.module.css'

const Repairs = (props) => {
  const [showAddRepair, setShowAddRepair] = useState(false)

  const toggleAddRepairForm = () => {
    setShowAddRepair(!showAddRepair)
  }
  
  return (
    <main className={styles.container}>
      <h1>List of Repairs</h1>
      <button onClick={toggleAddRepairForm}>
        {showAddRepair ? "Hide Add Form" : "Show Add Form"}
      </button>
      {showAddRepair && <RepairAdd handleAddRepair={props.handleAddRepair} /> }
        
      {props.repairs.map(repair => (
        <RepairCard key={repair._id} repair={repair} />
      ))}
      {/* <BudgetAvail /> */}
    </main>
  )
}

export default Repairs