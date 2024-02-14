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
    
      <article className={styles.container}>
        <header>
          <span>
            <Link to={`/repairs/${repair._id}`}>
              <h2>{repair.name}</h2>
            </Link>
            <h2>{repair.priority}</h2>
          </span>
        </header>
        <button onClick={toggleRepairTasks}>
        {showRepairTasks ? "Hide Repair Tasks" : "Show Repair Tasks"}
        </button>
        {showRepairTasks && repair.repairTasks.map(repairTask => (
          <li key={repairTask._id}>
            {repairTask.task}
          </li>
        ))}
      </article>
  )
}

export default RepairCard;