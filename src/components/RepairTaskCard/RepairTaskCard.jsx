// css
// import styles from './RepairTaskCard.module.css'

const RepairTaskCard = ({ repairTask }) => {
  return ( 
    <article>
      <header>
        {/* keep header? */}
      </header>
      <li>{repairTask.task} - {repairTask.done ? 'done' : 'not done' }</li>
      {/* want to add checkbox ^^^ */}
    </article>
  )
}

export default RepairTaskCard