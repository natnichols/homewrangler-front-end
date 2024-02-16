// npm modules
import { useState } from 'react'
import { Link } from 'react-router-dom'

// components

// css
import styles from './RepairCard.module.css'

const RepairCard = ({ repair }) => {
  const [showRepairTasks, setShowRepairTasks] = useState(false)

  const toggleRepairTasks = () => {
    setShowRepairTasks(!showRepairTasks)
  }

  return (
    <main className={styles.container}>

      <div style={{ display: 'flex', alignItems: 'center' }}>
          <p><strong>{repair.name}</strong></p>
        &nbsp;
        <p><strong>({repair.priority})</strong></p>
        &nbsp;
        <Link to={`/repairs/${repair._id}`}>
          👁️
        </Link>
      </div>

      <p>Approx. Cost: ${repair.cost}</p>

      { repair.repairTasks.length
      ?
        <div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
          <br></br>
          <button onClick={toggleRepairTasks}>
          {showRepairTasks ? "Hide Tasks" : "Show Tasks"}
          </button>
        </div>
      : '' }

      {showRepairTasks && repair.repairTasks.map(repairTask => (
        <li key={repairTask._id}>
          {repairTask.done ? (
            <del>{repairTask.task}</del>
          ) : (
            <>{repairTask.task}</>
          )}
        </li>
      ))}
    </main>
  )
}

export default RepairCard;