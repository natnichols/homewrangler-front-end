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