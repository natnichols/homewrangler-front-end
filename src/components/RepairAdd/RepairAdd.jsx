// npm modules
import { useState } from 'react'

// css
import styles from './RepairAdd.module.css'

const RepairAdd = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    priority: '!',
    description: '',
    cost: '',
  })

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddRepair(formData)
  }

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>

        <div className="input-container">
          {/* <label htmlFor="name-input">Name</label> */}
          <input 
            required
            type="text" 
            name="name"
            id="name-input"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
          />
        </div>

        <p>Priority:</p>
        <div className="input-container">
          {/* <label htmlFor="priority-input1" style={{ display: 'inline-block', marginRight: '10px' }}>Priority:</label> */}
          <select 
            required 
            name="priority"
            id="priority-input1"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="!" title="Low Priority" >!</option>
            <option value="!!" title="Mid Priority" >!!</option>
            <option value="!!!" title="High Priority" >!!!</option>
          </select>
        </div>

        <div className="input-container">
          {/* <label htmlFor="description-input">Description</label> */}
          <input 
            type="text" 
            name="description"
            id="description-input"
            value={formData.description}
            placeholder="Description"
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <input 
            type="number" 
            name="cost"
            id="cost-input"
            value={formData.cost}
            placeholder="Approximate Cost"
            onChange={handleChange}
          />
        </div>

        <div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
          <button type="submit">Add Repair 🔧✨</button>
        </div>

      </form>
    </main>
  )
}

export default RepairAdd