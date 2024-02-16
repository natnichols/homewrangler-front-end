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
        <label htmlFor="priority-input">Priority:</label>
        <select 
          // required 
          name="priority"
          id="priority-input"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="!" title="Low Priority" >!</option>
          <option value="!!" title="Mid Priority" >!!</option>
          <option value="!!!" title="High Priority" >!!!</option>
          
        </select>
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
        <label htmlFor="cost-input">Approximate Cost:</label>
        <input 
          required
          type="text" 
          name="cost"
          id="cost-input"
          value={formData.cost}
          placeholder="Approximate Cost"
          onChange={handleChange}
        />
        <div style={{ width: 'fit-content' }}>
          <button type="submit">Edit Repair 🔧✏️</button>
        </div>
      </form>
    </main>
  )
}

export default RepairEdit