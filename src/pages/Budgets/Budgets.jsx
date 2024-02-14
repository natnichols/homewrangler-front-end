import { useState, useEffect } from 'react'

import styles from './Budgets.module.css'

const Budgets = (props) => {
  return (  
    <main className={styles.container}>
      <h1>total Budget Avaliable</h1>

      <h2>Add budget (Form)</h2>

      <h1>Budgets</h1>
      {props.budgets.map(budget =>
        <p key={budget._id}>budget added: ${budget.amount}</p>
      )}
    </main>
  );
}

export default Budgets;





// import { useState, useEffect } from 'react'
// import styles from './Budgets.module.css'
// import AddAmountForm from '../../components/AddAmountForm/AddAmountForm'
// import BudgetAvail from '../../components/BudgetAvail/BudgetAvail'
// import * as budgetService from '../../services/budgetService'

// const Budgets = () => {
//   const [totalAmount, setTotalAmount] = useState(0)
//   useEffect(() => {
//     const fetchTotalAmount = async () => {
//       try {
//         const totalAmount = await budgetService.getTotalAmount()
//         setTotalAmount(totalAmount)
//       } catch (error) {
//         console.log(error)
//       }
//     }

//     fetchTotalAmount()
//   }, [])

//   const handleAddAmount = (amount) => {
//     setTotalAmount(totalAmount + amount)
//   }

//   return (
//     <main className={styles.container}>
//       <h1>Budget component</h1>
//       <BudgetAvail totalAmount={totalAmount} />
//       <AddAmountForm handleAddAmount={handleAddAmount} />
//       <h4>end of Budget component</h4>
//     </main>
//   )
// }

// export default Budgets
