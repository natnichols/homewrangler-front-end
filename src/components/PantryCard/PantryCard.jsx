//npm modules
import { Link } from "react-router-dom"

//css
import styles from "./PantryCard.module.css"

const PantryCard = ({pantryItem, handleAddToShoppingList, handleDelFromShoppingList, profile}) => {
  // console.log('test ', profile.shoppingList)
  // console.log('test ', user)

  return (  
    <main className={styles.container}>
      <div>
        <p>
          🛒&nbsp;
          { profile.shoppingList.includes(pantryItem._id)
            ?
            <>
              <Link href="#" title="remove from shopping list" onClick={() => handleDelFromShoppingList(pantryItem._id)}>➖</Link>
              &nbsp;&nbsp;
            </>
            : 
            <>
              <Link href="#" title="add to shopping list" onClick={() => handleAddToShoppingList(pantryItem._id)}>➕</Link>
              &nbsp;&nbsp;
            </>
          }
          <strong>{pantryItem.name}</strong>
          &nbsp;&nbsp;
          { pantryItem.price ? ('$' + pantryItem.price + '\u00A0\u00A0') : ''}
          {/* { pantryItem.category ? (pantryItem.category + '\u00A0\u00A0') : ''} */}
          {/* { pantryItem.amount ? ('qty:' + pantryItem.amount + '\u00A0\u00A0') : ''} */}
          { pantryItem.expires ? ('⚠️Perishable!⚠️') : ''}
          &nbsp;
          <Link to={`/pantryItems/${pantryItem._id}`}>
          👁️
          </Link>
        </p>
        {/* <button onClick={() => handleAddToShoppingList(pantryItem._id)}>🛒➕</button>
        <button onClick={() => handleDelFromShoppingList(pantryItem._id)}>🛒➖</button> */}

      </div>
    </main>
  );
}

export default PantryCard;