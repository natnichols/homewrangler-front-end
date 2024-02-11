//npm modules
import { Link } from "react-router-dom";

//components

//css
import styles from "./PantryCard.module.css"

const PantryCard = ({pantryItem}) => {
  return (  
    <Link to={`/pantryItems/${pantryItem._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{pantryItem.name}</h1>
          </span>
          <h4>Amount: {pantryItem.amount}</h4>
          <h4>Category: {pantryItem.category}</h4>
        </header>

      </article>
    </Link>
  );
}

export default PantryCard;