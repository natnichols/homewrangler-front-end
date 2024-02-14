// npm imports
import { useState } from 'react'

// css
import styles from './NewRepairTask.module.css'

// components

const NewRepairTask = (props) => {
  const [formData, setFormData] = useState({ task: '' })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    // placeholder line
    setFormData({ task: '' })
  }

  return ( 

  )
}

export default NewRepairTask

