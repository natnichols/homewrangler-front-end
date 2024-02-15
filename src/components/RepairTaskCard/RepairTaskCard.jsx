// npm modules
// import { useState } from 'react'
import { Link } from 'react-router-dom'

// components
// import EditRepairTaskCard from '../EditRepairTaskCard/EditRepairTaskCard'

// css
// import styles from './RepairTaskCard.module.css'

const RepairTaskCard = ({ repairTask, repairId, user, handleDeleteRepairTask }) => {
  // const [showEditRepairTask, setShowEditRepairTask] = useState(false)

  // const toggleEditRepairTask = () => {
  //   setShowEditRepairTask(!showEditRepairTask)
  // }

  return ( 
    <article>
      <header>
        <span>
          {repairTask.owner._id === user.profile &&
            <>
              <Link title='edit repair task' to={`/repairs/${repairId}/repairTasks/${repairTask._id}`} state={repairTask}>
                ✏️
              </Link>
              {/* <button onClick={toggleEditRepairTask}>
                {showEditRepairTask ? "" : "📝"}
              </button> */}
              <button title="remove repair task" onClick={() => handleDeleteRepairTask(repairId, repairTask._id)}>
                🗑️
              </button>
            </>
          }
          {/* {showEditRepairTask && <EditRepairTaskCard  
            repairId={repairId} 
            user={user} 
            repairTask={repairTask} 
          />} */}
        </span>
      </header>
      <li>{repairTask.task} - {repairTask.done ? 'done' : 'not done' }</li>
      {/* want to add checkbox ^^^ */}
    </article>
  )
}

export default RepairTaskCard