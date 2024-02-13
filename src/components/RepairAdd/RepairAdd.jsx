// npm modules
import { useState } from 'react'

// css
import styles from './RepairAdd.module.css'

const RepairAdd = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    priority: '',
    description: '',
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
        
      </form>
    </main>
  )
}

export default RepairAdd;