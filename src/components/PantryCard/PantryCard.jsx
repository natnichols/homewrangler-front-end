//npm modules
import { Link } from "react-router-dom"

//css
import styles from "./PantryCard.module.css"

const PantryCard = ({pantryItem}) => {
  return (  
    <main className={styles.container}>
      <div>
        <span>
          <Link to={`/pantryItems/${pantryItem._id}`}>
            <h1>{pantryItem.name}</h1>
          </Link>
        </span>
        <h4>Amount: {pantryItem.amount}</h4>
        <h4>Category: {pantryItem.category}</h4>
        <h4>price: {pantryItem.price}</h4>
        {/* <h4>owner: {pantryItem.owner}</h4> */}

        { pantryItem.expires ? (<h4>This item will expire!</h4>) : "" }
      </div>
    </main>
  );
}

export default PantryCard;