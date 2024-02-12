//npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

//services
import * as pantryService from '../../services/pantryService'

// css
import styles from './PantryItemDetails'

const PantryItemDetails = (props) => {
  const { pantryItemId } = useParams()
  const [pantryItem, setPantryItem] = useState(null)

  useEffect(() => {
    const fetchPantryItem = async () => {
      const data = await pantryService.show(pantryItemId)
      setPantryItem(data)
    }
    fetchPantryItem()
  }, [pantryItemId])


  return (  
    <main className={styles.container}>
      <ul>Detail
        {/* {pantryItem.name} */}
        {/* <li>Name: {pantryItem.amount}</li>
        <li>Category: {pantryItem.category}</li>
        <li>Price: {pantryItem.price}</li> */}
      </ul>
      
    </main>
  );
}

export default PantryItemDetails;