// npm modules
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

// css
import styles from './RepairEdit.module.css'

const RepairEdit = () => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)

  return (
    <main className={styles.container}>
      <h2>RepairEdit component</h2>

      <h4>end of RepairEdit component</h4>
    </main>
  )
}

export default RepairEdit