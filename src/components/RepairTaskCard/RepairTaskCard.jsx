// npm modules
import { Link } from 'react-router-dom'

// css
// import styles from './RepairTaskCard.module.css'

const RepairTaskCard = ({ repairTask, repairId, user }) => {
  return ( 
    <article>
      <header>
        <span>
          {repairTask.owner._id === user.profile &&
            <>
              <Link to={`/repairs/${repairId}/repairTasks/${repairTask._id}`} state={repairTask}>
                ✏️
              </Link>
              <button>🗑️</button>
            </>
          }
        </span>
      </header>
      <li>{repairTask.task} - {repairTask.done ? 'done' : 'not done' }</li>
      {/* want to add checkbox ^^^ */}
    </article>
  )
}

export default RepairTaskCard