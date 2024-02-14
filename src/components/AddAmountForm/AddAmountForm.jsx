//npm modules
import { useState } from "react"

//css
import styles from './AddAmountForm.module.css'

const AddAmountForm = (props) => {
  const [formData, setFormData] =useState({
    amount: ''
  })

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddBudget(formData)
  }

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  return(
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount-input"></label>
        <input 
          required
          type="number"
          name="amount"
          id="amount-input"
          placeholder="10"
          value={formData.amount}
          onChange={handleChange}
        />
        <button type="submit">Add Budget</button>
      </form>
    </main>
  )
}

export default AddAmountForm