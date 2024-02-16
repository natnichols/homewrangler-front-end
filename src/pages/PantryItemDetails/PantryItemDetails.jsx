// npm modules
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";

// services
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
    <div className={styles.container}>
      <h4>{pantryItem.name} details</h4>
      <br></br>
      <p>Category: { pantryItem.category ? (pantryItem.category + '\u00A0\u00A0') : ''}</p>
      <p>{ pantryItem.price ? ('$' + pantryItem.price + '\u00A0\u00A0') : ''}</p>
      <p>{ pantryItem.amount ? ('qty:' + pantryItem.amount + '\u00A0\u00A0') : ''}</p>
      <p>{ pantryItem.expires ? ('⚠️Perishable!⚠️') : ''}</p>
      <br></br>
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

    </div>
  );
}

export default PantryItemDetails;