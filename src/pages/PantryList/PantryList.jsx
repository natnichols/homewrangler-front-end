//css
import styles from './PantryList.module.css'

//components
import PantryCard from '../../components/PantryCard/PantryCard';

const PantryList = (props) => {
  return (  
    <main>
      <div className={`${styles.container} ${styles.formContainer}`}>
        {/* form for adding new pantry list */}
        Add New Pantry Item (Form)
        {/* pantry list */}
      </div>
      <div className={`${styles.container} ${styles.listContainer}`}>
        {props.pantryItems.map(pantryItem => 
          <PantryCard key={pantryItem._id} pantryItem={pantryItem}/>
        )}
      </div>
    </main>
  );
}

export default PantryList;