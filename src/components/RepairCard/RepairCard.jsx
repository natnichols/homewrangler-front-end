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
          </span>
        </header>
        <p>{repair.description}</p>
      </article>
    </Link>
    // <main className={styles.container}>
    //   <h3>RepairCard component</h3>
    //     <p>(link to Repair Details in here)</p>
    //   <h4>end of RepairCard component</h4>
    // </main>
  )
}

export default RepairCard;