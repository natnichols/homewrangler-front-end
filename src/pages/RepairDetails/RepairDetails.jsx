// npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
          <h1>{repair.name}</h1>
          <span>
            <h2>{repair.priority}</h2>
          </span>
        </header>
        <p>{repair.description}</p>
      </article>
      <section>
        <h1>Repair Tasks</h1>
      </section>
    </main>
  )
}

export default RepairDetails;