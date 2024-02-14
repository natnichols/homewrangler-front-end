





// import { useState } from 'react'
// import styles from './AddAmountForm.module.css'

// const AddAmountForm = ({ handleAddAmount }) => {
//   const [amount, setAmount] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (amount) {
//       handleAddAmount(parseInt(amount))
//       setAmount('')
//     }
//   }

//   return (
//     <div className={styles.container}>
//       <h2>Add Amount</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="number"
//           placeholder="Enter amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   )
// }

// export default AddAmountForm
