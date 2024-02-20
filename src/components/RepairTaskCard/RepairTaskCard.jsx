// npm modules
import { Link } from 'react-router-dom'

const RepairTaskCard = ({ repairTask, repairId, user, handleDeleteRepairTask }) => {

  return ( 
    <main>
      <span>
        {repairTask.done 
          ? <del>{repairTask.task}</del>
          : <>{repairTask.task}</>
        }

        {/* want to add checkbox ^^^ */}
        {repairTask.owner._id === user.profile &&
          <>
            <Link title='edit task' to={`/repairs/${repairId}/repairTasks/${repairTask._id}`} state={repairTask}>
              ✏️
            </Link>
            <Link title="remove task" to="#" onClick={() => handleDeleteRepairTask(repairId, repairTask._id)}>
              🗑️
            </Link>
          </>
        }
      </span>
      <br></br>
    </main>
  )
}

export default RepairTaskCard