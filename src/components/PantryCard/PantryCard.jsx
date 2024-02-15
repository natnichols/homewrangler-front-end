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
          { pantryItem.price ? ('$' + pantryItem.price + '\u00A0\u00A0') : ''}
          {/* { pantryItem.category ? (pantryItem.category + '\u00A0\u00A0') : ''} */}
          { pantryItem.amount ? ('qty:' + pantryItem.amount + '\u00A0\u00A0') : ''}
          { pantryItem.expires ? ('⚠️Perishable!⚠️') : ''}

        </p>
        {/* <button onClick={() => handleAddToShoppingList(pantryItem._id)}>🛒➕</button>
        <button onClick={() => handleDelFromShoppingList(pantryItem._id)}>🛒➖</button> */}

      </div>
    </main>
  );
}

export default PantryCard;