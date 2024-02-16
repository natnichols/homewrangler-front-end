// components
import RepairTaskCard from '../RepairTaskCard/RepairTaskCard'

// css
// import styles from './RepairTasks.module.css'

const RepairTasks = (props) => {
  if (!props.repairTasks.length) return <h4>No Tasks!</h4>

  return ( 
    <>
      {props.repairTasks.map(repairTask => (
        <RepairTaskCard 
          key={repairTask._id}
          repairId={props.repairId}
          user={props.user}
          repairTask={repairTask}
          handleDeleteRepairTask={props.handleDeleteRepairTask}
          />
          ))}
    </>
  )
}

export default RepairTasks