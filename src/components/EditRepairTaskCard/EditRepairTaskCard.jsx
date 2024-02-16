// npm
import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

// services
import * as repairService from '../../services/repairService'

// css
import styles from './EditRepairTaskCard.module.css'

const EditRepairTaskCard = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { repairId, repairTaskId } = useParams()
  const [formData, setFormData] = useState(state)

  const handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value
    setFormData({...formData, [target.name]: value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    await repairService.updateRepairTask(repairId, repairTaskId, formData)
    navigate(`/repairs/${repairId}`)
  }


  return ( 
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Edit Task</h2>
        <br></br>

        <label htmlFor="task-input">Task:</label>
        
        <textarea 
          required
          name="task" 
          id="task-input"
          value={formData.task}
          placeholder="Task"
          onChange={handleChange}
        />
        <label htmlFor="done-input">Done?</label>
        <br></br>
        <input 
          type="checkbox" 
          name="done" 
          id="done-input"
          checked={formData.done}
          onChange={handleChange} 
        />
        <br></br>
        <button type="submit">Submit Changes🪛✏️</button>
      </form>
    </main>
  )
}

export default EditRepairTaskCard