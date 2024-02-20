import styles from './Budgets.module.css'

import BudgetAvail from '../../components/BudgetAvail/BudgetAvail'
import AddAmountForm from '../../components/AddAmountForm/AddAmountForm'

const Budgets = (props) => {

  const filteredBudgets = props.budgets.filter(budget => budget.owner._id === props.profile._id)

  return (  
    <main className={styles.container}>
      <h1>Budget</h1>
      <br></br>
      <br></br>

      <BudgetAvail budgets={props.budgets} profile={props.profile}/>
      <AddAmountForm handleAddBudget={props.handleAddBudget} />

      <br></br>
      <h3>Ledger</h3>
      {filteredBudgets.map(budget =>
        <p key={budget._id}>
          {budget.amount > 0 ? 
            'added'
            : 'removed'
          }
          : ${Math.abs(budget.amount)}
          <br></br>
          on {budget.createdAt}

          <div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
            <button onClick={() => props.handleDeleteBudget(budget._id)}>
              Undo
            </button>
          </div>
        </p>
      )}
    </main>
  )
}

export default Budgets