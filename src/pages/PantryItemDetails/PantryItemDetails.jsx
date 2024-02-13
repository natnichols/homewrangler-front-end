//npm modules
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";

//services
import * as pantryService from '../../services/pantryService'

// css
import styles from './PantryItemDetails'

const PantryItemDetails = (props) => {
  const { pantryItemId } = useParams()
  const [pantryItem, setPantryItem] = useState({})

  useEffect(() => {
    const fetchPantryItem = async () => {
      const data = await pantryService.show(pantryItemId)
      setPantryItem(data)
    }
    fetchPantryItem()
  }, [pantryItemId])


  return (  
    <main className={styles.container}>
      <ul>Dtail
        <li>Name: {pantryItem.name} </li>
        <li>Amount: {pantryItem.amount}</li>
        <li>Category: {pantryItem.category}</li>
        <li>Price: {pantryItem.price}</li>
        {pantryItem.owner && pantryItem.owner._id === props.user.profile && (
          <>
            <Link to={`/pantryItems/${pantryItem._id}/edit`} state={pantryItem}>
              <button>Edit</button>
            </Link>
          </>
        )}
      </ul>
      
      
    </main>
  );
}

export default PantryItemDetails;