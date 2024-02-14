// npm
import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

// services
import * as repairService from '../services/repairService'

// css
import styles from './EditRepairTaskCard.module.css'

const EditRepairTaskCard = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { repairId, repairTaskId } = useParams()
  const [formData, setFormData] = useState(state)

  const handleChange = ({ target }) => {
    setFormData({...formData, [target.name]: target.value })
  }

  // handleSubmit


  return ( 
    <main className={styles.container}>
      <form /*onSubmit={handleSubmit}*/>
        <h1>Edit Repair Task</h1>
        <label htmlFor="task-input">Task</label>
        <textarea 
          required
          name="task" 
          id="task-input"
          value={formData.task}
          placeholder="Task"
          onChange={handleChange}
        />
        <button type="submit">Submit Changes🪛✏️</button>
      </form>
    </main>
  )
}

export default EditRepairTaskCard