// npm modules
import { Link } from 'react-router-dom'

// components

// css
import styles from './RepairCard.module.css'

const RepairCard = ({ repair }) => {
  return (
    <Link to={`/repairs/${repair._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h2>{repair.name}</h2>
            <h2>{repair.priority}</h2>
          </span>
        </header>
        <p>{repair.repairtasks}</p>
      </article>
    </Link>
  )
}

export default RepairCard;