//npm modules
import { Link } from "react-router-dom"

//css
import styles from './ShoppingListCard.module.css'

const ShoppingListCard = ({pantryItem,  handleDelFromShoppingList}) => {
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
        <h3>buttinz for adding/removing from ShoppingList - testing</h3>
        {/*  might be 'pantryItemId' instead below */}
        {/* <button onClick={() => handleAddToShoppingList(pantryItem._id)}>Add to Shopping List</button> */}
        <button onClick={() => handleDelFromShoppingList(pantryItem._id)}>Remove from Shopping List</button>

      </div>
    </main>
  );
}

export default ShoppingListCard;