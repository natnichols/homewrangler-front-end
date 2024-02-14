// components
import RepairTaskCard from '../RepairTaskCard/RepairTaskCard'

// css
// import styles from './RepairTasks.module.css'

const RepairTasks = (props) => {
  if (!props.repairTasks.length) return <h4>No Repair Tasks</h4>

  return ( 
    <>
      {props.repairTasks.map(repairTask => (
        <RepairTaskCard 
          key={repairTask._id}
          repairTask={repairTask}
          user={props.user}
          repairId={props.repairId}
        />
      ))}
    </>
  )
}

export default RepairTasks