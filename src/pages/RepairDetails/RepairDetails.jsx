// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// components
import NewRepairTask from '../../components/NewRepairTask/NewRepairTask'
import RepairTasks from '../../components/RepairTasks/RepairTasks'

// services
import * as repairService from '../../services/repairService'

// css
import styles from './RepairDetails.module.css'

const RepairDetails = (props) => {
  const { repairId } = useParams()
  const [repair, setRepair] = useState(null)
  const [showAddRepairTask, setShowAddRepairTask] = useState(false)

  useEffect(() => {
    const fetchRepair = async () => {
      const data = await repairService.show(repairId)
      setRepair(data)
    }
    fetchRepair()
  }, [repairId])

  const toggleAddRepairTask = () => {
    setShowAddRepairTask(!showAddRepairTask)
  }

  const handleAddRepairTask = async (repairTaskFormData) => {
    const newRepairTask = await repairService.createRepairTask(repairId, repairTaskFormData)
    setRepair({ ...repair, repairTasks: [...repair.repairTasks, newRepairTask]})
  }

  const handleDeleteRepairTask = async (repairId, repairTaskId) => {
    await repairService.deleteRepairTask(repairId, repairTaskId)
    setRepair({...repair, repairTasks: repair.repairTasks.filter(repairTask => repairTask._id !== repairTaskId) })
  }

  if (!repair) {
    return <main className={styles.container}><h2>Loading repair...</h2></main>
  }

  return (
    <main className={styles.container}>

      <h2>{repair.name}</h2>
      <span>
      <p>Priority: {repair.priority}</p>
      <p>{ repair.cost ? ('Approximate Cost: $' + repair.cost) : ''}</p>
      <p>{ repair.description ? ('Description: ' + repair.description) : ''}</p>

      
      {repair.owner._id === props.user.profile &&
        <>
          <Link to={`/repairs/${repairId}/edit`} state={repair}>✏️</Link>
          <Link to="#" title="delete repair" onClick={() => props.handleDeleteRepair(repairId)}>🗑️</Link>
          {/* <button title="delete repair" onClick={() => props.handleDeleteRepair(repairId)}>🗑️</button> */}
        </>
      }
      </span>
      <br></br>
      <br></br>
      <h4>Repair Tasks</h4>


      <div style={{ width: 'fit-content' }}>
        <button onClick={toggleAddRepairTask}>
          {showAddRepairTask ? "Collapse This Form" : "Add" }
        </button>
      </div>

      {showAddRepairTask && <NewRepairTask handleAddRepairTask={handleAddRepairTask} />}

      <RepairTasks 
        repairId={repairId} 
        user={props.user} 
        repairTasks={repair.repairTasks} 
        handleDeleteRepairTask={handleDeleteRepairTask}
      />
    </main>
  )
}

export default RepairDetails;