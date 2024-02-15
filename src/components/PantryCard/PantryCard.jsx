//npm modules
import { Link } from "react-router-dom"

//css
import styles from "./PantryCard.module.css"

const PantryCard = ({pantryItem, handleAddToShoppingList, handleDelFromShoppingList}) => {
  return (  
    <main className={styles.container}>
      <div>
        <p>
          <Link to={`/pantryItems/${pantryItem._id}`}>
            {pantryItem.name}
          </Link>
          &nbsp;&nbsp;
          <Link href="#" onClick={() => handleAddToShoppingList(pantryItem._id)}>🛒➕</Link>
          &nbsp;
          <Link href="#" onClick={() => handleDelFromShoppingList(pantryItem._id)}>➖</Link>        
          &nbsp;&nbsp;
          ${pantryItem.price} - {pantryItem.category} - qty: {pantryItem.amount}
          &nbsp;
          { pantryItem.expires ? (' *Perishable!*') : "" }
          <br/>
        </p>
        {/* <button onClick={() => handleAddToShoppingList(pantryItem._id)}>🛒➕</button>
        <button onClick={() => handleDelFromShoppingList(pantryItem._id)}>🛒➖</button> */}

      </div>
    </main>
  );
}

export default PantryCard;