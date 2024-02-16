//npm modules
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";

//services
import * as pantryService from '../../services/pantryService'

// css
import styles from './PantryItemDetails.module.css'

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
      <ul>{pantryItem.name}
        {/* <li>Name: {pantryItem.name} </li> */}
        <li>Price: {pantryItem.price}</li>
        <li>Category: {pantryItem.category}</li>
        <li>Qty: {pantryItem.amount}</li>
        
        {pantryItem.owner && pantryItem.owner._id === props.user.profile && (
          <>
            <div style={{ width: 'fit-content' }}>
              <Link to={`/pantryItems/${pantryItem._id}/edit`} state={pantryItem}>
                <button>Edit</button>
              </Link>
            </div>
            <div style={{ width: 'fit-content' }}>
              <button onClick={() => props.handleDeletePantryItem(pantryItemId)}>Delete</button>
            </div>
          </>
        )}
      </ul>
      
      
    </main>
  );
}

export default PantryItemDetails;