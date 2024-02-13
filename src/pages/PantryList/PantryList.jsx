// npm
import { useState } from 'react';

//css
import styles from './PantryList.module.css'

//components
import PantryCard from '../../components/PantryCard/PantryCard';
import PantryItemAdd from '../../components/PantryItemAdd/PantryItemAdd';


const PantryList = (props) => {
  const [showItemAdd, setShowItemAdd] = useState(false);

  const toggleAddForm = () => {
    setShowItemAdd(!showItemAdd);
  };

  return (  
    <main>
      <h1>My Pantry</h1>

      <button onClick={toggleAddForm}>
        {showItemAdd ? "Hide Add Form" : "Show Add Form"}
      </button>
      {showItemAdd && <PantryItemAdd handlePantryItemAdd={props.handlePantryItemAdd} /> }

      <div className={`${styles.container} ${styles.listContainer}`}>
        {props.pantryItems.map(pantryItem => 
          <PantryCard key={pantryItem._id} pantryItem={pantryItem}/>
        )}
      </div>
    </main>
  );
}

export default PantryList;