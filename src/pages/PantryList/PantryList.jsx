//css
import styles from './PantryList.module.css'

//components
import PantryCard from '../../components/PantryCard/PantryCard';
import PantryItemAdd from '../../components/PantryItemAdd/PantryItemAdd';

const PantryList = (props) => {
  return (  
    <main>
      <PantryItemAdd handlePantryItemAdd={props.handlePantryItemAdd} />

      {/* container for Add Item form - may not be needed later. */}
      {/* <div className={`${styles.container} ${styles.formContainer}`}>
      </div> */}

      <div className={`${styles.container} ${styles.listContainer}`}>
        {props.pantryItems.map(pantryItem => 
          <PantryCard key={pantryItem._id} pantryItem={pantryItem}/>
        )}
      </div>
    </main>
  );
}

export default PantryList;