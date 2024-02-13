import { useState } from "react";

//css
import styles from "./PantryItemAdd.module.css"

const PantryItemAdd = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: 'Fridge',
    price: '',
  })

  const handleSubmit = evt => {
    //prevent page refashing
    evt.preventDefault()
    //call handleAddPantryItem
    props.handlePantryItemAdd(formData)

  }

  const handleChange = evt  => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  return (  
    <main className={styles.container}>
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
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default PantryItemAdd