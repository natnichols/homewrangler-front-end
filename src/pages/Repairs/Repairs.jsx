// npm modules
import { useState } from 'react'

// pages

// components
import RepairAdd from '../../components/RepairAdd/RepairAdd'
import RepairCard from '../../components/RepairCard/RepairCard'
// import BudgetAvail from '../../components/BudgetAvail/BudgetAvail'

// services

// css
import styles from './Repairs.module.css'

const Repairs = (props) => {
  const [showAddRepair, setShowAddRepair] = useState(false)

  const filteredRepairs = props.repairs.filter(repair => repair.owner._id === props.profile._id)

  const toggleAddRepairForm = () => {
    setShowAddRepair(!showAddRepair)
  }
  
  return (
    <main className={styles.container}>
      <h1>List of Repairs</h1>
      <div style={{ width: 'fit-content' }}>
        <button onClick={toggleAddRepairForm}>
          {showAddRepair ? "Hide Add Form" : "Show Add Form"}
        </button>
      </div>
      {showAddRepair && <RepairAdd handleAddRepair={props.handleAddRepair} /> }
      {filteredRepairs.map(repair => (
        <RepairCard 
          key={repair._id} 
          repair={repair} 
        />
      ))}
      {/* <BudgetAvail /> */}
    </main>
  )
}

export default Repairs