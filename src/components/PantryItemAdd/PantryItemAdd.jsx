// npm
import { useState } from "react"

//css
import styles from "./PantryItemAdd.module.css"

const PantryItemAdd = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: 'Grocery',
    price: '',
    expires: false,
  })

  const handleSubmit = evt => {
    //prevent page refashing
    evt.preventDefault()
    //call handleAddPantryItem
    props.handlePantryItemAdd(formData)
  }

  const handleChange = evt  => {
    //to change value of checkbox from "on/off" to "true/false"
    const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value
    setFormData({...formData, [evt.target.name]: value})
  }

  return (  
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} >
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
        {/* <label htmlFor="category-input">Category:</label> */}
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
          <option value="Household">Household</option>
          <option value="Repairs">Repairs</option>
        </select>
        {/* <label htmlFor="amount-input">Amount:</label> */}
        <input 
          // required
          type="text" 
          name="amount"
          id="amount-input"
          placeholder="Quantity"
          value={formData.amount}
          onChange={handleChange}
        />
        {/* <label htmlFor="price-input">Price:</label> */}
        <input 
          // required
          type="text" 
          name="price"
          id="price-input"
          placeholder="approx cost"
          value={formData.price}
          onChange={handleChange}
        />
        {/* <label htmlFor="expires-input">Expires?</label> */}
        Expires?
        <input
          // required
          type="checkbox"
          name="expires"
          id="expires-input"
          checked={formData.expires}
          onChange={handleChange}
        />
        {/* Stretch goal: */}
        {/* Also add to Shopping List? (checkbox) */}
        <br/>
        <div style={{ width: 'fit-content' }}>
          <button className={styles.button} type="submit">Add to Pantry</button>
        </div>
      </form>
    </main>
  )
}

export default PantryItemAdd