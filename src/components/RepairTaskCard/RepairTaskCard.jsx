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
    <main>
      <span>
        {/* &bull; {repairTask.task} - {repairTask.done ? 'done' : 'not done' } */}

        {repairTask.done ? (
          <del>{repairTask.task}</del>
        ) : (
          <>{repairTask.task}</>
        )}

        {/* want to add checkbox ^^^ */}
        {repairTask.owner._id === user.profile &&
          <>
            <Link title='edit task' to={`/repairs/${repairId}/repairTasks/${repairTask._id}`} state={repairTask}>
              ✏️
            </Link>
            <Link title="remove task" to="#" onClick={() => handleDeleteRepairTask(repairId, repairTask._id)}>
              🗑️
            </Link>
            {/* <button onClick={toggleEditRepairTask}>
              {showEditRepairTask ? "" : "📝"}
            </button> */}
          </>
        }
        {/* {showEditRepairTask && <EditRepairTaskCard  
          repairId={repairId} 
          user={user} 
          repairTask={repairTask} 
        />} */}
      </span>
      <br></br>
    </main>
  )
}

export default RepairTaskCard