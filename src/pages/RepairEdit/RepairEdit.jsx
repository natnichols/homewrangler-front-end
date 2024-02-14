// npm modules
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

// css
import styles from './RepairEdit.module.css'

const RepairEdit = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleUpdateRepair(formData)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Edit Repair</h2>
        <label htmlFor="name-input">Name</label>
        <input 
          required
          type="text" 
          name="name"
          id="name-input"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <label htmlFor="priority-input">Priority</label>
        <input
          required
          type="text"
          name="priority"
          id="priority-input"
          value={formData.priority}
          placeholder="Priority"
          onChange={handleChange}
        />
        <label htmlFor="description-input">Description</label>
        <input 
          required
          type="text" 
          name="description"
          id="description-input"
          value={formData.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <button type="submit">Edit Repair 🔧✏️</button>
      </form>
    </main>
  )
}

export default RepairEdit