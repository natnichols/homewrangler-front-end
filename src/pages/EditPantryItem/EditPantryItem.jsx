import { useState } from "react"
import { useLocation } from "react-router-dom"
// for use with ice-box button at bottom
// import { Link } from "react-router-dom"


import styles from './EditPantryItem.module.css'

const EditPantryItem = (props) => {
  const { state } = useLocation()
  // console.log(state)
  const [formData, setFormData] = useState(state)

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleUpdatePantryItem(formData)
  }

  const handleChange = evt => {
    const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value
    setFormData({...formData, [evt.target.name]: value})
  }
  

  return (  
    <main className={styles.container}>
      <h2 style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
        Edit Details
      </h2>
      <form onSubmit={handleSubmit} >
        <label htmlFor="name-input">Name:</label>
        <input 
          required
          type="text" 
          name="name"
          id="name-input"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="amount-input">Amount:</label>
        <input 
          // required
          type="text" 
          name="amount"
          id="amount-input"
          placeholder="amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category:</label>
        <select 
          // required 
          name="category"
          id="category-input"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Produce">Produce</option>
          <option value="Grocery">Grocery</option>
          <option value="Fridge">Fridge</option>
          <option value="Freezer">Freezer</option>
          <option value="Health & Beauty">Health & Beauty</option>
          <option value="Household">House hold</option>
          <option value="Repairs">Repairs</option>
        </select>
        <label htmlFor="price-input">Price:</label>
        <input 
          // required
          type="text" 
          name="price"
          id="price-input"
          placeholder="price"
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor="price-input">Expires?</label>
        <input
          // required
          type="checkbox"
          name="expires"
          id="expires-input"
          checked={formData.expires}
          onChange={handleChange}
        />

        <div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
          <button type="submit">Update</button>
        </div>
      </form>
      
        {/* back-button (ice-box!) */}
        {/* <div style={{ width: 'fit-content' }}> */}
          {/* <Link to={`/pantryItems/${props.pantryItem._id}`}> */}
            {/* <button className={styles.button}>
              Cancel
            </button> */}
          {/* </Link> */}
        {/* </div> */}
    </main>
  )
}

export default EditPantryItem