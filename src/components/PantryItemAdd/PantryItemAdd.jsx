// npm
import { useState } from 'react'

// css
import styles from './PantryItemAdd.module.css'

const PantryItemAdd = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: 'Grocery',
    price: '',
    expires: false,
  })

  const handleSubmit = evt => {
    // prevent page refashing
    evt.preventDefault()
    // call handleAddPantryItem on props!
    props.handlePantryItemAdd(formData)
  }

  const handleChange = evt  => {
    //to change value of checkbox from "on/off" to "true/false"
    const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setFormData({...formData, [evt.target.name]: value})
  }

  return (  
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} >
        {/* May use again after more content added */}
        {/* <label htmlFor="name-input">Name:</label> */}
        <input 
          required
          type="text" 
          name="name"
          id="name-input"
          placeholder="Item name"
          value={formData.name}
          onChange={handleChange}
        />
        {/* May use again after more content added */}
        {/* <label htmlFor="category-input">Category:</label> */}
        <select 
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
          <option value="Household">Household</option>
          <option value="Repairs">Repairs</option>
        </select>
        {/* May use again after more content added */}
        {/* <label htmlFor="amount-input">Amount:</label> */}
        <input 
          type="text" 
          name="amount"
          id="amount-input"
          placeholder="Quantity"
          value={formData.amount}
          onChange={handleChange}
        />
        {/* May use again after more content added */}
        {/* <label htmlFor="price-input">Price:</label> */}
        <input 
          type="text" 
          name="price"
          id="price-input"
          placeholder="approx cost"
          value={formData.price}
          onChange={handleChange}
        />
        {/* May use again after more content added */}
        {/* <label htmlFor="expires-input">Expires?</label> */}
        Expires?
        <input
          type="checkbox"
          name="expires"
          id="expires-input"
          checked={formData.expires}
          onChange={handleChange}
        />
        {/* Ice-box feature here: */}
        {/* Also add to Shopping List (checkbox) */}
        <br></br>
        <div style={{ width: 'fit-content' }}>
          <button className={styles.button} type="submit">Add to Pantry</button>
        </div>
      </form>
    </main>
  )
}

export default PantryItemAdd