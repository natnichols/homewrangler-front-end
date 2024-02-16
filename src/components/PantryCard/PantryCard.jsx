//npm modules
import { Link } from "react-router-dom"

//css
import styles from "./PantryCard.module.css"

const PantryCard = ({pantryItem, handleAddToShoppingList, handleDelFromShoppingList, profile}) => {
  return (  
    <main className={styles.container}>
      <div>
        <p>
          🛒&nbsp;
          { profile.shoppingList.includes(pantryItem._id)
            ?
            <>
              <Link
                href="#"
                title="remove from shopping list" onClick={() => handleDelFromShoppingList(pantryItem._id)}
              >
                <span style={{ fontSize: '1.2em' }}>➖</span>
              </Link>
              &nbsp;&nbsp;
            </>
            : 
            <>
              <Link
                href="#"
                title="add to shopping list" onClick={() => handleAddToShoppingList(pantryItem._id)}
              >
                <span style={{ fontSize: '1.2em' }}>➕</span>
              </Link>
              &nbsp;&nbsp;
            </>
          }
          <strong>{pantryItem.name}</strong>
          &nbsp;&nbsp;
          { pantryItem.price ? ('$' + pantryItem.price + '\u00A0\u00A0') : ''}
          {/* May add back in after more ice-box developments */}
          {/* { pantryItem.category ? (pantryItem.category + '\u00A0\u00A0') : ''} */}
          {/* { pantryItem.amount ? ('qty:' + pantryItem.amount + '\u00A0\u00A0') : ''} */}
          { pantryItem.expires ? ('⚠️Perishable!⚠️') : ''}
          &nbsp;
          <Link to={`/pantryItems/${pantryItem._id}`}>
          👁️
          </Link>
        </p>
      </div>
    </main>
  );
}

export default PantryCard;