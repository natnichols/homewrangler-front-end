//npm modules
import { Link } from "react-router-dom"

//components


//css
import styles from "./PantryCard.module.css"

const PantryCard = ({pantryItem}) => {
  return (  
    
      <article className={styles.container}>
        <header>
          <span>
            <Link to={`/pantryItems/${pantryItem._id}`}>
              <h1>{pantryItem.name}</h1>
            </Link>
          </span>
          <h4>Amount: {pantryItem.amount}</h4>
          <h4>Category: {pantryItem.category}</h4>
          {/* <h4>price: {pantryItem.price}</h4>
          <h4>expires: {pantryItem.expires}</h4> */}
        </header>

      </article>
    
  );
}

export default PantryCard;