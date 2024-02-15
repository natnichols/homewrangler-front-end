import { useState, useEffect } from 'react'

import styles from './Budgets.module.css'



const Budgets = (props) => {

  const filteredBudgets = props.budgets.filter(budget => budget.owner._id === props.profile._id)

  return (  
    <main className={styles.container}>
      <h1>total Budget Avaliable</h1>

      <h2>Add budget (Form)</h2>

      <h1>Budgets</h1>
      {filteredBudgets.map(budget =>
        <p key={budget._id}>budget added: ${budget.amount}
          <button onClick={() => props.handleDeleteBudget(budget._id)}>Delete</button>
        </p>
      )}
    </main>
  );
}

export default Budgets