// css
import styles from './RepairTaskCard.module.css'

const RepairTaskCard = ({ repairTask }) => {
  return ( 
    <article>
      <header>
        {/* put 'done' here? */}
      </header>
      <li>{repairTask.task}</li>
    </article>
  )
}

export default RepairTaskCard