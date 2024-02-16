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
      <article>
        <header>
          <h1>{repair.name} - {repair.priority}</h1>
          <span>
          {repair.owner._id === props.user.profile &&
            <>
              <Link to={`/repairs/${repairId}/edit`} state={repair}><button title="edit repair item" >✏️</button></Link>
              <button title="remove repair item" onClick={() => props.handleDeleteRepair(repairId)}>🗑️</button>
            </>
          }
          </span>
        </header>
        <h3>Description: {repair.description}</h3>
        <h3>Approximate Cost: ${repair.cost}</h3>
      </article>
      <section>
        <h1>Repair Tasks</h1>
        <div style={{ width: 'fit-content' }}>
          <button onClick={toggleAddRepairTask}>
            {showAddRepairTask ? "Hide Add Repair Task" : "Show Add Repair Task" }
          </button>
        </div>
        {showAddRepairTask && <NewRepairTask 
          handleAddRepairTask={handleAddRepairTask} 
        />}
        <RepairTasks 
          repairId={repairId} 
          user={props.user} 
          repairTasks={repair.repairTasks} 
          handleDeleteRepairTask={handleDeleteRepairTask}
        />
      </section>
    </main>
  )
}

export default RepairDetails;