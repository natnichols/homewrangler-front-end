// npm modules
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// components
import NewRepairTask from '../../components/NewRepairTask/NewRepairTask'

// services
import * as repairService from '../../services/repairService'

// css
import styles from './RepairDetails.module.css'

const RepairDetails = (props) => {
  const { repairId } = useParams()
  const [repair, setRepair] = useState(null)

  useEffect(() => {
    const fetchRepair = async () => {
      const data = await repairService.show(repairId)
      setRepair(data)
    }
    fetchRepair()
  }, [repairId])

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
              <Link to={`/repairs/${repairId}/edit`} state={repair}><button>✏️</button></Link>
              <button onClick={() => props.handleDeleteRepair(repairId)}>🗑️</button>
            </>
          }
          </span>
        </header>
        <h3>Description: {repair.description}</h3>
      </article>
      <section>
        <h1>Repair Tasks</h1>
      </section>
    </main>
  )
}

export default RepairDetails;