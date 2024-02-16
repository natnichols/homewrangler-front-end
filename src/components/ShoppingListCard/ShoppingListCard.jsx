//npm modules
import { Link } from "react-router-dom"

//css
import styles from './ShoppingListCard.module.css'

const ShoppingListCard = ({pantryItem,  handleDelFromShoppingList}) => {
  return (  
    <main className={styles.container}>
      <div>
        <p>
          🛒
          <Link
            href="#" title="remove from shopping list"
            onClick={() => handleDelFromShoppingList(pantryItem._id)}
          >
            <span style={{ fontSize: '1.2em' }}>➖</span>
          </Link>
          &nbsp;&nbsp;
          <strong>{pantryItem.name}</strong>
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          { pantryItem.category ? (pantryItem.category + '\u00A0\u00A0') : ''} 
          { pantryItem.price ? ('$' + pantryItem.price + '\u00A0\u00A0') : ''} 
          { pantryItem.amount ? ('qty:' + pantryItem.amount + '\u00A0\u00A0') : ''} 
          { pantryItem.expires ? (<nobr>⚠️Perishable!⚠️</nobr>) : ''}
          &nbsp;&nbsp;
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

export default ShoppingListCard;