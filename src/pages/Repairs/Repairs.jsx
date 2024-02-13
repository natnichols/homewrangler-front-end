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
  const [showAddRepair, setshowAddRepair] = useState(false)

  const toggleAddForm = () => {
    setshowAddRepair(!showAddRepair)
  }
  
  return (
    <main className={styles.container}>
      <h1>List of Repairs</h1>
      <button onClick={toggleAddForm}>
        {showAddRepair ? "Hide Add Form" : "Show Add Form"}
      </button>
      {showAddRepair && <RepairAdd handleAddRepair={props.handleAddRepair} /> }
        
      {props.repairs.map(repair => (
        <RepairCard key={repair._id} repair={repair} />
      ))}
      <BudgetAvail />
      <h4>end of Repairs component</h4>
    </main>
  )
}

export default Repairs